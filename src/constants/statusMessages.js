export const SuccessTitleMap = {
  connectWallet: "The connect is successful!",
  subscribe: "The payment is successful!",
};

export const SuccessMessageMap = {
  [SuccessTitleMap.connectWallet]:
    "The wallet was connected to your telegram account.",
  [SuccessTitleMap.subscribe]:
    "Your payment is completed! Your subscription will be activated in 5 minutes.",
};

export const LoadingTitleMap = {
  connectWallet: "Hold on, sometimes it takes a while.",
  subscribe: "Hold on, sometimes it takes a while.",
};

export const LoadingMessageMap = {
  [LoadingTitleMap.connectWallet]: "The verification is processing",
  [LoadingTitleMap.subscribe]: "The transaction is processing",
};
