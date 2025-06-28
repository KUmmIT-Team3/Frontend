import axios from "axios";
import type { UserSummary } from "../types/type";

type memberIdType = string | number;

export const getUserSummary = async (
  memberId: memberIdType
): Promise<UserSummary> => {
  const res = await axios.get<UserSummary>(
    `http://144.24.81.195:8080/api/member/profile`,
    { params: { memberId } }
  );
  return res.data;
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
