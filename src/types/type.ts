
export interface bands {
    id: number;
    creatorName: string;
    emotion: string;
    description: string;
    endTime: string; //"2025-06-28T12:38:04.413Z", 날짜 별도 처리?
    likeCount: number;
    peopleCount: number;
    songCount: number;
    commentCount: number;
    liked: boolean;
}

export interface TopBands {
    popularBands: bands[];
    allBands: bands[];
}
