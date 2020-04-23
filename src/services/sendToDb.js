import axios from "axios";

let URL = "http://localhost:3001";
let CONFIG = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  proxy: {
    host: "http://localhost",
    port: 3001,
  },
};
export const register = (url, data) => {
  const body = JSON.stringify(data);
  return axios.post(`${URL}${url}`, body, CONFIG);
};
export const login = (data) => {
  const body = JSON.stringify({
    password: this.state.password,
    username: this.state.email,
  });
  return axios.post(URL, body, CONFIG);
};
