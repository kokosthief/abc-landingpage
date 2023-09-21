import { useEffect, useMemo, useState } from "react";
import {
  GetSubscriptionErrorMessageMap,
  GetSubscriptionErrorTitleMap,
  MetaMaskErrorMessagesMap,
  MetaMaskErrorTitlesMap,
  VerificationErrorMessageMap,
  VerificationErrorTitleMap,
} from "../constants/errors";
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
          GetSubscriptionErrorMessageMap[errorMessage] ||
          VerificationErrorMessageMap[verificationError],
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
        message: "Hold on, sometimes it takes a while.",
        header: {
          status: "loading",
          title: "The verification is processing",
        },
      },
      success: {
        isClosing: false,
        isOpened: isSuccess,
        message: "The wallet was connected to your telegram account.",
        header: {
          status: "success",
          title: "The connect is successful!",
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
          if (err.message === VerificationErrorTitleMap.tokenExist) {
            setVerificationError(err.message);
            return;
          }

          setVerificationError(GetSubscriptionErrorTitleMap.unknown);
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
