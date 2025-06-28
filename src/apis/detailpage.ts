import axios from "axios";
const API_BASE_URL = 'http://144.24.81.195:8080/api';

export interface Comment {
  id: number;
  creatorName: string;
  comment: string;
}


export const getComments = (bandId: number): Promise<Comment[]> => {
  return axios
    .get(`${API_BASE_URL}/emotion-bands/${bandId}/comments`)
    .then((response) => response.data);
};


/** 감정 밴드 상세 정보 조회 */
export const getBandDetail = (bandId: number, memberId: number) => {
  return axios.get(`${API_BASE_URL}/emotion-bands/${bandId}/detail`, {
    params: { memberId }
  }).then(response => response.data);
};

/** 댓글 작성 */
export const postComment = (bandId: number, memberId: number, comment: string) => {
  const payload = { comment };
  return axios.post(`${API_BASE_URL}/emotion-bands/${bandId}/comments`, payload, {
    params: { memberId }
  }).then(response => response.data);
};

/** 좋아요 토글 */
export const toggleLike = (bandId: number, memberId: number) => {
  return axios.post(`${API_BASE_URL}/emotion-bands/${bandId}/like`, {}, {
    params: { memberId }
  }).then(response => response.data);
};

/** 보관 토글 */
export const toggleArchive = (bandId: number, memberId: number) => {
  return axios.post(`${API_BASE_URL}/emotion-bands/${bandId}/archive`, {}, {
    params: { memberId }
  }).then(response => response.data);
};