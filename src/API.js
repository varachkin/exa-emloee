import axios from "axios";

// const SERVER_ADDRESS = "http://0.0.0.0";
const SERVER_ADDRESS = "https://auth.vendorobotics.com";
const SERVER_PORT = 6003;


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