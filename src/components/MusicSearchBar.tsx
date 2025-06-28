import { useState } from "react";
import { getTopEmotionBands } from "../apis/createpage";

const MusicSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [musics, setMusics] = useState<Music[]>([]);
  const [previewUrl, setPreviewUrl] = useState("");
  type Music = {
    previewUrl: string;
    trackName: string;
    artistName: string;
  };

  const handleSearch = async () => {
    const data = await getTopEmotionBands({ query: searchTerm });
    setMusics(data.musics);
  };

  return (
    <div>
      <div className="w-[360px] flex justify-center items-center bg-white px-[12px] py-[20px] gap-[15px] rounded-2xl shadow-md">
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

      <div className="mt-4">
        {musics.map((music, index) => (
          <div
            key={index}
            className="p-2 border-b cursor-pointer"
            onClick={() => setPreviewUrl(music.previewUrl)}
          >
            {music.trackName} - {music.artistName}
          </div>
        ))}
      </div>

      {previewUrl && (
        <audio controls src={previewUrl} autoPlay className="mt-4" />
      )}
    </div>
  );
};

export default MusicSearchBar;
