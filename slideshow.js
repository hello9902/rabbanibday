const images = [
    'image1.JPG',
    'image2.JPG',
    'image3.jpeg',
    'image4.jpeg',
    'image9.jpeg'
];
let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('slideshow-image').src = images[currentIndex];
}

setInterval(showNextImage, 2000); // Change image every 2 seconds
