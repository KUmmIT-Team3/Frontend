import { useEffect, useState } from "react";
import UpperNavBar from "../../components/UpperNavBar";
import type { BandDetail } from "../../types/type";
import { dummyBandsDetail, getbandsDetail } from "../../apis/detailpage";
import { useLocation } from "react-router-dom";
import DoomsDayNotifier from "./DoomsDayNotifier";
import BandIntro from "./BandIntro";
import BandPlayList from "./BandPlayList";
import MusicSearchBar from "../../components/MusicSearchBar";
import CommentBar from "./CommentBar";
import ArchiveNotifier from "./ArchiveNotifier";

const DetailBandPage = () => {
  const [bandDetail, setBandDetail] = useState<BandDetail>();

  const [isMusicBar, setIsMusicBar] = useState(false);
  const [isCommentBar, setIsCommentBar] = useState(false);
  const [isArchived, setIsArchived] = useState(false);

  const location = useLocation();

  const getDetailData = async (id: number) => {
    try {
      const detailData = await getbandsDetail(id);
      setBandDetail(detailData);
    } catch (error) {
      console.error("데이터를 불러오는 데 실패했습니다:", error);
    }
  };

  useEffect(() => {
    //서버 요청
    // const pathId = location.pathname;
    // if (pathId.includes('/detail/')) {
    //     const id = pathId.replace('/detail/', '')
    //     getDetailData(parseInt(id))
    // }

    //더미 처리
    setBandDetail(dummyBandsDetail);
  }, [location.pathname]);

  return (
    <div className="max-w-[412px] h-[917px] mx-auto  bg-[#E1E7EC]">
      <UpperNavBar
        isCanBack={true}
        text={bandDetail?.emotion || "감정"}
        bandDetail={bandDetail}
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
            onClick={() => {
              setIsArchived(!isArchived);
            }}
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

        {isArchived && <ArchiveNotifier />}

        {isMusicBar && <MusicSearchBar />}

        {isCommentBar
          ? bandDetail?.comments !== undefined && (
              <CommentBar comments={bandDetail?.comments} />
            )
          : null}
        {/* {bandDetail?.comments !== undefined && <CommentBar comments={bandDetail?.comments} />} */}

        {bandDetail?.songs !== undefined && (
          <BandPlayList songs={bandDetail?.songs} />
        )}
      </div>
      <DoomsDayNotifier endTime={bandDetail?.endTime} />
    </div>
  );
};

export default DetailBandPage;
