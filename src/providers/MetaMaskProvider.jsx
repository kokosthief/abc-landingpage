import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { MetaMaskErrorTitlesMap } from "../constants/errors";
import { formatBalance } from "../helpers/formatBalance";

import { getParsedParams } from "../helpers/getParsedParams";
import { WalletService } from "../services/wallet.service";

const disconnectedState = { accounts: [], balance: "", chainId: "" };

const MetaMaskContext = createContext({});

export const MetaMaskContextProvider = ({ checkIsNeeded = true, children }) => {
  const [wallet, setWallet] = useState(disconnectedState);
  const [subscribeInfo, setSubscribeInfo] = useState({});
  const [isValidPage, setIsValidPage] = useState(false);

  const [isWrongConnect, setIsWrongConnect] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const clearError = () => setErrorMessage("");

  const accountValidation = useCallback(
    (accounts, user = subscribeInfo.from) => {
      if (!accounts.includes(user.toLowerCase())) {
        setErrorMessage(MetaMaskErrorTitlesMap.wrongWalletConnected);
        setIsWrongConnect(true);
        return false;
      }

      if (accounts[0] !== user.toLowerCase()) {
        setErrorMessage(MetaMaskErrorTitlesMap.wrongWalletSelected);
        setIsWrongConnect(true);
        return false;
      }

      return true;
    },
    []
  );

  const switchChainId = useCallback(async (chainId) => {
    try {
      const provider = window.ethereum;
      setIsWrongConnect(true);
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [
          {
            chainId,
          },
        ],
      });
      clearError();
    } catch (err) {
      setErrorMessage(MetaMaskErrorTitlesMap.network);
    }
  }, []);

  const updateWallet = useCallback(
    async (providedAccounts, user) => {
      if (!window.ethereum) return;
      clearError();

      const accounts =
        providedAccounts ||
        (await window.ethereum.request({ method: "eth_accounts" }));

      if (!accounts.length) {
        setIsConnected(false);
        setWallet(disconnectedState);
        return;
      }

      setIsConnected(true);

      let isValid = checkIsNeeded && accountValidation(accounts, user);

      if (!isValid && checkIsNeeded) return;

      setIsWrongConnect(false);

      const balance = formatBalance(
        await window.ethereum.request({
          method: "eth_getBalance",
          params: [accounts[0], "latest"],
        })
      );

      const chainId = await window.ethereum.request({
        method: "eth_chainId",
      });

      const chainIdGoerliETH = import.meta.env.VITE_CHAIN_ID;

      if (chainId !== chainIdGoerliETH) {
        await switchChainId(chainIdGoerliETH);
        return;
      }

      setWallet({ accounts, balance, chainId });
    },
    [accountValidation, switchChainId]
  );

  const updateWalletOnly = useCallback(
    (user) => () => updateWallet(null, user),
    [updateWallet]
  );
  const updateWalletAndAccounts = useCallback(
    (user) => (accounts) => updateWallet(accounts, user),
    [updateWallet]
  );

  const connectMetaMask = useCallback(async () => {
    const { ethereum } = window;

    if (ethereum) {
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        updateWallet(accounts, subscribeInfo.from);
      } catch (err) {
        if (err?.code === 4001) {
          setErrorMessage(MetaMaskErrorTitlesMap[4001]);
          return;
        }

        if (!err.message.includes(`type 'wallet_requestPermissions' `)) {
          setErrorMessage(err.message);
        }
      }
    } else {
      setErrorMessage(MetaMaskErrorTitlesMap.install);
      window.open(`https://metamask.app.link/dapp/${window.location.host}`);
    }
  }, [updateWallet]);

  useEffect(() => {
    let user;

    const getProvider = async () => {
      if (checkIsNeeded) {
        const { token } = getParsedParams(location.search);

        if (!token) {
          setIsValidPage(false);
          setErrorMessage(MetaMaskErrorTitlesMap.params);
          return;
        }

        try {
          const { user_address, time, trade_amount, trade_address } =
            await WalletService.tokenVerification({ token });
          user = user_address;
          setSubscribeInfo({
            from: user_address,
            price: trade_amount,
            time,
            to: trade_address,
          });
        } catch (err) {
          setIsValidPage(false);
          setErrorMessage(err.message);
          return;
        }
      }

      const provider = window.ethereum;
      setIsValidPage(true);
      updateWallet(null, user);

      if (provider) {
        window.ethereum.on("accountsChanged", updateWalletAndAccounts(user));
        window.ethereum.on("chainChanged", updateWalletOnly(user));
      }
    };

    getProvider();

    return () => {
      window.ethereum?.removeListener(
        "accountsChanged",
        updateWalletAndAccounts(user)
      );
      window.ethereum?.removeListener("chainChanged", updateWalletOnly(user));
    };
  }, []);

  return (
    <MetaMaskContext.Provider
      value={{
        wallet,
        errorMessage,
        isConnected,
        isValidPage,
        isWrongConnect,
        connectMetaMask,
        clearError,
        subscribeInfo,
      }}
    >
      {children}
    </MetaMaskContext.Provider>
  );
};

export const useMetaMask = () => {
  const context = useContext(MetaMaskContext);

  return context;
};
