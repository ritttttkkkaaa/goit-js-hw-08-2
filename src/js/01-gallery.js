import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';


const galleryList = document.querySelector(".gallery");


function createGallery(items) {
  return items.reduce((acc, { preview, original, description }) => {
    return (
      acc +
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`
    );
  }, "");
}
const galleryMarkup = createGallery(galleryItems);


galleryList.insertAdjacentHTML("beforeend", galleryMarkup);


const lightboxGallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
	

// Change code below this line

console.log(galleryItems);
