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
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    );
  }, "");
}

const galleryMarkup = createGallery(galleryItems);
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
galleryList.addEventListener("click", onGalleryItemClick);
function onGalleryItemClick(event) {
 
  event.preventDefault();
  
  const imgSrc = event.target.dataset.source;
  
  if (imgSrc) {
    instance.element().querySelector("img").src = imgSrc;
    instance.show();
  }
}
const instance = basicLightbox.create(`<img>`, {
  onShow: () => {
    window.addEventListener("keydown", сlosingWindowByEscape);
  },
  onClose: () => {
    window.removeEventListener("keydown", сlosingWindowByEscape);
  },
});

function сlosingWindowByEscape(event) {
  if (event.code === "Escape") {
    instance.close();
  }
  return;
}
console.log(galleryItems);
// Change code below this line

console.log(galleryItems);
