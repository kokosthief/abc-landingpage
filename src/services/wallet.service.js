import { baseUrl } from "../config/api";

export const WalletService = {
  async verification(data) {
    return fetch(`${baseUrl}/verification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
};
