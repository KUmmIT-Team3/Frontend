import { useEffect, useState } from "react";
import BottomBar from "../../components/BottomBar";
import UpperNavBar from "../../components/UpperNavBar";
import CreateBandButton from "./CreateBandButton";
import EmotionBand from "./EmotionBand";
import { dummyTopEmotionBands } from "../../apis/home";
import type { bands, TopBands } from "../../types/type";

const HomePage = () => {
  const [topBands, setTopBands] = useState<TopBands>();

  useEffect(() => {
    setTopBands(dummyTopEmotionBands);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-[412px] h-[917px] bg-[#F3EEEF] overflow-hidden">
        <UpperNavBar isCanBack={false} text="" isLogo={true} />
        <div className="w-full h-full px-[26px] overflow-y-scroll bg-[#FBF6F7]">
          <CreateBandButton />

          <div className="mt-2.5">
            <div className="flex justify-between items-center">
              <div className="text-black text-xl font-normal leading-normal">
                지금 인기있는 감정 밴드
              </div>
              <div className="w-12 h-6 px-2 py-1 bg-stone-300 rounded-[20px] flex justify-center items-center">
                <div className="text-stone-600 text-[11px] font-normal leading-none">
                  실시간
                </div>
              </div>
            </div>

            {topBands ? (
              <>
                {topBands.popularBands.map((bandUnit: bands) => (
                  <EmotionBand key={bandUnit.id} {...bandUnit} />
                ))}
              </>
            ) : (
              <>추후 빈 카드 임시 출력하도록</>
            )}
          </div>

          <div className="mt-3.5">
            <div className="flex justify-between items-center">
              <div className="text-black text-xl font-normal leading-normal">
                전체 감정 밴드
              </div>
              <div className="w-12 h-6 px-2 py-1 bg-stone-300 rounded-[20px] flex justify-center items-center">
                <div className="text-stone-600 text-[11px] font-normal leading-none">
                  {topBands ? topBands.allBands.length : "~"}개
                </div>
              </div>
            </div>

            {topBands ? (
              <>
                {topBands.allBands.map((bandUnit: bands) => (
                  <EmotionBand key={bandUnit.id} {...bandUnit} />
                ))}
              </>
            ) : (
              <>추후 빈 카드 임시 출력하도록</>
            )}
          </div>
        </div>
        <BottomBar />
      </div>
    </div>
  );
};

export default HomePage;
