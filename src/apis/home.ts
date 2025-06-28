import axios from "axios"

// const HOME_API_URL = "/api/emotion-bands"


// export const getTopEmotionBands = () => axios.get(HOME_API_URL)
export const getTopEmotionBands = () => axios.get("http://144.24.81.195:8080/api/emotion-bands")
    .then(Response => {
        console.log(Response.data)
        return Response.data;
    })
    .catch(error => console.error(error));

export const dummyTopEmotionBands = () => {
    const dummyData = {
        "popularBands": [
            {
                "id": 0,
                "creatorName": "김민수",
                "emotion": "그리움",
                "description": "오늘 비가 와서 문득 떠오른 사람이 있어요. 같은 마음인 분들과 함께 듣고 싶어요",
                "endTime": "2025-06-28T10:38:04.413Z",
                "likeCount": 0,
                "peopleCount": 0,
                "songCount": 0,
                "commentCount": 0,
                "liked": true
            },
            {
                "id": 1,
                "creatorName": "string1",
                "emotion": "string1",
                "description": "string1",
                "endTime": "2025-06-28T12:38:04.413Z",
                "likeCount": 1,
                "peopleCount": 1,
                "songCount": 1,
                "commentCount": 1,
                "liked": false
            }
        ],
        "allBands": [
            {
                "id": 0,
                "creatorName": "string",
                "emotion": "string",
                "description": "오늘 비가 와서 문득 떠오른 사람이 있어요. 같은 마음인 분들과 함께 듣고 싶어요",
                "endTime": "2025-06-28T10:38:04.413Z",
                "likeCount": 0,
                "peopleCount": 0,
                "songCount": 0,
                "commentCount": 0,
                "liked": true
            },
            {
                "id": 1,
                "creatorName": "string1",
                "emotion": "string1",
                "description": "string1",
                "endTime": "2025-06-28T12:38:04.413Z",
                "likeCount": 1,
                "peopleCount": 1,
                "songCount": 1,
                "commentCount": 1,
                "liked": true
            },
            {
                "id": 2,
                "creatorName": "string2",
                "emotion": "string2",
                "description": "오늘 비가 와서 문득 떠오른 사람이 있어요. 같은 마음인 분들과 함께 듣고 싶어요",
                "endTime": "2025-06-28T05:38:04.413Z",
                "likeCount": 2,
                "peopleCount": 2,
                "songCount": 2,
                "commentCount": 2,
                "liked": false
            }
        ]
    }
    return dummyData;
}

/*
{
  "popularBands": [
    {
      "id": 0,
      "creatorName": "string",
      "emotion": "string",
      "description": "string",
      "endTime": "2025-06-28T10:38:04.413Z",
      "likeCount": 0,
      "peopleCount": 0,
      "songCount": 0,
      "commentCount": 0,
      "liked": true
    }
  ],
  "allBands": [
    {
      "id": 0,
      "creatorName": "string",
      "emotion": "string",
      "description": "string",
      "endTime": "2025-06-28T10:38:04.413Z",
      "likeCount": 0,
      "peopleCount": 0,
      "songCount": 0,
      "commentCount": 0,
      "liked": true
    }
  ]
}
*/ 