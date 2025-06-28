import React from "react";

const MyCard = () => {
  return (
    <div className="mt-[33px] ml-[23px] mb-[30px] w-[365px] h-[160px] bg-gradient-to-r from-[#C77EB5] to-[#F9906F] rounded-[10px]">
      <div className="relative p-0">
        <div className="absolute flex mb-[33px] top-[23px] left-[24px]">
          <div className="pr-[10px]">
            <div className="w-10 h-10 px-3 py-2 bg-zinc-300/20 rounded-[20px] inline-flex flex-col justify-center items-center gap-2.5">
              <div className="justify-start text-white text-base font-normal font-['Roboto'] leading-normal tracking-wide">
                <span className=" text-white ">김</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute w-[100px] h-[24px] mb-0">
              <span className="text-white font-normal w-[46px] h-[24px] text-lg">
                김민수
              </span>
            </div>
            <div className="absolute w-[200px] h-[15px] bottom-0">
              <span className="text-white w-[120px] h-[15px] text-[10px]">
                2025년 6월 25일부터 함께
              </span>
            </div>
          </div>
        </div>
        <div className="relative flex justify-evenly top-[98px] left-[24px] w-[315px] h-[39px]">
          <div className="w-[42px] h-[39px]">
            <span className="flex justify-center text-white">8</span>
            <span className="flex justify-center text-[10px] text-white">
              만든 밴드
            </span>
          </div>
          <div className="w-[51px] h-[39px]">
            <span className="flex justify-center text-white">24</span>
            <span className="flex justify-center text-[10px] text-white">
              참여한 밴드
            </span>
          </div>
          <div className="w-[42px] h-[39px]]">
            <span className="flex justify-center text-white">156</span>
            <span className="flex justify-center text-[10px] text-white">
              받은 공감
            </span>
          </div>
          <div className="w-[42px] h-[39px]">
            <span className="flex justify-center text-white">42</span>
            <span className="flex justify-center text-[10px] text-white">
              추가한 곡
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
