import { API_URL } from "../constants/portal";
export const getAjax = () => {
  return fetch(API_URL)
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
};
