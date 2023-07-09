<<<<<<< HEAD
// const video = document.querySelector("video");

// function startPreview() {
//   video.muted = true;
//   video.currentTime = 2;
//   video.playbackRate = 2;
//   video.play();
// }

// function stopPreview() {
//   video.currentTime = 57;
//   video.playbackRate = 5;
//   video.pause();
// }

// let previewTimeout = null;

// video.addEventListener("mouseenter", () => {
//   startPreview();
//   previewTimeout = setTimeout(stopPreview, 4000);
// });

// video.addEventListener("mouseleave", () => {
//   clearTimeout(previewTimeout);
//   previewTimeout = null;
//   stopPreview();
// });
=======
const video = document.querySelector("video");

function startPreview() {
  video.muted = true;
  video.currentTime = 2;
  video.playbackRate = 2;
  video.play();
}

function stopPreview() {
  video.currentTime = 57;
  video.playbackRate = 5;
  video.pause();
}

let previewTimeout = null;

video.addEventListener("mouseenter", () => {
  startPreview();
  previewTimeout = setTimeout(stopPreview, 4000);
});

video.addEventListener("mouseleave", () => {
  clearTimeout(previewTimeout);
  previewTimeout = null;
  stopPreview();
});
>>>>>>> 02681c6b50869922337b9a13ae1c19e2ca491e75
