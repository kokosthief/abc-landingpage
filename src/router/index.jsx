import { createBrowserRouter } from "react-router-dom";
import { ConnectWalletPage } from "../pages/ConnectWalletPage/ConnectWalletPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { SubscriptionPage } from "../pages/SubscriptionPage/SubscriptionPage";
import { MetaMaskProvider } from "../providers/MetaMaskProvider";

export const router = createBrowserRouter([
  {
    path: "/h",
    element: <HomePage />,
  },
  {
    path: "/subscribe",
    element: (
      <MetaMaskProvider>
        <SubscriptionPage />
      </MetaMaskProvider>
    ),
  },
  {
    path: "/connect-wallet",
    element: (
      <MetaMaskProvider checkIsNeeded={false}>
        <ConnectWalletPage />
      </MetaMaskProvider>
    ),
  },
]);
