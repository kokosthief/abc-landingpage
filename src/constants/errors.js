export const MetaMaskErrorTitlesMap = {
  install: "You do not have MetaMask installed",
  network: "Incorrect network connection",
  params: "Invalid link parameters",
  wrongWalletSelected: "Wrong wallet selected",
  wrongWalletConnected: "Wrong wallet connected",
  4001: "You rejected the request",
};

export const MetaMaskErrorMessagesMap = {
  [MetaMaskErrorTitlesMap.install]: "Please install MetaMask before proceeding",
  [MetaMaskErrorTitlesMap.network]: "Please select the network:\nGoerli",
  [MetaMaskErrorTitlesMap.params]:
    "Please make sure you have followed the correct link",
  [MetaMaskErrorTitlesMap.wrongWalletSelected]: (wallet) =>
    `The selected wallet doesn’t match the subscriber’s wallet. Please connect the wallet:\n${wallet}`,
  [MetaMaskErrorTitlesMap.wrongWalletConnected]: (wallet) =>
    `The connected wallet doesn’t match the subscriber’s wallet. Please connect the wallet:\n${wallet}`,
  [MetaMaskErrorTitlesMap[4001]]: (wallet) =>
    `Please connect the wallet:\n${wallet}`,
};

export const VerificationErrorTitleMap = {
  tokenExist: "IP address already exists",
  tokenNotFound: "Token not found",
};

export const VerificationErrorMessageMap = {
  [VerificationErrorTitleMap.tokenExist]:
    "The wallet was connected to your telegram account.",
};

export const GetSubscriptionErrorTitleMap = {
  balance: "Not enough money",
  expectation: "Expectation",
  unknown: "Something went wrong",
};

export const GetSubscriptionErrorMessageMap = {
  [GetSubscriptionErrorTitleMap.balance]:
    "Refill your account before continuing",
  [GetSubscriptionErrorTitleMap.expectation]: "Try again later",
  [GetSubscriptionErrorTitleMap.unknown]: "Try again",
};
