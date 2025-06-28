import { useEffect, useState } from "react";
import BottomBar from "../../components/BottomBar";
import UpperNavBar from "../../components/UpperNavBar";
import CreateBandButton from "./CreateBandButton";
import EmotionBand from "./EmotionBand";
import { getTopEmotionBands } from "../../apis/home";
import type { bands, TopBands } from "../../types/type";

const HomePage = () => {
    const [topBands, setTopBands] = useState<TopBands>();

  const getBandsData = async () => {
        try {
            // 1. 비동기 함수를 호출하고, 데이터(결과)가 올 때까지 기다립니다.
            const bandData = await getTopEmotionBands();
            // 2. 받아온 최종 데이터(결과)를 상태로 설정합니다.
            setTopBands(bandData);
        } catch (error) {
            console.error("데이터를 불러오는 데 실패했습니다:", error);
        }
    };

    useEffect(() => {
        //서버 요청
        getBandsData()

        //더미 처리
        // setTopBands(dummyTopEmotionBands);
        console.log(topBands);
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
