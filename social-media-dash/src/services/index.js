import axios from 'axios';
const baseUrl = '../../public/db.json';

export const getData = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
