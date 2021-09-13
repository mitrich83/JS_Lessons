import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '?apikey=fa7ddefe';
const axiosInstance = axios.create(configOMB)
;

const API = {
    searchFilmsByTitle: (title: string) => {
const query = `${key}&s=${title}`
        console.log(title)
        return axiosInstance.get(query)
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
