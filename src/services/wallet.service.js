import { http } from "./http";

export const WalletService = {
  async verification(data) {
    return http.post("/verification", data);
  },
};
