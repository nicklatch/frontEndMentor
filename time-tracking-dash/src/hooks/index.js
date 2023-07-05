import { useState } from 'react';
import axios from 'axios';
const baseUrl = 'http://localhost:3001';

export const useResource = (endPoint) => {
  const [resource, setResource] = useState();

  const getAll = async () => {
    const response = await axios.get(`${baseUrl}/${endPoint}`);
    setResource(response.data);
  };

  console.log(resource);

  const services = {
    getAll,
  };

  return [resource, services];
};
