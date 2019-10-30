// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/Pn1g1wjxl_0
// Modifier by Ngan

var song;
var sliderRate;
var sliderVolume;

function setup() {
  createCanvas(200, 200);
  song = loadSound("all_star.mp3", loaded);
  song.setVolume(0.5);
  sliderRate = createSlider(0, 1.5, 1, 0.01);
  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  playbutton = createButton("play");
  playbutton.id('playmusic');
  playbutton.mousePressed(togglePlaying);
}

function loaded() {
  console.log('loaded');
}

function draw() {
  background(0);
  song.rate(sliderRate.value());
  song.setVolume(sliderVolume.value());
}
function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    playbutton.html("pause");
  } else {
    song.stop();
    playbutton.html("play");
  }
}
