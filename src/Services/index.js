import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: 'http://localhost/other_projects/demo_project/GserversCon/'
});