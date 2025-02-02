import axios from "axios";

const Axios = axios.create({
    baseURL: "http://192.168.43.21:8000/api",
  // baseURL: "https://vendor.slayerbeatz.com/api",
});

export default Axios