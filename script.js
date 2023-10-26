let slideIndex = 0;

function showSlide(index) {
    const slides = document.getElementsByClassName("slide");
    if (index >= slides.length) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

showSlide(slideIndex);

function afficherAlerte() {
    alert("Un grand merci pour vos codes de carte bleue !");
}


//Doublement du programme pour permettre de faire fonctionner un 2e caroussel en bas de page
//en modifiant avec le suffixe Bottom (caroussel du bas (Bottom))
let slideIndexBottom = 0;

function showSlideBottom(indexBottom) {
    const slidesBottom = document.getElementsByClassName("slide");
    if (indexBottom >= slidesBottom.length) {
        slideIndexBottom = 0;
    }
    if (indexBottom < 0) {
        slideIndexBottom = slidesBottom.length - 1;
    }

    for (let i = 0; i < slidesBottom.length; i++) {
        slidesBottom[i].style.display = "none";
    }

    slidesBottom[slideIndexBottom].style.display = "block";
}

function nextSlideBottom() {
    slideIndexBottom++;
    showSlideBottom(slideIndexBottom);
}

function prevSlideBottom() {
    slideIndexBottom--;
    showSlideBottom(slideIndexBottom);
}

showSlideBottom(slideIndexBottom);

function afficherAlerteBottom() {
    alert("Un grand merci pour vos codes de carte bleue !");
}