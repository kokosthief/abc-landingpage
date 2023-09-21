import { breakpoints } from "../../constants/breakpoints";
import { MetaMaskErrorMessagesMap } from "../../constants/errors";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useMetaMask } from "../../providers/MetaMaskProvider";
import { Button } from "../ui/Button";
import { Notification } from "../ui/popups/Notification";
import { PriceInformation } from "./PriceInformation";
import { SubscribeForm } from "./SubscribeForm";

export const SubscribeCard = () => {
  const {
    clearError,
    errorMessage,
    isConnected,
    isValidPage,
    isWrongConnect,
    connectMetaMask,
    subscribeInfo: { caller, from, price, to, until },
  } = useMetaMask();

  const isValidTime = new Date(until).getTime() > new Date().getTime();

  const { width } = useWindowSize();

  if (!isValidPage) {
    return (
      <Notification
        isClosing={false}
        isOpened={!!errorMessage}
        message={MetaMaskErrorMessagesMap[errorMessage]}
        header={{
          status: "error",
          title: errorMessage,
        }}
      />
    );
  }

  if (!to || !price || !from) return;

  return (
    <>
      <div className="rounded-2xl bg-white max-w-[600px] p-4 ss:p-10">
        <h1 className="h1 text-neutral-black mb-2">Subscribe to @{caller}</h1>
        <PriceInformation
          price={`${price} ETH`}
          title="Price:"
          perMonth={true}
          className="mb-4 ss:mb-6 "
        />
        {isConnected ? (
          <SubscribeForm
            disabled={isWrongConnect || !isValidTime}
            price={price}
            user={from}
            trader={to}
          />
        ) : (
          <Button onClick={connectMetaMask} disabled={!isValidTime}>
            Connect a Wallet
          </Button>
        )}
      </div>
      <Notification
        isOpened={!!errorMessage}
        onClose={clearError}
        message={
          typeof MetaMaskErrorMessagesMap[errorMessage] === "function"
            ? MetaMaskErrorMessagesMap[errorMessage](
                width > breakpoints.ss
                  ? from
                  : `${from?.slice(0, 17)}...${from?.slice(-10)}`
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
