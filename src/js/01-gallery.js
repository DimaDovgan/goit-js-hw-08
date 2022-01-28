// Add imports above this line
import picturesHandel from '../templates/picture.hbs';
import picturesHandelssss from '../templates/pictures.hbs';

import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galleryList = document.querySelector(".gallery");

const renderingGallery = (itemsArr) => {
    //Шаблоний рядок 

//     return itemsArr.map(({ original, preview, description }) => {
//         return `<a class="gallery__item" href=${original}>
//   <img class="gallery__image" src=${preview} alt=${description} />
// </a>`
//     }).join();
    console.log(picturesHandelssss(galleryItems));
    /// Шаблонізатор ...
    //return itemsArr.map((items) => picturesHandel(items)).join();
    //шаблонізатор зразу всю колекцію 
    return picturesHandelssss(galleryItems);
}
galleryList.insertAdjacentHTML("beforeend", renderingGallery(galleryItems));

let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionPosition: "button",captionDelay:"250"});
console.log(galleryItems);
