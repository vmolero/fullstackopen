import axios from "axios";
const backend = "http://localhost:3001";
const baseUrl = backend + "/api/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = newObject => {
  return axios.post(baseUrl, newObject);
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

const del = id => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default {
  getAll: getAll,
  create: create,
  update: update,
  delete: del
};
