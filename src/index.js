document.addEventListener('DOMContentLoaded', () => {

    var gallery = document.querySelector('.gallery');

    gallery.addEventListener('click', openImage, false);

    function openImage(event) {

        if (event.target.src) {
            var imgSrc = event.target.src;
            var imgTitle = event.target.alt;
    
            var overlayString = 'overlay';
            var overlay = document.querySelector(`.${overlayString}`);
            var overlayImg = document.querySelector(`.${overlayString}__img`);
            var overlayTitle = document.querySelector(`.${overlayString}__title`);
    
            overlayImg.src = imgSrc;
            overlayTitle.innerHTML = imgTitle;
            
            overlay.classList.add('openOverlay');
    
            var closeBtn = document.querySelector('.close');
    
            closeBtn.addEventListener('click', () => {
                overlay.classList.remove('openOverlay');
            });
        }
    }
    
});