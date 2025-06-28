import { create } from "zustand";
import type { UserSummary } from "../types/type";
import { getUserSummary } from "../apis/usercard";

interface UserSummaryState {
  userSummary: UserSummary | null;
  fetchUserSummary: () => Promise<void>;
}

export const useUserSummaryStore = create<UserSummaryState>((set) => ({
  userSummary: null,
  fetchUserSummary: async () => {
    try {
      const summary = await getUserSummary();
      console.log("API 응답:", summary);
      set({ userSummary: summary });
    } catch (error) {
      console.error("API 호출 실패:", error);
    }
  },
}));
