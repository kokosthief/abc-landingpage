import {
  ConnectWalletErrorTitleMap,
  GetSubscriptionErrorTitleMap,
} from "../constants/errors";
import { http } from "./http";

export const WalletService = {
  async verification(body) {
    try {
      return await http.post("/verification", body);
    } catch {
      throw new Error(ConnectWalletErrorTitleMap.verification);
    }
  },

  async tokenVerification(body) {
    try {
      return await http.post("/token-verification", body);
    } catch ({ message, status }) {
      throw new Error(GetSubscriptionErrorTitleMap.tokenVerification);
    }
  },
};
