import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import axios from "axios";

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


const form = document.querySelector('.js-search-form');
const input = document.querySelector('.js-search-input');
const gallery = document.querySelector('.js-gallery');
const loader = document.querySelector('.js-loader');

const onFormSubmit = event => {
    event.preventDefault();

    const searchQuery = input.value.trim();
    
    if (searchQuery === '') {
        iziToast.error(iziError);
        gallery.innerHTML = '';
        
        event.target.reset();
        return;
    }

    gallery.innerHTML = '';
    loader.classList.add('is-visible');


    fetchPhotos(searchQuery)
        .finally(() => {
            loader.classList.remove('is-visible');
        })
        .then((photos) => {
            if (photos.hits.length === 0) {
                iziToast.error(iziError);
            gallery.innerHTML = '';
        
            event.target.reset();
            return;
            }
        gallery.innerHTML = renderPhotos(photos.hits);
            
    let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    });
    lightbox.refresh();
    
     })
        .catch((error) => {
            console.log(error)
        })

         event.target.reset();
}


form.addEventListener('submit', onFormSubmit);