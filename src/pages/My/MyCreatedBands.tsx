<<<<<<< HEAD
=======
import React, { useEffect } from "react";
import { useMyCreatedBandStore } from "../../stores/store";

>>>>>>> 7938be0 (feat: 마이페이지 - 내가 만든 밴드 API 구현 (미완))
const MyCreatedBands = () => {
  const { myCreatedBand, fetchMyCreatedBand } = useMyCreatedBandStore();

  useEffect(() => {
    fetchMyCreatedBand(memberId);
  }, []);

  return (
    <div className="relative mb-[30px] w-[365px] h-[228px] mx-auto">
      <div className="absolute bg-white rounded-2xl shadow-lg bottom-0 left-0 right-0 ">
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
              <div className="w-[50px] h-[30px] bg-slate-400 rounded-[20px]">
                <div className="w-[34px] h-[16px] ml-[9px] mt-[8px] justify-start text-white text-xs font-normal font-['SF_Pro'] leading-none">
                  {myCreatedBand?.myBandList[0].emotion}
                </div>
              </div>
            </div>
            <div className="flex">
              <img
                src="/icons/clock.svg"
                alt="시계"
                className="ml-[6px] w-[14px] h-[14px]"
              />
              <span className="text-[10px] w-[106px] h-[15px] text-[#979797] ">
                {myCreatedBand?.myBandList[0].endTime
                  ? new Date(myCreatedBand?.myBandList[0].endTime).getHours() +
                    "시 " +
                    new Date(
                      myCreatedBand?.myBandList[0].endTime
                    ).getMinutes() +
                    "분 소멸"
                  : ""}
              </span>
            </div>
          </div>

          <div className="w-80 inline-flex flex-col justify-start items-start gap-2">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-start text-black/80 text-xs font-medium font-['Roboto'] leading-none tracking-wide">
                {myCreatedBand?.myBandList[0].description}
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-start gap-2">
              {myCreatedBand?.myBandList[0].musicList.map((music, index) => (
                <div className="w-40 h-7 relative" key={index}>
                  <div className="w-7 h-7 left-0 top-0 absolute bg-zinc-100 rounded-lg overflow-hidden">
                    <img src={music.albumImageLink} alt="앨범커버" />
                  </div>
                  <div className="left-[38px] top-0 absolute justify-start text-black text-xs font-semibold font-['Roboto'] leading-none tracking-wide">
                    {music.title}
                  </div>
                  <div className="left-[38px] top-[15px] absolute justify-start text-neutral-400 text-[10px] font-normal font-['Roboto'] leading-none tracking-wide">
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
                  {myCreatedBand?.myBandList[0].peopleCount}명
                </div>
                <img src="/icons/sm_album.svg" alt="수록곡" />
                <div className="justify-start text-neutral-400 text-xs font-semibold font-['Roboto'] leading-none tracking-wide">
                  {myCreatedBand?.myBandList[0].songCount}곡
                </div>
                <img src="/icons/comment.svg" alt="말풍선" />
                <div className="justify-start text-neutral-400 text-xs font-semibold font-['Roboto'] leading-none tracking-wide">
                  {myCreatedBand?.myBandList[0].commentCount}
                </div>
              </div>
              <div className="flex justify-start items-end gap-0.5">
                <img src="/icons/your_liked.svg" alt="좋아요 누름" />
                <div className="justify-start text-red-500 text-xs font-medium font-['Roboto'] leading-none tracking-wide">
                  {myCreatedBand?.myBandList[0].likeCount}
                </div>
              </div>
            </div>
            <div className="relative flex justify-between items-center w-[320px] h-[15px] mt-2">
              <button className="absolute left-0">
                <span className="text-[#979797] text-[10px]">이전</span>
              </button>
              <button className="absolute right-0">
                <span className="text-[#979797] text-[10px]">다음</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCreatedBands;

{
  /* 여러 개 접근할 시
  {myCreatedBand?.myBandList.map((band, index) => (
        <div key={index} className="p-4 border rounded mb-4">
          <p>감정: {band.emotion}</p>
          <p>설명: {band.description}</p>
          <p>곡 수: {band.songCount}</p>
          <p>종료 시간: {band.endTime}</p>
          <p>참여자 수: {band.peopleCount}</p>
          <p>댓글 수: {band.commentCount}</p>
          <p>공감 수: {band.likeCount}</p>

          {band.musicList.map((music, i) => (
            <div key={i} className="ml-4">
              <p>🎵 제목: {music.title}</p>
              <p>👤 아티스트: {music.artist}</p>
              <img src={music.albumImageLink} alt="앨범 커버" width="50" />
            </div>
          ))}
        </div>
      ))}
  */
}
