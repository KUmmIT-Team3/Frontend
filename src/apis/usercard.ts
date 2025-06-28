import axios from "axios";
import type { UserSummary } from "../types/type";

export const getUserSummary = async () => {
  const response = await axios.get(
    "http://144.24.81.195:8080/api/member/profile",
    {
      params: {
        memberId: 1, // 여기에 실제 로그인된 사용자 ID를 넣어야 함
      },
    }
  );
  return response.data;
};

export const fetchUserSummary = async (
  userId: number
): Promise<UserSummary> => {
  try {
    const response = await axios.get<UserSummary>(
      `/api/user/${userId}/summary`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user summary:", error);
    throw error;
  }
};
