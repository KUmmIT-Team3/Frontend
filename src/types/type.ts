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
    songs: song[];
    liked: boolean;
}

export interface TopBands {
    popularBands: bands[];
    allBands: bands[];
}

// 마이페이지 MyCard 컴포넌트에서 사용
export interface UserSummary {
    name: "string"; // 이름
    signUpDate: "2025-06-28"; // 가입일
    bandCreateCount: 0; // 만든 밴드 수
    bandJoinCount: 0; // 참여한 밴드 수
    likeCount: 0; // 받은 공감 수
    songAddCount: 0; // 추가한 곡 수
}

// 마이페이지 MyCreatedBands 컴포넌트에서 사용
export interface Music {
    title: string;
    artist: string;
    albumImageLink: string;
    previewLink: string;
}
// 마이페이지 MyCreatedBands 컴포넌트에서 사용

export interface MyCreatedBandInfo {
    myBandList: [
        {
            emotion: "string";
            writerName: "string";
            description: "string";
            musicList: [
                {
                    albumImageLink: "string";
                    title: "string";
                    artist: "string";
                    previewLink: "string";
                }
            ];
            likeCount: 0;
            peopleCount: 0;
            songCount: 0;
            commentCount: 0;
            endTime: "2025-06-28T18:38:14.465Z";
        }
    ];
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

export interface CommentPayload {
    comment: string;
}

