import axios from 'axios';

const API_URL = 'http://localhost:3001';

//Get all the users
export const getUsers = async () => {
  const { data } = await axios.get(API_URL + '/users.json');
  return data;
};

// Get all the services
export const getServices = async () => {
  const { data } = await axios.get(API_URL + '/services.json');
  return data;
};

// Get the users of a Service
export const getUsersOfService = async (service_id) => {
  const param = new URLSearchParams({
    service_id,
  }).toString();
  const { data } = await axios.get(API_URL + '/users.json?' + param);
  return data;
};

// Get the services and filter by ids
export const getServicesByIds = async (service_ids) => {
  const { data } = await axios.get(API_URL + '/services.json');
  const services = data.filter((service) => service_ids.includes(service.id));
  console.log(services);
  return services;
};
