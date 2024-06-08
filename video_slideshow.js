const videos = [
    
    'video.mp4'

];
let currentVideoIndex = 0;
const videoElement = document.getElementById('video-slideshow');

function showNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videoElement.src = videos[currentVideoIndex];
    videoElement.play();
}

videoElement.addEventListener('ended', () => {
    setTimeout(showNextVideo, 2000); // Wait 2 seconds before showing the next video
});

videoElement.src = videos[currentVideoIndex];
videoElement.play();
