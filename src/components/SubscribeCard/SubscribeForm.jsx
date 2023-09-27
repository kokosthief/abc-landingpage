import classNames from "classnames";
import { ethers, parseEther } from "ethers";
import { useMemo, useState } from "react";
import contractABI from "../../abi/contract.json";
import { CONTRACT_ADDRESS } from "../../config/env";
import {
  GetSubscriptionErrorMessageMap,
  GetSubscriptionErrorTitleMap,
} from "../../constants/errors";
import {
  LoadingMessageMap,
  LoadingTitleMap,
  SuccessMessageMap,
  SuccessTitleMap,
} from "../../constants/statusMessages";
import { Button } from "../ui/Button";
import { Notification } from "../ui/popups/Notification";
import { Select } from "../ui/Select";
import { PriceInformation } from "./PriceInformation";

const options = [
  { value: 1, label: "1 month" },
  { value: 2, label: "2 months" },
  { value: 3, label: "3 month" },
  { value: 4, label: "4 month" },
  { value: 5, label: "5 month" },
  { value: 6, label: "6 month" },
  { value: 7, label: "7 month" },
  { value: 8, label: "8 month" },
  { value: 9, label: "9 month" },
  { value: 10, label: "10 month" },
  { value: 11, label: "11 month" },
];

export const SubscribeForm = ({
  className,
  disabled,
  groupOwnerWallet,
  followerId,
  price,
  user,
  trader,
}) => {
  const [subscription, setSubscription] = useState(options[0]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubscriptionChange = (selectedOption) => {
    setSubscription(selectedOption);
  };

  const clearError = () => {
    setErrorMessage("");
  };

  const onSubscribe = async (event) => {
    try {
      event.preventDefault();
      if (disabled) return;
      clearError();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const balance = await provider.getBalance(user);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        contractABI,
        signer
      );

      const currentPrice = (price * subscription.value).toFixed(
        price.toString().length - 2
      );

      const parsedPrice = parseEther(currentPrice.toString());

      if (parsedPrice > balance) {
        setErrorMessage(GetSubscriptionErrorTitleMap.balance);
        return;
      }

      const isPaused = await contract.paused();

      if (isPaused) {
        setErrorMessage(GetSubscriptionErrorTitleMap.expectation);
        return;
      }

      let overrides = {
        value: parsedPrice.toString(),
        gasLimit: 150_000,
      };

      const trx = await contract.getSubscription(
        trader,
        groupOwnerWallet,
        followerId,
        overrides
      );
      setIsLoading(true);
      await trx.wait();
      setIsSuccess(true);
    } catch (err) {
      if (err?.code === "ACTION_REJECTED") {
        console.log(err);
        return;
      }
      setErrorMessage(GetSubscriptionErrorTitleMap.unknown);
    } finally {
      setIsLoading(false);
    }
  };

  const getNotificationProps = () => {
    let status = "success";

    if (errorMessage) {
      status = "error";
    } else if (isLoading) {
      status = "loading";
    }

    const notificationPropsMap = {
      error: {
        isClosing: true,
        isOpened: !!errorMessage,
        message: GetSubscriptionErrorMessageMap[errorMessage],
        onClose: clearError,
        header: {
          status: "error",
          title: errorMessage,
        },
      },
      loading: {
        isClosing: false,
        isOpened: isLoading,
        message: LoadingMessageMap[LoadingTitleMap.subscribe],
        header: {
          status: "loading",
          title: LoadingTitleMap.subscribe,
        },
      },
      success: {
        isClosing: false,
        isOpened: isSuccess,
        message: SuccessMessageMap[SuccessTitleMap.subscribe],
        header: {
          status: "success",
          title: SuccessTitleMap.subscribe,
        },
      },
    };

    return notificationPropsMap[status];
  };

  const notificationProps = useMemo(() => {
    return getNotificationProps();
  }, [errorMessage, isLoading, isSuccess]);

  return (
    <>
      <form
        onSubmit={onSubscribe}
        className={classNames({ [className]: className })}
      >
        <label className="block mb-2 ss:mb-4">
          <h4 className="body-bold mb-1.5">Select a Subscription</h4>
          <Select
            onChange={handleSubscriptionChange}
            options={options}
            value={subscription}
          />
        </label>

        <PriceInformation
          price={`${
            Number.isInteger(+price)
              ? price * subscription.value
              : (price * subscription.value).toFixed(
                  price.toString().length - 2
                )
          } ETH`}
          title="Total:"
          className="mb-2 ss:mb-4"
        />
        <Button disabled={disabled || isLoading || isSuccess}>Pay Now</Button>
      </form>
      <Notification {...notificationProps} />
    </>
  );
};
