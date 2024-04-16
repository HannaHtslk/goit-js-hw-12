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

const iziInfo = {
    message: "We're sorry, but you've reached the end of search results.",
    position: 'topRight',
}



const form = document.querySelector('.js-search-form');
const gallery = document.querySelector('.js-gallery');
const loader = document.querySelector('.js-loader');
const input = document.querySelector('.js-search-input');
const loadMoreBtn = document.querySelector('.js-load-more');
let searchQuery = null;
let currentPage = 1;

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
        }); 


const resetLoadMore = () => {
    loadMoreBtn.classList.add('is-hidden');
    loadMoreBtn.removeEventListener('click', onLoadMoreClick);
}

const onFormSubmit = async (event) => {
    try {
        event.preventDefault();

        searchQuery = input.value.trim();
        currentPage = 1;

            if (searchQuery === '') {
                iziToast.error(iziError);
                gallery.innerHTML = '';
                resetLoadMore();
                event.target.reset();
                return;
            }
           

        gallery.innerHTML = '';

        loader.classList.add('is-visible');

        const { data } = await fetchPhotos(searchQuery, currentPage);
      
           
        loader.classList.remove('is-visible');

        if (data.hits.length === 0) {
            gallery.innerHTML = '';
            
            event.target.reset();
            
            iziToast.error(iziError);
            resetLoadMore();

            return;
            }
            
        const totalPages = Math.ceil(data.totalHits / data.per_page);
        
            if (totalPages === 1) {
                resetLoadMore();
                gallery.innerHTML = renderPhotos(data.hits);
                event.target.reset();
                return;
            }
        
        gallery.innerHTML = renderPhotos(data.hits);


        
        
        loadMoreBtn.classList.remove('is-hidden');
        loadMoreBtn.addEventListener('click', onLoadMoreClick);

        
        lightbox.refresh();
    } catch (error) {
        loader.classList.remove('is-visible');
        console.log(error);
    }

    event.target.reset();
}

const onLoadMoreClick = async (event) => {
    try {
        currentPage++;

        loader.classList.add('is-visible');
   
        const { data } = await fetchPhotos(searchQuery, currentPage);

        
        loader.classList.remove('is-visible');
        gallery.insertAdjacentHTML('beforeend', renderPhotos(data.hits))


        const galleryItem = document.querySelector('.js-gallery-item');
        let rect = galleryItem.getBoundingClientRect();
        // console.log(rect)
        window.scrollBy({
            top: rect.height * 2,
            behavior: 'smooth',
        });
        // console.log(rect.height);
   
        const totalPages = Math.ceil(data.totalHits / data.per_page);
            if (currentPage === totalPages) {
                resetLoadMore();
                iziToast.info(iziInfo);
            }
        

    } catch (error) {
        console.log(error);
    }
    
}


form.addEventListener('submit', onFormSubmit);


    