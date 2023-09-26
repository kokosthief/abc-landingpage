import { http } from "./http";

export const WalletService = {
  async verification(body) {
    return await http.post("/verification", body);
  },

  async tokenVerification(body) {
    try {
      return await http.post("/token-verification", body);
    } catch ({ message, status }) {
      if (status === 403) {
        throw new Error("Connection refused");
      }
    }
  },
};
