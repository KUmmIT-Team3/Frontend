import { useEffect, useState } from "react";
import UpperNavBar from "../../components/UpperNavBar";
import type { BandDetail } from "../../types/type";
import { getBandDetail, toggleArchive } from "../../apis/detailpage";
import { useParams } from "react-router-dom";
import DoomsDayNotifier from "./DoomsDayNotifier";
import BandIntro from "./BandIntro";
import BandPlayList from "./BandPlayList";
import MusicSearchBar from "../../components/MusicSearchBar";
import CommentBar from "./CommentBar";
import ArchiveNotifier from "./ArchiveNotifier";

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
      setIsLoading(true);
      const data = await getBandDetail(parseInt(bandId), memberId);
      setBandDetail(data);
    } catch (err) {
      console.error(err);
      setError("데이터를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBandDetail();
  }, [bandId]);

  const handleToggleArchive = async () => {
    if (!bandDetail) return;
    await toggleArchive(bandDetail.id, memberId);
    await fetchBandDetail(); // 데이터 재로딩
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;
  if (!bandDetail) return <div>밴드 정보를 찾을 수 없습니다.</div>;

  return (
    <div className="max-w-[412px] h-[917px] mx-auto  bg-[#E1E7EC]">
      <UpperNavBar
        isCanBack={true}
        text={bandDetail?.emotion || "감정"}
        isLogo={false}
      />
      <div className="flex flex-col h-[853px] items-center">
        {bandDetail !== undefined && <BandIntro {...bandDetail} />}
        <div className="w-[412px] flex justify-between pl-6 pr-6 mb-6">
          <div
            data-has-icon-end="false"
            data-has-icon-start="true"
            data-size="Medium"
            data-state="Default"
            data-variant="Primary"
            onClick={() => {
              setIsMusicBar(!isMusicBar);
            }}
            className="w-25 p-3 bg-pink-400 rounded-lg shadow-[2px_4px_15px_0px_rgba(0,0,0,0.10)] outline-1 outline-offset-[-1px] outline-pink-400 inline-flex justify-center items-center gap-2 overflow-hidden"
          >
            <div className="w-4 h-4 relative">
              <img src="/icons/add-on.svg" alt="음악" />
            </div>
            <div className="justify-start text-Text-Brand-On-Brand text-base font-normal font-['Inter'] leading-none">
              음악
            </div>
          </div>

          <div
            data-has-icon-end="false"
            data-has-icon-start="true"
            data-size="Medium"
            data-state="Default"
            data-variant="Primary"
            onClick={() => {
              setIsCommentBar(!isCommentBar);
            }}
            className="w-25 p-3 bg-[#ffffff] rounded-lg shadow-[2px_4px_15px_0px_rgba(0,0,0,0.10)] outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2 overflow-hidden"
          >
            <div className="w-4 h-4 relative">
              <img src="/icons/comment_icon_pink.svg" alt="코멘트" />
            </div>
            <div className="justify-start text-pink-400 text-base font-normal font-['Inter'] leading-none">
              코멘트
            </div>
          </div>

          <div
            data-has-icon-end="false"
            data-has-icon-start="true"
            data-size="Medium"
            data-state="Default"
            data-variant="Primary"
            onClick={handleToggleArchive}
            className="w-25 p-3 bg-[#ffffff] rounded-lg shadow-[2px_4px_15px_0px_rgba(0,0,0,0.10)] outline-1 outline-offset-[-1px] outline-white inline-flex justify-center items-center gap-2 overflow-hidden"
          >
            <div className="w-4 h-4 relative">
              <img src="/icons/Archive.svg" alt="보관" />
            </div>

            <div className="justify-start text-cyan-800 text-base font-normal font-['Inter'] leading-none">
              보관
            </div>
          </div>
        </div>

        {bandDetail.archived && <ArchiveNotifier />}

        {isMusicBar && (
          <MusicSearchBar selectedMusic={music} setSelectedMusic={setMusic} />
        )}

        {isCommentBar
          ? bandDetail?.comments !== undefined && (
              <CommentBar
                comments={bandDetail.comments}
                bandId={bandDetail.id}
                memberId={memberId}
                onCommentPosted={fetchBandDetail}
              />
            )
          : null}

        {bandDetail?.songs !== undefined && (
          <BandPlayList songs={bandDetail?.songs} />
        )}
      </div>

      <DoomsDayNotifier endTime={bandDetail?.endTime} />
    </div>
  );
};

export default DetailBandPage;
