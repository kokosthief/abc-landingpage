import { useMemo } from "react";
import { breakpoints } from "../../constants/breakpoints";
import { MetaMaskErrorMessagesMap } from "../../constants/errors";
import { getParsedParams } from "../../helpers/getParsedParams";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useMetaMask } from "../../providers/MetaMaskProvider";
import { Button } from "../ui/Button";
import { Notification } from "../ui/popups/Notification";
import { PriceInformation } from "./PriceInformation";
import { SubscribeForm } from "./SubscribeForm";
import { WalletAddress } from "./WalletAddress";

export const SubscribeCard = () => {
  const {
    clearError,
    errorMessage,
    isConnected,
    isValidPage,
    isWrongConnect,
    connectMetaMask,
  } = useMetaMask();

  const { width } = useWindowSize();

  const { price, trader, user } = useMemo(() => {
    return getParsedParams(location.search);
  }, [location.search]);

  if (!isValidPage) {
    return (
      <Notification
        isOpened={!!errorMessage}
        message={MetaMaskErrorMessagesMap[errorMessage]}
        header={{
          status: "error",
          title: errorMessage,
        }}
      />
    );
  }

  return (
    <>
      <div className="rounded-2xl bg-white max-w-[580px] p-4 ss:p-10">
        <h1 className="h1 text-neutral-black mb-2">Subscribe to User</h1>
        <PriceInformation
          price={`${price} ETH`}
          title="Price:"
          perMonth={true}
          className="mb-4 ss:mb-6 "
        />
        {isConnected ? (
          <SubscribeForm
            disabled={isWrongConnect}
            price={price}
            user={user}
            trader={trader}
          />
        ) : (
          <Button onClick={connectMetaMask}>Connect a Wallet</Button>
        )}
        <div className="border-2 border-neutral-gray rounded-2xl p-3.5 mt-4 ss:mt-6">
          <WalletAddress address={user} title="Subscriber’s Wallet" />
          <hr className="my-2 ss:my-4" />
          <WalletAddress address={trader} title="Trader’s Wallet" />
        </div>
      </div>
      <Notification
        isOpened={!!errorMessage}
        onClose={clearError}
        message={
          typeof MetaMaskErrorMessagesMap[errorMessage] === "function"
            ? MetaMaskErrorMessagesMap[errorMessage](
                width > breakpoints.ss
                  ? user
                  : `${user?.slice(0, 17)}...${user?.slice(-10)}`
              )
            : MetaMaskErrorMessagesMap[errorMessage]
        }
        header={{
          status: "error",
          title: errorMessage,
        }}
      />
    </>
  );
};
