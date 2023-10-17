const playButton = document.getElementById("playButton");
const videoGrid = document.querySelector(".video-grid");
const backgroundMusic = document.getElementById("backgroundMusic");

playButton.addEventListener("click", () => {
    // Play background music
    backgroundMusic.play();

    // Play all videos
    const videos = videoGrid.querySelectorAll("video");
    videos.forEach(video => {
        video.play();
    });
});
