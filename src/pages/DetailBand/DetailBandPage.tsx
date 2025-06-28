// src/pages/DetailBandPage.tsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getBandDetail, toggleArchive, toggleLike } from "/"; // 수정: toggleLike 추가
// import type { BandDetail, Song } from ; // 수정: Song 타입도 import

// 컴포넌트 import
import UpperNavBar from "../../components/UpperNavBar";
import BandIntro from "./BandIntro";
import BandPlayList from "./BandPlayList";
import MusicSearchBar from "../../components/MusicSearchBar";
import CommentBar from "./CommentBar";
import ArchiveNotifier from "./ArchiveNotifier";
import DoomsDayNotifier from "./DoomsDayNotifier";
import type { BandDetail, Song } from "../../types/type";
import { getBandDetail, toggleArchive, toggleLike } from "../../apis/detailpage";

type Music = {
    artworkUrl100: string;
    previewUrl: string;
    trackName: string;
    artistName: string;
};

const DetailBandPage = () => {
    const [music, setMusic] = useState<Music | null>(null);
    const [isMusicBar, setIsMusicBar] = useState(false);
    const [isCommentBar, setIsCommentBar] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [bandDetail, setBandDetail] = useState<BandDetail | null>(null);
    const { bandId } = useParams<{ bandId: string }>();
    const memberId = parseInt(localStorage.getItem("memberId") || "0", 10);

    const fetchBandDetail = async () => {
        if (!bandId || !memberId) {
            setError("유효한 밴드 또는 사용자 정보가 없습니다.");
            setIsLoading(false);
            return;
        }
        try {
            // 데이터 로딩 시작 전, 로딩 상태를 true로 설정
            setIsLoading(true);
            const data = await getBandDetail(parseInt(bandId), memberId);
            setBandDetail(data);
        } catch (err) {
            console.error(err);
            setError("데이터를 불러오는 중 오류가 발생했습니다.");
        } finally {
            // 성공/실패 여부와 관계없이 로딩 상태를 false로 설정
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBandDetail();
    }, [bandId]);

    // '좋아요' 핸들러 추가
    const handleToggleLike = async () => {
        if (!bandDetail) return;
        await toggleLike(bandDetail.id, memberId);
        await fetchBandDetail(); // 데이터 재로딩
    };

    const handleToggleArchive = async () => {
        if (!bandDetail) return;
        await toggleArchive(bandDetail.id, memberId);
        await fetchBandDetail(); // 데이터 재로딩
    };

    // --- 가드 클로즈: 데이터가 준비되기 전에는 아래 UI를 렌더링하지 않음 ---
    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>에러: {error}</div>;
    if (!bandDetail) return <div>밴드 정보를 찾을 수 없습니다.</div>;

    // --- 데이터가 준비된 후의 렌더링 ---
    return (
        <div className="max-w-[412px] h-[917px] mx-auto bg-[#E1E7EC]">
            {/* 수정: 가드 클로즈 덕분에 더 이상 ?. 나 || 연산자가 필요 없음 */}
            <UpperNavBar isCanBack={true} text={bandDetail.emotion} isLogo={false} />
            <div className="flex flex-col h-[853px] items-center">
                <BandIntro {...bandDetail} />
                <div className="w-[412px] flex justify-around pl-6 pr-6 mb-6">

                    {/* '좋아요' 버튼 추가 */}
                    <button onClick={handleToggleLike} className="flex flex-col items-center">
                        <img src={bandDetail.liked ? "/icons/Heart-on.svg" : "/icons/Heart-off.svg"} alt="좋아요" />
                        <span>좋아요</span>
                    </button>

                    <button onClick={() => setIsCommentBar(!isCommentBar)} className="flex flex-col items-center">
                        <img src="/icons/comment_icon_pink.svg" alt="코멘트" />
                        <span>코멘트</span>
                    </button>

                    <button onClick={() => setIsMusicBar(!isMusicBar)} className="flex flex-col items-center">
                        <img src="/icons/add-on.svg" alt="음악" />
                        <span>음악</span>
                    </button>

                    <button onClick={handleToggleArchive} className="flex flex-col items-center">
                        <img src="/icons/Archive.svg" alt="보관" />
                        <span>{bandDetail.archived ? '보관됨' : '보관'}</span>
                    </button>
                </div>

                {bandDetail.archived && <ArchiveNotifier />}
                {isMusicBar && <MusicSearchBar selectedMusic={music} setSelectedMusic={setMusic} />}

                {/* 수정: 더 간결해진 조건부 렌더링 */}
                {isCommentBar && (
                    <CommentBar
                        comments={bandDetail.comments}
                        bandId={bandDetail.id}
                        memberId={memberId}
                        onCommentPosted={fetchBandDetail}
                    />
                )}

                {/* BandPlayList의 props 타입 이름을 Song으로 통일했으므로, BandPlayList 내부도 수정이 필요할 수 있습니다. */}
                <BandPlayList songs={bandDetail.songs as unknown as Song[]} />
            </div>

            <DoomsDayNotifier endTime={bandDetail.endTime} />
        </div>
    );
};

export default DetailBandPage;