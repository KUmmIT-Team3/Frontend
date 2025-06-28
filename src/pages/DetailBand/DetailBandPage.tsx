// src/pages/DetailBandPage.tsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    const { id: bandId } = useParams<{ id: string }>();
    const memberId = parseInt(localStorage.getItem("memberId") || "0", 10);

    // src/pages/DetailBandPage.tsx 의 fetchBandDetail 함수를 아래 코드로 교체하세요.

    const fetchBandDetail = async () => {
        // --- 진단을 위한 상세 로그 ---
        console.group("데이터 로딩 사이클");
        console.log("1. useEffect가 fetchBandDetail 호출함");
        console.log("2. 현재 상태", { bandId, memberId });

        if (!bandId || !memberId) {
            console.warn("3. bandId 또는 memberId가 유효하지 않아 요청을 중단합니다.");
            console.groupEnd();
            setError("유효한 밴드 또는 사용자 정보가 없습니다.");
            setIsLoading(false);
            return;
        }

        try {
            setIsLoading(true);
            console.log("4. API 서버에 데이터 요청을 보냅니다...");
            const data = await getBandDetail(parseInt(bandId), memberId);

            // ✨ 여기가 가장 중요합니다! 서버가 준 데이터의 실제 모양을 확인합니다.
            console.log("5. 서버로부터 받은 원본 데이터:", data);
            console.log("6. 받은 데이터의 타입:", typeof data);

            // 만약 데이터가 객체라면, 더 자세히 확인합니다.
            if (typeof data === 'object' && data !== null) {
                console.log("7. 데이터의 키(key) 목록:", Object.keys(data));
            }

            setBandDetail(data);
            console.log("8. setBandDetail(data) 호출 완료.");

        } catch (err) {
            console.error("X. CATCH 블록에서 에러 발생:", err);
            setError("데이터를 불러오는 중 오류가 발생했습니다.");
        } finally {
            setIsLoading(false);
            console.log("9. 로딩 상태 종료.");
            console.groupEnd();
        }
    };

    // useEffect는 그대로 두시면 됩니다.
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

                {isCommentBar && (
                    <CommentBar
                        comments={bandDetail.comments}
                        bandId={bandDetail.id}
                        memberId={memberId}
                        onCommentPosted={fetchBandDetail}
                    />
                )}

                <BandPlayList songs={bandDetail.songs as unknown as Song[]} />
            </div>

            <DoomsDayNotifier endTime={bandDetail.endTime} />
        </div>
    );
};

export default DetailBandPage;