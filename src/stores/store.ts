import { create } from "zustand";
import type { UserSummary } from "../types/type";
import { getUserSummary } from "../apis/usercard";
import { fetchMyCreatedBand } from "../apis/mycreated";
import type { MyCreatedBandInfo } from "../types/type";

interface UserSummaryState {
  userSummary: UserSummary | null;
  fetchUserSummary: () => Promise<void>;
}

export const useUserSummaryStore = create<UserSummaryState>((set) => {
  const memberId = localStorage.getItem("memberId");
  return {
    userSummary: null,
    fetchUserSummary: async () => {
      try {
        if (!memberId) throw new Error("memberId 없음");
        const summary = await getUserSummary(memberId);
        console.log("API 응답:", summary);
        set({ userSummary: summary });
      } catch (error) {
        console.error("API 호출 실패:", error);
      }
    },
  };
});

interface MyCreatedBandState {
  myCreatedBand: MyCreatedBandInfo | null;
  fetchMyCreatedBand: (memberId: number) => Promise<void>;
}

export const useMyCreatedBandStore = create<MyCreatedBandState>((set) => ({
  myCreatedBand: null,
  fetchMyCreatedBand: async (memberId: number) => {
    try {
      const data = await fetchMyCreatedBand(memberId);
      set({ myCreatedBand: data });
    } catch (error) {
      console.error("마이 밴드 불러오기 실패", error);
    }
  },
}));

interface MyCreatedBandState {
  myCreatedBand: MyCreatedBandInfo | null;
  fetchMyCreatedBand: (memberId: number) => Promise<void>;
}

export const useMyCreatedBandStore = create<MyCreatedBandState>((set) => ({
  myCreatedBand: null,
  fetchMyCreatedBand: async (memberId: number) => {
    try {
      const data = await fetchMyCreatedBand(memberId);
      set({ myCreatedBand: data });
    } catch (error) {
      console.error("마이 밴드 불러오기 실패", error);
    }
  },
}));
