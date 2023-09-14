import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { SubscriptionPage } from "../pages/SubscriptionPage/SubscriptionPage";
import { MetaMaskContextProvider } from "../providers/MetaMaskProvider";
import { ConnectWalletPage } from "../pages/ConnectWalletPage/ConnectWalletPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/subscribe",
    element: (
      <MetaMaskContextProvider>
        <SubscriptionPage />
      </MetaMaskContextProvider>
    ),
  },
  {
    path: "/connect-wallet",
    element: (
      <MetaMaskContextProvider checkIsNeeded={false}>
        <ConnectWalletPage />
      </MetaMaskContextProvider>
    ),
  },
]);
