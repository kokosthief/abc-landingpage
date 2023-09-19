import { VerificationErrorTitleMap } from "../constants/errors";
import { http } from "./http";

export const WalletService = {
  async verification(body) {
    try {
      return await http.post("/v2/verification", body);
    } catch ({ status, message }) {
      if (
        (status === 400 &&
          message === VerificationErrorTitleMap.tokenNotFound) ||
        status === 401 ||
        status === 403
      ) {
        try {
          const { token } = await http.get("/generate-token");
          return await http.post("/v2/verification", body, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } catch (err) {
          throw err;
        }
      }
    }
  },

  async tokenVerification(body) {
    try {
      return await http.post("/v2/token-verification", body);
    } catch ({ message, status }) {
      if (status === 403) {
        throw new Error(message);
      }
    }
  },
};
