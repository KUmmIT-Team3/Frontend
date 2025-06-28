import UpperNavBar from "../../components/UpperNavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBandPage = () => {
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [inputValue, setInputValue] = useState("");
  const emotions = [
    "기쁨",
    "슬픔",
    "그리움",
    "설렘",
    "평온함",
    "외로움",
    "희망",
    "감사",
    "분노",
    "불안",
  ];
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div className="w-[412px] h-[917px] bg-[#F3EEEF]">
        <UpperNavBar isCanBack={true} text="감정 밴드 만들기" />
        <div className="flex justify-center mt-1 mx-[2px] gap-[5px]">
          <p className="w-[195px] h-1 bg-[#C77EB5] rounded-lg"></p>
          <p className="w-[195px] h-1 bg-[#D9D9D9] rounded-lg"></p>
        </div>
        <div className="flex items-center mb-6 pt-[38px]">
          <img src="./icons/pencil.svg" className="ml-[59px] w-6 h-6 " />
          <span className="ml-[19px] text-lg text-[16px]">
            지금 느끼는 감정을 선택해 주세요
          </span>
        </div>
        <div className="flex flex-col items-center relative">
          <div className="w-[360px] bg-white px-[28px] pt-[34px] pb-[19px] rounded-2xl shadow-md">
            <p className="mb-1.5 ml-[7px] text-[14px]">인기 감정</p>
            <div className="flex flex-wrap ">
              <div className="flex flex-wrap ">
                {emotions.map((emotion) => (
                  <button
                    key={emotion}
                    onClick={() => {
                      setSelectedEmotion(
                        selectedEmotion === emotion ? "" : emotion
                      );
                      setInputValue("");
                    }}
                    className={`w-[65.75px] h-[32px] my-[6px] mx-[5px] border rounded-[10px] text-[13px] ${
                      selectedEmotion === emotion
                        ? "bg-[#F9906F] text-white border-[#F9906F]"
                        : "bg-white text-black border-[#D9D9D9]"
                    }`}
                  >
                    {emotion}
                  </button>
                ))}
              </div>
            </div>
            <span className="ml-[7px] block mt-6 mb-2 text-[14px]">
              또는 직접 입력
            </span>
            <input
              className="w-[293px] h-[48px] border ml-[5px] border-[#D9D9D9] rounded-lg px-3 py-1 text-[14px] font-['Work_Sans'] focus:outline-none focus:border-[#979797]"
              placeholder="예: 복잡한 마음, 뿌듯함, 아련함..."
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setSelectedEmotion(e.target.value);
              }}
            ></input>
            {selectedEmotion && (
              <>
                <span className="ml-[7px] block mt-6 mb-2 text-[14px]">
                  감정에 대한 소개 (선택사항)
                </span>
                <textarea
                  className="w-[293px] h-[86px] border ml-[5px] font-['Work_Sans'] border-[#D9D9D9] rounded-lg px-3 py-1 text-[14px] focus:outline-none focus:border-[#979797]"
                  placeholder="지금 느끼는 감정에 대해 간단히 설명해 주세요.예: 오늘 비가 와서 문득 떠오른 사람이 있어요..."
                ></textarea>
              </>
            )}
          </div>

          <button
            className={`fixed bottom-[40px] left-1/2 transform -translate-x-1/2 w-[347px] h-[40px] py-3 text-white rounded-[8px] flex items-center justify-center ${
              selectedEmotion ? "bg-[#C77EB5] cursor-pointer" : "bg-[#dfb5d5]"
            }`}
            disabled={!selectedEmotion}
            onClick={() =>
              navigate("/addmusic", { state: { selectedEmotion } })
            }
          >
            다음 단계
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBandPage;
