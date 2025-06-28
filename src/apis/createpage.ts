import axios from "axios";

type SearchMusic = {
  query: string;
};

export const getTopEmotionBands = async (searchMusic: SearchMusic) => {
  const res = await axios.get(
    `http://144.24.81.195:8080/api/music/search?query=${encodeURIComponent(
      searchMusic.query
    )}`
  );

  return res.data;
};
