import axios from 'axios';
const baseUrl = '/stats';

const getAll = () => {
  const res = axios
    .get(baseUrl)
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return res;
};

export default getAll;
