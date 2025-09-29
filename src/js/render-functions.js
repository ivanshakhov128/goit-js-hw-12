import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" />
          <div class="info">
            <p><span class='label'>Likes:</span><span class='value'>${likes}</span></p>
            <p><span class='label'>Views:</span><span class='value'>${views}</span></p>
            <p><span class='label'>Comments:</span><span class='value'>${comments}</span></p>
            <p><span class='label'>Downloads:</span><span class='value'>${downloads}</span></p>
          </div>
        </a>
      </li>
    `
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('active');
}

export function hideLoader() {
  loader.classList.remove('active');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.add('active');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.remove('active');
}
