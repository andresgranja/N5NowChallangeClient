import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const requestPermission = async (permissionData) => {
  const response = await axios.post(`${BASE_URL}/permissions/request`, permissionData);
  return response.data;
};


