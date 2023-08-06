const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightBoxImage = document.querySelector('.lightbox-image');
const lightBoxClose = document.querySelector('.lightbox-close');

galleryItems.forEach((item)=>{
    console.log(item);
    item.addEventListener('click', ()=>{
        const imageURL=item.querySelector(".gallery-image").getAttribute("data-src");
        console.log(imageURL);
        lightBoxImage.setAttribute("src", imageURL);
        lightbox.style.display= "flex";
    });
});

lightBoxClose.addEventListener('click',()=>{
    lightbox.style.display='none';
})