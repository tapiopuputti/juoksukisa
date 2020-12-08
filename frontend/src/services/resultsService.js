import axios from 'axios';
const baseUrl = '/api/results';

const getAll = () => {
  const res = axios
    .get(baseUrl)
    .then((response) => response.data)
    .catch((error) => error.response.data);
  return res;
};

export default getAll;
