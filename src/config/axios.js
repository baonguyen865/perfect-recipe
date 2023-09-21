import axios from "axios";

// let baseURL = "http://localhost:8080/api";
let baseURL = "http://localhost:8080/api";

export const Axios = axios.create({
    baseURL,
    timeout: 36000000, // 60 seconds
});
// http://localhost:8080/api
// https://backend-ploy.herokuapp.com/api