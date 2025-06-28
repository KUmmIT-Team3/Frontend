
const MyLikedBands = () => {
  return (
    <div className="mb-[30px] w-[365px] h-[228px] mx-auto overflow-y-hidden">
      <div className="bg-white rounded-2xl shadow-md p-4 space-y-3">
        <h2 className="text-lg font-semibold">🎵 내가 만든 밴드</h2>
        <div className="flex items-center justify-between">
          <div className="w-12 h-7 relative">
            <div className="w-12 h-7 left-0 top-0 absolute bg-[pink] rounded-[20px]" />
            <div className="left-[8px] top-[7px] absolute justify-start text-white text-xs font-normal font-['SF_Pro'] leading-none">
              설렘
            </div>
          </div>
          <span className="w-[106px] h-[23px] text-sm text-[#979797]">
            22시간 59분 남음
          </span>
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
                <div className="w-6 h-6 left-[3px] top-[3px] absolute"></div>
              </div>
              <div className="left-[38px] top-0 absolute justify-start text-black text-xs font-semibold font-['Roboto'] leading-none tracking-wide">
                Dynamite
              </div>
              <div className="left-[38px] top-[15px] absolute justify-start text-neutral-400 text-[10px] font-normal font-['Roboto'] leading-none tracking-wide">
                BTS
              </div>
            </div>
          </div>
          <div className="self-stretch h-0 bg-zinc-300 outline-1 outline-offset-[-0.50px] outline-zinc-300/50"></div>
          <div className="self-stretch inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <div className="justify-start text-neutral-400 text-xs font-semibold font-['Roboto'] leading-none tracking-wide">
                👥 8명
              </div>
              <div className="justify-start text-neutral-400 text-xs font-semibold font-['Roboto'] leading-none tracking-wide">
                🎵 1곡
              </div>
              <div className="justify-start text-neutral-400 text-xs font-semibold font-['Roboto'] leading-none tracking-wide">
                💬 5
              </div>
            </div>
            <div className="flex justify-start items-end gap-0.5">
              <div className="justify-start text-red-500 text-xs font-medium font-['Roboto'] leading-none tracking-wide">
                ❤️ 15
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLikedBands;
