import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getTopEmotionBands } from "../../apis/login";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleClick = async () => {
    try {
      const res = await getTopEmotionBands({ query: name });
      localStorage.setItem("memberId", JSON.stringify(res));
      navigate("/home");
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        alert("회원정보가 없습니다");
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[412px] h-[917px] flex flex-col items-center pt-[140px] bg-[#FFFFFF]">
        <img className="pb-[56px]" src="./icons/big_logo.svg" />
        <span className="text-[22px]">지금 느끼는 감정을 음악으로</span>
        <span className="text-[22px] mb-[17px]"> 나누세요</span>
        <span className="text-[10px] tracking-wide text-[#666666]">
          비슷한 마음을 가진 사람들과
        </span>
        <span className="text-[10px] mb-[70px] tracking-wide text-[#666666]">
          24시간 동안 특별한 플레이리스트를 만들어 보세요
        </span>
        <span className="mb-[35px] text-[22px]">이름</span>
        <input
          className="mb-[70px] h-[50px] w-[362px] px-4 py-2 bg-white rounded-lg shadow-[2px_4px_15px_0px_rgba(0,0,0,0.10)] "
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button
          className={name ? "cursor-pointer" : ""}
          disabled={!name}
          onClick={handleClick}
        >
          <img
            src={name ? "./icons/login.svg" : "./icons/disabled_login.svg"}
          />
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
