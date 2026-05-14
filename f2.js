// <![CDATA[
var video;
var source;
var objectPlayer;

// Map IDs to actual video files
var videoList = {
  "video1": "video1.mp4",
  "video2": "video2.mp4",
  "video3": "video3.mp4"
};

function init() {
  video = document.getElementById("videoElement");
  source = document.getElementById("videoSource");
  objectPlayer = document.getElementById("videoObject");
}

function loadVideo(id) {
  var file = videoList[id];

  if (!file) {
    alert("Video not found!");
    return;
  }

  // Update <video> source
  source.setAttribute("src", file);
  video.load();

  // Update <object> data
  objectPlayer.setAttribute("data", file);

  video.play();
}

function playVideo() {
  video.play();
}

function pauseVideo() {
  video.pause();
}

function stopVideo() {
  video.pause();
  video.currentTime = 0;
}
// ]]>