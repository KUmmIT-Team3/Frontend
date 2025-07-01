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


    const fetchBandDetail = async () => {

        if (!bandId || !memberId) {
            console.warn("bandId 또는 memberId가 유효하지 않아 요청을 중단합니다.");
            console.groupEnd();
            setError("유효한 밴드 또는 사용자 정보가 없습니다.");
            setIsLoading(false);
            return;
        }

        try {
            setIsLoading(true);

            const data = await getBandDetail(parseInt(bandId), memberId);

            console.log("서버로부터 받은 원본 데이터:", data);
            console.log("받은 데이터의 타입:", typeof data);

            setBandDetail(data);
            console.log("setBandDetail(data) 호출 완료.");

        } catch (err) {
            console.error("X. CATCH 블록에서 에러 발생:", err);
            setError("데이터를 불러오는 중 오류가 발생했습니다.");
        } finally {
            setIsLoading(false);
            console.log("로딩 상태 종료.");
            console.groupEnd();
        }
    };

    useEffect(() => {
        fetchBandDetail();
    }, [bandId]);

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
        <div className="relative max-w-[412px] h-[917px] mx-auto bg-[#E1E7EC]">
            {/* 수정: 가드 클로즈 덕분에 더 이상 ?. 나 || 연산자가 필요 없음 */}
            <UpperNavBar isCanBack={true} text={bandDetail.emotion} isLogo={false} />
            <div className="flex flex-col h-[853px] items-center">
                <BandIntro {...bandDetail} handleClick={handleToggleLike} />
                <div className="w-[412px] flex justify-around pl-6 pr-6 mb-6">

                    <div data-has-icon-end="false" data-has-icon-start="true" data-size="Medium" data-state="Default" data-variant="Primary"
                        onClick={() => setIsMusicBar(!isMusicBar)}
                        className="w-24 p-3 bg-[#F9906F] rounded-lg shadow-[2px_4px_15px_0px_rgba(0,0,0,0.10)] outline-1 outline-offset-[-1px] outline-[#F9906F] inline-flex justify-center items-center gap-2 overflow-hidden">
                        <img src="/icons/add-on.svg" alt="음악" />
                        <div className="justify-start text-Text-Brand-On-Brand text-base font-normal font-['Inter'] text-[#FFFFFF] leading-none">음악</div>
                    </div>

                    <div data-has-icon-end="false" data-has-icon-start="true" data-size="Medium" data-state="Default" data-variant="Primary"
                        onClick={() => setIsCommentBar(!isCommentBar)}
                        className="w-24 p-3 bg-[#FFFFFF] rounded-lg shadow-[2px_4px_15px_0px_rgba(0,0,0,0.10)] outline-1 outline-offset-[-1px] outline-[#FFFFFF] inline-flex justify-center items-center gap-2 overflow-hidden">
                        <img src="/icons/comment_icon_pink.svg" alt="코멘트" />
                        <div className="justify-start text-Text-Brand-On-Brand text-base font-normal font-['Inter'] leading-none text-[#F9906F]">코멘트</div>
                    </div>

                    <div data-has-icon-end="false" data-has-icon-start="true" data-size="Medium" data-state="Default" data-variant="Primary"
                        onClick={handleToggleArchive}
                        className="w-24 p-3 bg-[#FFFFFF] rounded-lg shadow-[2px_4px_15px_0px_rgba(0,0,0,0.10)] outline-1 outline-offset-[-1px] outline-[#FFFFFF] inline-flex justify-center items-center gap-2 overflow-hidden">
                        <img src="/icons/Archive.svg" alt="보관" />
                        <div className="justify-start text-Text-Brand-On-Brand text-base font-normal font-['Inter'] text-[#1D4F7A] leading-none">{bandDetail.archived ? '보관됨' : '보관'}</div>
                    </div>

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

                <DoomsDayNotifier endTime={bandDetail.endTime} />
            </div>


        </div>
    );
};

export default DetailBandPage;