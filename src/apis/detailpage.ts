import axios from "axios";

export const getbandsDetail = (bandId: number) => axios.get(`http://144.24.81.195:8080/api/emotion-bands/${bandId}/detail`)
  .then(Response => {
    console.log(Response.data)
    return Response.data;
  })
  .catch(error => console.error(error));

export const dummyBandsDetail = () => {
  const dummyData = {
    "id": 0,
    "creatorName": "김민수",
    "emotion": "해커톤",
    "description": "오늘 비가 와서 문득 떠오른 사람이 있어요. 같은 마음인 분들과 함께 듣고 싶어요",
    "endTime": "2025-06-28T14:48:33.733Z",
    "likeCount": 12,
    "peopleCount": 24,
    "songCount": 36,
    "commentCount": 12,
    "liked": true,
    "songs": [
      {
        "id": 0,
        "title": "string",
        "artist": "string",
        "creatorName": "string",
        "createdAt": "2025-06-28T14:48:33.733Z",
        "albumImageLink": "string",
        "previewLink": "string",
        "emotionBandId": 0,
        "emotion": "string"
      },
      {
        "id": 1,
        "title": "1string",
        "artist": "1string",
        "creatorName": "1string",
        "createdAt": "2025-06-28T14:48:33.733Z",
        "albumImageLink": "string",
        "previewLink": "string",
        "emotionBandId": 0,
        "emotion": "string"
      }
    ],
    "comments": [
      {
        "id": 0,
        "creatorName": "이지은",
        "comment": "string"
      },
      {
        "id": 1,
        "creatorName": "이지금",
        "comment": "string"
      },
    ],
    "archived": true
  }

  return dummyData;
}


/*
{
  "id": 0,
  "creatorName": "string",
  "emotion": "string",
  "description": "string",
  "endTime": "2025-06-28T14:48:33.733Z",
  "likeCount": 0,
  "peopleCount": 0,
  "songCount": 0,
  "commentCount": 0,
  "songs": [
    {
      "id": 0,
      "title": "string",
      "artist": "string",
      "creatorName": "string",
      "createdAt": "2025-06-28T14:48:33.733Z",
      "albumImageLink": "string",
      "previewLink": "string",
      "emotionBandId": 0,
      "emotion": "string"
    }
  ],
  "comments": [
    {
      "id": 0,
      "creatorName": "string",
      "comment": "string"
    }
  ],
  "archived": true
}
*/