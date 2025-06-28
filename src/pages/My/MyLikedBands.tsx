import React from "react";

const MyLikedBands = () => {
  return (
    <div className="relative mb-[30px] w-[365px] h-[228px] mx-auto ">
      <div className="absolute bg-white rounded-2xl shadow-lg bottom-0 left-0 right-0 ">
        <div className="bg-white rounded-2xl shadow-md p-4 space-y-3">
          <div className="flex">
            <img
              src="/icons/liked.svg"
              alt="하트"
              className="w-[20px] h-[20px] mr-[10px]"
            />
            <h2 className="text-[16px] w-[114px] h-[24px]">내가 공감한 밴드</h2>
          </div>
          <div className="flex items-center justify-between ">
            <div className="flex w-[323px] h-[30px]">
              <div className="w-[50px] h-[30px] bg-[pink] rounded-[20px]">
                <div className="w-[23px] h-[16px] ml-[14px] mt-[8px] justify-start text-white text-xs font-normal font-['SF_Pro'] leading-none">
                  설렘
                </div>
              </div>
              <div className="w-[64px] h-[30px] ml-px mt-[8px] justify-start text-neutral-400 text-xs font-medium font-['Roboto'] leading-none tracking-wide">
                by 이지은
              </div>
            </div>
            <div className="flex">
              <img
                src="/icons/clock2.svg"
                alt="시계"
                className="ml-[6px] w-[14px] h-[14px]"
              />
              <span className="text-[10px] w-[106px] h-[15px] text-sm text-[#979797]">
                22시간 59분 남음
              </span>
            </div>
          </div>

          <div className="w-80 inline-flex flex-col justify-start items-start gap-2">
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-start text-black/80 text-xs font-medium font-['Roboto'] leading-none tracking-wide">
                새로운 시작이 기대돼요! 두근두근한 마음을 음악으로 표현해봐요.
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-start gap-2">
              <div className="w-28 h-7 relative">
                <div className="w-7 h-7 left-0 top-0 absolute bg-zinc-100 rounded-lg overflow-hidden">
                  <img src="/icons/album.svg" alt="앨범커버" />
                </div>
                <div className="left-[38px] top-0 absolute justify-start text-black text-xs font-semibold font-['Roboto'] leading-none tracking-wide">
                  Dynamite
                </div>
                <div className="left-[38px] top-[15px] absolute justify-start text-neutral-400 text-[10px] font-normal font-['Roboto'] leading-none tracking-wide">
                  BTS
                </div>
              </div>
            </div>
            <div className="self-stretch h-0 bg-zinc-300 outline outline-1 outline-offset-[-0.50px] outline-zinc-300/50"></div>
            <div className="self-stretch inline-flex justify-between items-center">
              <div className="flex justify-start items-center gap-2">
                <img src="/icons/people.svg" alt="사람" />
                <div className="justify-start text-neutral-400 text-xs font-semibold font-['Roboto'] leading-none tracking-wide">
                  8명
                </div>
                <img src="/icons/sm_album.svg" alt="수록곡" />
                <div className="justify-start text-neutral-400 text-xs font-semibold font-['Roboto'] leading-none tracking-wide">
                  1곡
                </div>
                <img src="/icons/comment.svg" alt="말풍선" />
                <div className="justify-start text-neutral-400 text-xs font-semibold font-['Roboto'] leading-none tracking-wide">
                  5
                </div>
              </div>
              <div className="flex justify-start items-end gap-0.5">
                <img src="/icons/your_liked.svg" alt="좋아요 누름" />
                <div className="justify-start text-red-500 text-xs font-medium font-['Roboto'] leading-none tracking-wide">
                  15
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLikedBands;
