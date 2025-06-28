import axios from "axios";

export interface Comment {
  id: number;
  creatorName: string;
  comment: string;
}

const API_BASE_URL = "http://144.24.81.195:8080/api";

export const getBandDetail = (bandId: number, memberId: number) => {
  return axios
    .get(`${API_BASE_URL}/emotion-bands/${bandId}/detail`, {
      params: { memberId },
    })
    .then((response) => response.data);
};

export const getComments = (bandId: number): Promise<Comment[]> => {
  return axios
    .get(`${API_BASE_URL}/emotion-bands/${bandId}/comments`)
    .then((response) => response.data);
};

export const postComment = (
  bandId: number,
  memberId: number,
  comment: string
) => {
  const payload = { comment };
  return axios
    .post(`${API_BASE_URL}/emotion-bands/${bandId}/comments`, payload, {
      params: { memberId },
    })
    .then((response) => response.data);
};

export const toggleArchive = (bandId: number, memberId: number) => {
  const payload = {};
  return axios
    .post(`${API_BASE_URL}/emotion-bands/${bandId}/archive`, payload, {
      params: { memberId },
    })
    .then((response) => response.data);
};
