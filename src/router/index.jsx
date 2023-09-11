import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { SubscriptionPage } from "../pages/SubscriptionPage/SubscriptionPage";
import { MetaMaskContextProvider } from "../providers/MetaMaskProvider";

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
]);
