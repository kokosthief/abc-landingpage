import { useEffect, useMemo, useState } from "react";
import {
  GetSubscriptionErrorMessageMap,
  MetaMaskErrorMessagesMap,
  MetaMaskErrorTitlesMap,
} from "../constants/errors";
import {
  LoadingMessageMap,
  LoadingTitleMap,
  SuccessMessageMap,
  SuccessTitleMap,
} from "../constants/statusMessages";
import { getParsedParams } from "../helpers/getParsedParams";
import { useMetaMask } from "../providers/MetaMaskProvider";
import { WalletService } from "../services/wallet.service";
import { Button } from "./ui/Button";
import { Notification } from "./ui/popups/Notification";

export const ConnectWalletCard = () => {
  const { clearError, errorMessage, isConnected, connectMetaMask, wallet } =
    useMetaMask();
  const [verificationError, setVerificationError] = useState("");

  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const { token } = useMemo(() => {
    return getParsedParams(location.search);
  }, [location.search]);

  const getNotificationProps = () => {
    let status = "success";

    if (errorMessage || verificationError) {
      status = "error";
    }

    if (loading) {
      status = "loading";
    }

    if (isSuccess) {
      status = "success";
    }

    const notificationPropsMap = {
      error: {
        isOpened: !!errorMessage || !!verificationError,
        message:
          GetSubscriptionErrorMessageMap[errorMessage || verificationError],
        onClose: () => {
          clearError();
          setVerificationError("");
        },
        header: {
          status: "error",
          title: errorMessage || verificationError,
        },
      },
      loading: {
        isClosing: false,
        isOpened: loading,
        message: LoadingMessageMap[LoadingTitleMap.connectWallet],
        header: {
          status: "loading",
          title: LoadingTitleMap.connectWallet,
        },
      },
      success: {
        isClosing: false,
        isOpened: isSuccess,
        message: SuccessMessageMap[SuccessTitleMap.connectWallet],
        header: {
          status: "success",
          title: SuccessTitleMap.connectWallet,
        },
      },
    };

    return notificationPropsMap[status];
  };

  const notificationProps = useMemo(() => {
    return getNotificationProps();
  }, [errorMessage, isSuccess, loading, verificationError]);

  useEffect(() => {
    if (isConnected && wallet.accounts.length) {
      setLoading(true);
      WalletService.verification({ address: wallet.accounts[0], token })
        .then(() => {
          setIsSuccess(true);
        })
        .catch((err) => {
          setVerificationError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isConnected, wallet.accounts]);

  if (!token) {
    return (
      <Notification
        isClosing={false}
        isOpened={true}
        message={MetaMaskErrorMessagesMap[MetaMaskErrorTitlesMap.params]}
        header={{
          status: "error",
          title: MetaMaskErrorTitlesMap.params,
        }}
      />
    );
  }

  return (
    <>
      <div className="rounded-2xl bg-white max-w-[580px] p-4 ss:p-10">
        <h1 className="h1 text-neutral-black mb-2">Connect your Wallet</h1>
        <Button onClick={connectMetaMask} disabled={isConnected}>
          Connect a Wallet
        </Button>
      </div>
      <Notification {...notificationProps} />
    </>
  );
};
