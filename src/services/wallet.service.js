import { http } from "./http";

export const WalletService = {
  async verification(data) {
    return http.post("/v2/verification", data);
  },
};
