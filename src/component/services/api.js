import axios from "axios";

const API = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;