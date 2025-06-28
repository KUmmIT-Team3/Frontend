
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

export interface song {
    id: number;
    title: string;
    artist: string;
    creatorName: string;
    createdAt: string;
    albumImageLink: string;
    previewLink: string;
    emotionBandId: number;
    emotion: string;
}

export interface comment {
    id: number;
    creatorName: string;
    comment: string;
}

export interface BandDetail {
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
    songs: song[];
    comments: comment[];
    archived: boolean;
}

export interface BandPlayListProps {
    id: number;
    title: string;
    artist: string;
    creatorName: string;
    albumImageLink: string;
    previewLink: string;
}