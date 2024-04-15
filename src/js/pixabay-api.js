const MAIN_URL = 'https://pixabay.com'
const API_KEY = '43342767-c7e13188a4d46cb3021e40da1'


export const fetchPhotos = q => {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });
    return fetch(`${MAIN_URL}/api/?${searchParams}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            
            return response.json();
           
        })
};