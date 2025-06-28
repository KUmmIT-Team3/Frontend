import axios from "axios";
import type { MyArchivedBandInfo } from "../types/type";

export const fetchMyArchivedBand = async (
  memberId: number
): Promise<MyArchivedBandInfo> => {
  const response = await axios.get<MyArchivedBandInfo>(
    "http://144.24.81.195:8080/api/member/my-band",
    {
      params: { memberId },
    }
  );
  return response.data;
};
