import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com';

const API_KEY = '43342767-c7e13188a4d46cb3021e40da1';

export const fetchPhotos = (q, photosPage) => {

    const axiosParams = {
        params: {
            key: API_KEY,
            q,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
            page: photosPage,
            per_page: 15,
        }
        }

    return axios.get('/api/', axiosParams);
}
