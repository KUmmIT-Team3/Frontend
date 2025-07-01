import axios from "axios";

export const dummyForLoading = {
  id: -1,
  creatorName: "누군가",
  emotion: "감정",
  description: "코멘트를 작성중입니다",
  endTime: "2099-07-07T12:55:35.93718",
  likeCount: 0,
  peopleCount: 0,
  songCount: 0,
  commentCount: 0,
  songs: [],
  liked: false
}

export const getTopEmotionBands = () =>
  axios
    .get("http://144.24.81.195:8080/api/emotion-bands")
    .then((Response) => {
      console.log(Response.data);
      return Response.data;
    })
    .catch((error) => console.error(error));
