import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { CHAIN_ID } from "../config/env";
import { MetaMaskErrorTitlesMap } from "../constants/errors";
import { formatBalance } from "../helpers/formatBalance";
import { formatEther } from "../helpers/formatEther";

import { getParsedParams } from "../helpers/getParsedParams";
import { WalletService } from "../services/wallet.service";

const initialState = { accounts: [], balance: "", chainId: "" };

const MetaMaskContext = createContext({});

export const MetaMaskProvider = ({ checkIsNeeded = true, children }) => {
  const [wallet, setWallet] = useState(initialState);
  const [subscribeInfo, setSubscribeInfo] = useState({});
  const [isValidPage, setIsValidPage] = useState(false);

  const [isWrongConnect, setIsWrongConnect] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const clearError = () => setErrorMessage("");

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
      setIsWrongConnect(false);
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
        setIsConnected(false);
        setWallet(initialState);
        return;
      }

      setIsConnected(true);

      const balance = formatBalance(
        await window.ethereum.request({
          method: "eth_getBalance",
          params: [accounts[0], "latest"],
        })
      );

      const chainId = await window.ethereum.request({
        method: "eth_chainId",
      });

      if (chainId !== CHAIN_ID) {
        await switchChainId(CHAIN_ID);
        return;
      }

      setWallet({ accounts, balance, chainId });
    },
    [switchChainId]
  );

  const updateWalletOnly = useCallback(() => updateWallet(), [updateWallet]);
  const updateWalletAndAccounts = useCallback(
    (accounts) => updateWallet(accounts),
    [updateWallet]
  );

  const connectMetaMask = useCallback(async () => {
    const { ethereum } = window;
    const currentLink = window.location.href;
    const currentPath = window.location.pathname;

    if (ethereum) {
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        if (window.location.pathname !== currentPath) {
          window.location = currentLink;
        }

        updateWallet(accounts);
      } catch (err) {
        if (!err.message.includes(`type 'wallet_requestPermissions' `)) {
          setErrorMessage(err.message);
        }
      }
    } else {
      setErrorMessage(MetaMaskErrorTitlesMap.install);
      window.open(`https://metamask.app.link/dapp/${currentLink}`);
    }
  }, [updateWallet]);

  useEffect(() => {
    const getProvider = async () => {
      if (checkIsNeeded) {
        const { token } = getParsedParams(location.search);

        if (!token) {
          setIsValidPage(false);
          setErrorMessage(MetaMaskErrorTitlesMap.params);
          return;
        }

        try {
          const { group_owner_wallet, trn_id, price, ...props } =
            await WalletService.tokenVerification({
              token,
            });

          setSubscribeInfo({
            groupOwnerWallet: group_owner_wallet,
            followerId: trn_id,
            price: formatEther(price),
            ...props,
          });
        } catch (err) {
          setIsValidPage(false);
          setErrorMessage(err.message);
          return;
        }
      }

      const provider = window.ethereum;
      setIsValidPage(true);
      updateWallet();

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
