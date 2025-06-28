import axios from "axios";

export const getTopEmotionBands = () =>
  axios
    .get("http://144.24.81.195:8080/api/emotion-bands")
    .then((Response) => {
      console.log(Response.data);
      return Response.data;
    })
    .catch((error) => console.error(error));

export const toggleLike = (bandId: number, memberId: number) => {
  // API 명세에 따라 요청 Body는 비어있습니다.
  const payload = {};
  return axios
    .post(
      `http://144.24.81.195:8080/api/emotion-bands/${bandId}/like`,
      payload,
      {
        params: { memberId }, // API 명세에 따라 memberId를 쿼리 파라미터로 전송
      }
    )
    .then((response) => response.data);
};
