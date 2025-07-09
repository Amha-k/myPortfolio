import axios from "axios";

const instance = axios.create({
  baseURL: "https:5000//api/portfolio", // change this to your backend
});

export default instance;
