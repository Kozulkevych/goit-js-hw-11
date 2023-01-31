import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export const lightbox = new SimpleLightbox('.gallery  a', {
captionsData: 'alt',
captionPosition: 'bottom',
captionDelay: 300,
animationSpeed: 150,
fadeSpeed: 150,
nav: true
});