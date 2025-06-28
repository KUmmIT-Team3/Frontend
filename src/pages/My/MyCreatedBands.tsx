import { useEffect } from "react";
import { useMyCreatedBandStore } from "../../stores/store";

const MyCreatedBands = () => {
  const { myCreatedBand, fetchMyCreatedBand } = useMyCreatedBandStore();
  const memberId = Number(localStorage.getItem("memberId"));

  useEffect(() => {
    if (memberId) {
      fetchMyCreatedBand(memberId);
    }
  }, [memberId]);

  const band = myCreatedBand?.myBandList?.[0];

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
    <div className="relative mb-[30px] w-[365px] h-[228px] mx-auto">
      <div className="absolute bg-white rounded-2xl shadow-lg bottom-0 left-0 right-0">
        <div className="bg-white rounded-2xl p-4 space-y-3">
          <div className="flex">
            <img
              src="/icons/melody.svg"
              alt="멜로디 아이콘"
              className="w-[20px] h-[20px] mr-[10px]"
            />
            <h2 className="text-[16px] w-[114px] h-[24px]">내가 만든 밴드</h2>
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
                src="/icons/clock.svg"
                alt="시계"
                className="ml-[6px] w-[14px] h-[14px]"
              />
              <span className="text-[10px] w-[106px] h-[15px] text-[#979797]">
                {band.endTime
                  ? `${new Date(band.endTime).getHours()}시 ${new Date(
                      band.endTime
                    ).getMinutes()}분 소멸`
                  : ""}
              </span>
            </div>
          </div>
          <div className="w-80 flex flex-col gap-2">
            <div className="text-black/80 text-xs font-medium leading-none">
              {band.description}
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
                    {music.title}
                  </div>
                  <div className="left-[38px] top-[13px] absolute justify-start text-neutral-400 text-[10px] font-normal font-['Roboto'] leading-none tracking-wide">
                    {music.artist}
                  </div>
                </div>
              ))}
            </div>
            <div className="h-0 bg-zinc-300 outline outline-1 outline-offset-[-0.50px] outline-zinc-300/50"></div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <img src="/icons/people.svg" alt="사람" />
                <div className="text-neutral-400 text-xs font-semibold">
                  {band.peopleCount}명
                </div>
                <img src="/icons/sm_album.svg" alt="수록곡" />
                <div className="text-neutral-400 text-xs font-semibold">
                  {band.songCount}곡
                </div>
                <img src="/icons/comment.svg" alt="말풍선" />
                <div className="text-neutral-400 text-xs font-semibold">
                  {band.commentCount}
                </div>
              </div>
              <div className="flex gap-0.5">
                <img src="/icons/your_liked.svg" alt="좋아요 누름" />
                <div className="text-red-500 text-xs font-medium">
                  {band.likeCount}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCreatedBands;
