import axios from "axios";

type SearchMusic = {
  query: string;
};

export const getTopEmotionBands = async (searchMusic: SearchMusic) => {
  const res = await axios.post(
    "http://144.24.81.195:8080/api/music/search",
    searchMusic
  );
  return res.data;
};
