export const MetaMaskErrorTitlesMap = {
  install: "You do not have MetaMask installed",
  network: "Incorrect network connection",
  params: "Invalid link parameters",
};

export const MetaMaskErrorMessagesMap = {
  [MetaMaskErrorTitlesMap.install]: "Please install MetaMask before proceeding",
  [MetaMaskErrorTitlesMap.network]: "Please select the network:\nGoerli",
  [MetaMaskErrorTitlesMap.params]:
    "Please make sure you have followed the correct link",
};

export const ConnectWalletErrorTitleMap = {
  verification: "Please, use the /addwallet command again",
};

export const GetSubscriptionErrorTitleMap = {
  balance: "Not enough money",
  expectation: "Expectation",
  tokenVerification: "Please, use the /subscribe command again",
  unknown: "Something went wrong",
};

export const GetSubscriptionErrorMessageMap = {
  [GetSubscriptionErrorTitleMap.balance]:
    "Refill your account before continuing",
  [GetSubscriptionErrorTitleMap.expectation]: "Try again later",
  [GetSubscriptionErrorTitleMap.unknown]: "Try again",
};
