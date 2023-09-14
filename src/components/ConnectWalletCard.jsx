import { useEffect, useMemo, useState } from "react";
import {
  GetSubscriptionErrorMessageMap,
  MetaMaskErrorMessagesMap,
  MetaMaskErrorTitlesMap,
} from "../constants/errors";
import { getParsedParams } from "../helpers/getParsedParams";
import { useMetaMask } from "../providers/MetaMaskProvider";
import { WalletService } from "../services/wallet.service";
import { Button } from "./ui/Button";
import { Notification } from "./ui/popups/Notification";

export const ConnectWalletCard = () => {
  const { clearError, errorMessage, isConnected, connectMetaMask, wallet } =
    useMetaMask();

  const [isSuccess, setIsSuccess] = useState(false);

  const { token } = useMemo(() => {
    return getParsedParams(location.search);
  }, [location.search]);

  const getNotificationProps = () => {
    let status = "success";

    if (errorMessage) {
      status = "error";
    }

    const notificationPropsMap = {
      error: {
        isOpened: !!errorMessage,
        message: GetSubscriptionErrorMessageMap[errorMessage],
        onClose: clearError,
        status: "error",
        title: errorMessage,
      },
      success: {
        isOpened: isSuccess,
        message: "The wallet was connected to your telegram account.",
        onClose: () => 1,
        status: "success",
        title: "The connect is successful!",
      },
    };

    return notificationPropsMap[status];
  };

  const { isOpened, message, onClose, status, title } = useMemo(() => {
    return getNotificationProps();
  }, [errorMessage, isSuccess]);

  useEffect(() => {
    if (isConnected && wallet.accounts.length) {
      WalletService.verification({ address: wallet.accounts[0], token }).then(
        () => {
          setIsSuccess(true);
        }
      );
    }
  }, [isConnected, wallet.accounts]);

  if (!token) {
    return (
      <Notification
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
      <Notification
        isOpened={isOpened}
        onClose={onClose}
        message={message}
        header={{
          status: status,
          title: title,
        }}
      />
    </>
  );
};
