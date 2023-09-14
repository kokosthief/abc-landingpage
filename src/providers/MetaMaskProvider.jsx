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

const disconnectedState = { accounts: [], balance: "", chainId: "" };

const MetaMaskContext = createContext({});

export const MetaMaskContextProvider = ({ checkIsNeeded = true, children }) => {
  const [wallet, setWallet] = useState(disconnectedState);
  const [isValidPage, setIsValidPage] = useState(true);

  const [isWrongConnect, setIsWrongConnect] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const clearError = () => setErrorMessage("");

  const accountValidation = useCallback((accounts) => {
    const { user } = getParsedParams(location.search);

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
  }, []);

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
    async (providedAccounts) => {
      if (!window.ethereum) return;
      clearError();

      const accounts =
        providedAccounts ||
        (await window.ethereum.request({ method: "eth_accounts" }));

      if (!accounts.length) {
        setWallet(disconnectedState);
        return;
      }

      setIsConnected(true);
      const isValid = checkIsNeeded && accountValidation(accounts);

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

  const updateWalletOnly = useCallback(() => updateWallet(), [updateWallet]);
  const updateWalletAndAccounts = useCallback(
    (accounts) => updateWallet(accounts),
    [updateWallet]
  );

  const connectMetaMask = useCallback(async () => {
    const { ethereum } = window;

    if (ethereum) {
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        updateWallet(accounts);
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
    if (checkIsNeeded) {
      const { price, user, trader } = getParsedParams(location.search);

      if (!price || !user || !trader) {
        setIsValidPage(false);
        setErrorMessage(MetaMaskErrorTitlesMap.params);
        return;
      }
    }

    const getProvider = async () => {
      const provider = window.ethereum;
      setIsValidPage(true);
      updateWalletOnly();
      if (provider) {
        window.ethereum.on("accountsChanged", updateWalletAndAccounts);
        window.ethereum.on("chainChanged", updateWalletOnly);
      }
    };

    getProvider();

    return () => {
      window.ethereum?.removeListener(
        "accountsChanged",
        updateWalletAndAccounts
      );
      window.ethereum?.removeListener("chainChanged", updateWalletOnly);
    };
  }, [connectMetaMask, updateWalletOnly, updateWalletAndAccounts]);

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
