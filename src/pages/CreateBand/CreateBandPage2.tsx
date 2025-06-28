import UpperNavBar from "../../components/UpperNavBar";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MusicSearchBar from "../../components/MusicSearchBar";
import { createBand } from "../../apis/createpage";
import axios from "axios";

type Music = {
  artworkUrl100: string;
  previewUrl: string;
  trackName: string;
  artistName: string;
};

const CreateBandPage2 = () => {
  const [music, setMusic] = useState<Music | null>(null);
  const location = useLocation();
  const { selectedEmotion, description } = location.state || {};
  const navigate = useNavigate();
  const memberId = localStorage.getItem("memberId");

  const handleClick = async () => {
    if (!music || !selectedEmotion) return;

    const bandData = {
      emotion: selectedEmotion,
      description: description || "",
      song: {
        title: music.trackName,
        artist: music.artistName,
        albumImageLink: music.artworkUrl100,
        previewLink: music.previewUrl,
      },
    };

    try {
      console.log(bandData);
      if (!memberId) {
        alert("로그인이 필요합니다.");
        return;
      }

      await createBand(bandData, memberId);
      navigate("/home");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        alert("밴드 생성에 실패했습니다. 다시 시도해주세요.");
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[412px] h-[917px] bg-[#F3EEEF]">
        <UpperNavBar isCanBack={true} text="감정 밴드 만들기" isLogo={false} />
        <div className="flex justify-center mt-1 mx-[2px] gap-[5px] ">
          <p className="w-[400px] h-1 bg-[#C77EB5] rounded-lg"></p>
        </div>
        <div className="flex flex-col items-center relative">
          <p className="my-[43px] text-lg text-[16px]">
            "{selectedEmotion}"을 표현할 음악을 찾아보세요
          </p>
          <MusicSearchBar selectedMusic={music} setSelectedMusic={setMusic} />
          <div className="fixed bottom-[40px] left-1/2 transform -translate-x-1/2 flex justify-center gap-4">
            <button
              className="w-[172px] h-[40px] py-3 bg-white text-303030; rounded-[8px] flex items-center justify-center"
              onClick={() => navigate(-1)}
            >
              <img className="w-5 h-5 mr-3" src="./icons/button_back.svg" />{" "}
              이전
            </button>
            <button
              className={`w-[172px] h-[40px] py-3 text-white rounded-[8px] flex items-center justify-center ${
                music ? "cursor-pointer bg-[#C77EB5]" : "bg-[#dfb5d5]"
              }`}
              disabled={!music}
              onClick={() => {
                handleClick();
              }}
            >
              <img className="w-4 h-4 mr-2" src="./icons/Music-on.svg" />
              밴드 만들기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBandPage2;
