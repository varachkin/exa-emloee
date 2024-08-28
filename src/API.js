import axios from "axios";

// const SERVER_ADDRESS = "http://0.0.0.0";
const SERVER_ADDRESS = "https://auth.vendorobotics.com";
const SERVER_IP = "http://192.168.18.141";
const SERVER_PORT = 5003;


export const getRequest = (query) => {
  return axios
    .get(`${SERVER_ADDRESS}:${SERVER_PORT}/v1/${query}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

export const login = (credentials) => {
  return axios
    .post(`${SERVER_ADDRESS}/v1/user/login`, {
      username: credentials.email,
      password: credentials.password,
    }, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}


export const getEmployee = () => {
  return axios
    .get(`${SERVER_IP}:${SERVER_PORT}/docs/users/list`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}