import axios from "axios";
import type { MyLikedBandInfo } from "../types/type";

export const fetchMyLikedBand = async (
  memberId: number
): Promise<MyLikedBandInfo> => {
  const response = await axios.get<MyLikedBandInfo>(
    "http://144.24.81.195:8080/api/member/like-band",
    {
      params: { memberId },
    }
  );
  return response.data;
};
