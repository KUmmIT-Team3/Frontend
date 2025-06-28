import { useNavigate } from "react-router-dom";

type UpperNavBarProps = {
  isCanBack: boolean;
  text: string;
  isLogo: boolean;
  bandDetail?: {
    emotion: string;
    description: string;
    song: {
      title: string;
      artist: string;
      albumImageLink: string;
      previewLink: string;
    };
  };
};

const UpperNavBar = ({
  isCanBack,
  text,
  isLogo,
  bandDetail,
}: UpperNavBarProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div
      className="flex flex-row justify-between items-center
        w-[412px] h-16 bg-[#ffffff] box-border"
    >
      {text === "마이페이지" ? <span></span> : ""}
      {isCanBack ? (
        <div className="ml-[13px]" onClick={handleClick}>
          <img src="/icons/button_back.svg" />
        </div>
      ) : (
        ""
      )}
      {isLogo ? (
        <div className="flex justify-center items-center ml-[11px] text-[24px] font-light">
          <img className="mr-[10px]" src="/icons/small_logo.svg" />
          Emotion Band
        </div>
      ) : (
        ""
      )}
      <span className="text-[24px]">{text}</span>
      {text === "감정 밴드 만들기" || text === "감정" || bandDetail ? (
        <div className="w-[43px]"></div>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default UpperNavBar;
