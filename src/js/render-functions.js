import SimpleLightbox from "simplelightbox";


let lightbox = null;

export function renderGallery(images) {
  const galleryContainer = document.querySelector('.gallery');
  galleryContainer.innerHTML = '';

  const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <li class="photo-card">
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" width="360" height="152"/>
      </a>
      <div class="info">
        <p class="likes"><b>Likes:</b> ${likes}</p>
        <p class="vievs"><b>Views:</b> ${views}</p>
        <p class="comments"><b>Comments:</b> ${comments}</p>
        <p class="dowloads"><b>Downloads:</b> ${downloads}</p>
      </div>
      </li>
  `).join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  } else {
    lightbox.refresh();
  }
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('hidden');
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.add('hidden');
}