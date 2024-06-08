const customImages = [
    'image5.jpeg',
    'image6.jpeg',
    'image7.jpeg',
    'image8.jpeg',
    'rab5.jpeg'
];
let customCurrentIndex = 0;

function showNextCustomImage() {
    customCurrentIndex = (customCurrentIndex + 1) % customImages.length;
    document.getElementById('custom-slideshow-image').src = customImages[customCurrentIndex];
}

setInterval(showNextCustomImage, 2000); // Change image every 2 seconds
