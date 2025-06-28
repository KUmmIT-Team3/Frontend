import axios from "axios";

type Name = {
  query: string;
};

export const getTopEmotionBands = async (name: Name) => {
  const res = await axios.post("http://144.24.81.195:8080/api/member/login", {
    name: name.query,
  });

  return res.data;
};
