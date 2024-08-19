import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from "izitoast";


const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = event.target.searchQuery.value;

  if (!query) {
    iziToast.error({
      class: 'custom-error',
      message: 'Search field cannot be empty!',
      position: 'topRight',
    });
    return;
  }

  gallery.innerHTML = '';
  showLoader();

  

  fetchImages(query)
    .then(images => {
      hideLoader();

      if (images.length === 0) {
        iziToast.warning({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          class: 'custom-error',
          position: 'topRight',
        });
      } else {
        renderGallery(images);
      }
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
      });
      console.error('Fetching error:', error);
    });
});