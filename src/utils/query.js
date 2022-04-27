import axios from 'axios';

const API_URL = 'http://localhost:3001';

//Get all the users
export const getUsers = async () => {
  const res = await axios.get(API_URL + '/users.json');
  return res.data;
};

// Get all the services
export const getServices = async () => {
  const res = await axios.get(API_URL + '/services.json');
  return res.data;
};

// Get the users of a Service
export const getUsersOfService = async (service_id) => {
  const param = new URLSearchParams({
    service_id,
  }).toString();
  const { data } = await axios.get(API_URL + '/users.json?' + param);
  return data;
};
