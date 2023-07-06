import { useState } from 'react';
import axios from 'axios';

export const useResource = () => {
  const [resource, setResource] = useState();

  const getAll = async () => {
    const response = await axios.get('../../db.json');
    setResource(response.data.data);
  };

  const services = {
    getAll,
  };

  return [resource, services];
};
