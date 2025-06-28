import { useState, useRef } from "react";
import { getTopEmotionBands } from "../apis/createpage";

const MusicSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [musics, setMusics] = useState<Music[]>([]);
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null);
  const audioRefs = useRef<Record<number, HTMLAudioElement | null>>({});

  const togglePlay = (index: number, previewUrl: string) => {
    const audio = audioRefs.current[index];
    if (!audio) return;

    if (currentPlaying !== previewUrl) {
      Object.values(audioRefs.current).forEach((a) => a?.pause());
      audio.play();
      setCurrentPlaying(previewUrl);
    } else {
      audio.pause();
      setCurrentPlaying(null);
    }
  };

  type Music = {
    artworkUrl100: string;
    previewUrl: string;
    trackName: string;
    artistName: string;
  };

  const handleSearch = async () => {
    const data = await getTopEmotionBands({ query: searchTerm });
    setMusics(data.musics);
  };

  return (
    <div className="w-[360px] h-[500px] flex flex-col bg-white px-[12px] py-[20px] gap-[15px] rounded-2xl shadow-md overflow-y-scroll">
      <div className="flex items-center gap-[10px]">
        <input
          className="w-[281px] h-[40px] border border-[#D9D9D9] rounded-lg px-3 py-1 text-[14px] focus:outline-none focus:border-[#979797]"
          placeholder="곡명, 아티스트명 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div
          className="w-10 h-10 bg-[#C77EB5] rounded-lg inline-flex justify-center items-center cursor-pointer"
          onClick={handleSearch}
        >
          <img src="./icons/search.svg" />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        {musics.map((music, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2  rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div key={index}>
                <img
                  className="w-10 h-10 object-cover cursor-pointer"
                  src={music.artworkUrl100}
                  onClick={() => togglePlay(index, music.previewUrl)}
                />
                <audio
                  ref={(el: HTMLAudioElement | null) => {
                    audioRefs.current[index] = el;
                  }}
                  src={music.previewUrl}
                />
              </div>
              <div className="flex flex-col gap-[7px]">
                <div className="text-black text-xs font-semibold leading-none tracking-wide">
                  {music.trackName}
                </div>
                <div className="text-neutral-400 text-[10px] font-normal leading-none tracking-wide">
                  {music.artistName}
                </div>
              </div>
            </div>
            <button className="w-10 h-[30px]  bg-[#C77EB5] text-[14px] text-white rounded-lg cursor-pointer">
              추가
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicSearchBar;
