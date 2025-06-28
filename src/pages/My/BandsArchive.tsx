import { use, useEffect } from "react";
import { useMyArchivedBandStore } from "../../stores/store";

const BandsArchive = () => {
  const { myArchivedBand, fetchMyArchivedBand } = useMyArchivedBandStore();
  const memberId = Number(localStorage.getItem("memberId"));

  useEffect(() => {
    if (memberId) {
      fetchMyArchivedBand(memberId);
    }
  }, [memberId]);

  const band = myArchivedBand?.myBandList?.[0];

  if (!band) {
    return (
      <div className="flex justify-center items-center h-[228px]">
        <span className="text-gray-500">
          불러오는 중 혹은 데이터가 없습니다.
        </span>
      </div>
    );
  }
  return (
    <div className="mb-[30px] w-[365px] h-[228px] mx-auto ">
      <div className=" bg-white rounded-2xl shadow-md p-4 space-y-3">
        <div className="flex">
          <img
            src="/icons/box.svg"
            alt="박스 아이콘"
            className="w-[20px] h-[20px] mr-[10px]"
          />
          <h2 className="text-[16px] w-[150px] h-[24px]">감정 밴드 아카이브</h2>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex w-[323px] h-[30px]">
            <div className="w-[48px] h-[28px] bg-[pink] rounded-[20px]">
              <div className="flex justify-center items-center w-12 h-7 rounded-[20px] text-white text-xs font-normal font-['SF_Pro'] leading-none">
                {band.emotion}
              </div>
            </div>
          </div>
          <div className="flex">
            <img
              src="/icons/calender.svg"
              alt="달력 아이콘"
              className="ml-[6px] w-[14px] h-[14px]"
            />
            <span className="text-[10px] w-[106px] h-[15px] text-sm text-[#979797]">
              2025년 6월 25일
              {/**/}
            </span>
          </div>
        </div>

        <div className="w-80 inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="self-stretch justify-start text-black/80 text-xs font-medium font-['Roboto'] leading-none tracking-wide">
              {band.description}
            </div>
          </div>
          <div className="self-stretch flex flex-wrap gap-2">
            {band.musicList?.map((music, index) => (
              <div
                className="w-[140px] h-[40px] relative overflow-hidden"
                key={index}
              >
                <div className="w-7 h-7 left-0 top-0 absolute bg-zinc-100 rounded-lg overflow-hidden">
                  <img src={music.albumImageLink} alt="앨범커버" />
                </div>
                <div className="z-0 left-[38px] top-0 absolute text-black text-xs font-semibold font-['Roboto'] leading-none tracking-wide overflow-hidden whitespace-nowrap text-ellipsis w-[95px]">
                  {" "}
                  {music.title}
                </div>
                <div className="left-[38px] top-[13px] absolute justify-start text-neutral-400 text-[10px] font-normal font-['Roboto'] leading-none tracking-wide">
                  {music.artist}
                </div>
              </div>
            ))}
          </div>
          <div className="self-stretch h-0 bg-zinc-300 outline outline-1 outline-offset-[-0.50px] outline-zinc-300/50"></div>
          <div className="self-stretch inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <img src="/icons/people.svg" alt="사람" />
              <div className="justify-start text-neutral-400 text-xs font-semibold font-['Roboto'] leading-none tracking-wide">
                {band.peopleCount}명
              </div>
              <img src="/icons/sm_album.svg" alt="수록곡" />
              <div className="justify-start text-neutral-400 text-xs font-semibold font-['Roboto'] leading-none tracking-wide">
                {band.songCount}곡
              </div>
            </div>
            <div className="flex justify-start items-end gap-0.5">
              <img src="/icons/your_not_liked.svg" alt="좋아요 안누름" />
              <div className="justify-start text-[#979797] text-xs font-medium font-['Roboto'] leading-none tracking-wide">
                {band.commentCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BandsArchive;
