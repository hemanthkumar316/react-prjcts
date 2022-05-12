import axios from "axios";

//97219b4a7da1444fde04f985aec65b6a
const  instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;