import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import iconError from './img/bi_x-octagon.svg';


import { fetchPhotos } from './js/pixabay-api';
import { renderPhotos } from './js/render-functions';


const iziError = {
  titleColor: 'rgba(255, 255, 255, 1)',
  titleSize: '16px',
  message: 'Sorry, there are no images matching your search query. Please try again!',
  messageColor: 'rgba(255, 255, 255, 1)',
  background: '#EF4040',
  iconUrl: iconError,
  position: 'topRight',
    progressBarColor: 'rgba(181, 27, 27, 1)',
    maxWidth: '432px',

}
 let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
 });


const form = document.querySelector('.js-search-form');
const input = document.querySelector('.js-search-input');
const gallery = document.querySelector('.js-gallery');
const loader = document.querySelector('.js-loader');

const onFormSubmit = async (event) => {
    event.preventDefault();

    const searchQuery = input.value.trim();
    
    if (searchQuery === '') {
        iziToast.error(iziError);
        gallery.innerHTML = '';
        
        event.target.reset();
        return;
    }

    gallery.innerHTML = '';
    

    try {

        loader.classList.add('is-visible');

        const { data } = await fetchPhotos(searchQuery);

        loader.classList.remove('is-visible');

        if (data.hits.length === 0) {
            iziToast.error(iziError);
            gallery.innerHTML = '';
        
            event.target.reset();
            return;
      }
        gallery.innerHTML = renderPhotos(data.hits);
        

    } catch (error) {
        console.log(error);
    }

    event.target.reset();
}


form.addEventListener('submit', onFormSubmit);


    