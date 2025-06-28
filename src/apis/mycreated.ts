import axios from "axios";
import type { MyCreatedBandInfo } from "../types/type";

export const fetchMyCreatedBand = async (
  memberId: number
): Promise<MyCreatedBandInfo> => {
  const response = await axios.get<MyCreatedBandInfo>(
    "http://144.24.81.195:8080/api/member/my-band",
    {
      params: { memberId },
    }
  );
  return response.data;
};
