function openSurprisePage() {
    window.location.href = '1234.html';
}

const images = ['rab1.jpeg', 'rab2.jpeg', 'rab3.jpeg','rab4.jpeg']; // Add your image file names here
let currentIndex = 0;

function changeImage() {
    const imgElement = document.getElementById('slideshow');
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
}

setInterval(changeImage, 3000); // Change image every 3 seconds
