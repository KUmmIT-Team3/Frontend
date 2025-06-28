import axios from "axios";

type SearchMusic = {
  query: string;
};

export const getTopEmotionBands = async (searchMusic: SearchMusic) => {
  const res = await axios.get(
    `http://144.24.81.195:8080/api/music/search?query=${searchMusic.query}`
  );

  return res.data;
};

type Song = {
  title: string;
  artist: string;
  albumImageLink: string;
  previewLink: string;
};

type CreateBandRequest = {
  emotion: string;
  description: string;
  song: Song;
};

// type memberIdType = string | number;

export const createBand = async (
  band: CreateBandRequest,
  // memberId: memberIdType
) => {
  const res = await axios.post(
    `http://144.24.81.195:8080/api/emotion-bands?memberId=1`,
    band
  );
  return res.data;
};
