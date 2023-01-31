import Notiflix from 'notiflix';
import { fetchCards, moreFetchCards, totalPages, page } from './js/fetchCards';
import { createMarkup } from './js/createMarkup';
import { lightbox } from './js/SimpleLightBox';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
let quary = '';

form.addEventListener('submit', async e => {
  e.preventDefault();
  quary = e.target.searchQuery.value;
  const fetched = await fetchCards(quary);
  const totalHits = fetched.totalHits;

  if (fetched.totalHits === 0) {
    return Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }

  Notiflix.Notify.info(`Hooray! We found ${totalHits} images.`);

  const firsMarkup = await createMarkup(fetched);
  gallery.innerHTML = firsMarkup;
  lightbox.refresh();
  loadMoreBtn.toggleAttribute('hidden');

  if (page > totalPages) {
    moreBtn.toggleAttribute('hidden');
    Notiflix.Notify.failure(
      "We're sorry, but you've reached the end of search results."
    );
  }
});

loadMoreBtn.addEventListener('click', async e => {
  let moreFetched = await moreFetchCards(quary);
  let nextMarkup = await createMarkup(moreFetched);
  gallery.insertAdjacentHTML('beforeend', nextMarkup);
  lightbox.refresh();

  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });

  if (page > totalPages) {
    loadMoreBtn.toggleAttribute('hidden');
    Notiflix.Notify.failure(
      "We're sorry, but you've reached the end of search results."
    );
  }
});
