let img;
let song;
var sw = false; //Acts as a switch between pause and play. The player starts turned off.
var counter = 1; //Keeps track of which song is playing. By default, the player starts on the first song.
//Track 1: All Star
//Track 2: Sandstorm
//Track 3: Despacito

//Preload all images and music before the application starts
function preload() {
  all_star_img = loadImage('all_star.jpg');
  sandstorm_img = loadImage('sandstorm.jpg');
  despacito_img = loadImage('despacito.png');
  play_img = loadImage('play.png');
  pause_img = loadImage('pause.png');
  forward_img = loadImage('forward.png');
  backward_img = loadImage('backward.png');
  soundFormats('mp3');
  all_star_song = loadSound('all_star.mp3');
  sandstorm_song = loadSound('Sandstorm.mp3');
  despacito_song = loadSound('Despacito.mp3');
}

//The interface the player will default to on startup
function setup() {
  createCanvas(1000, 1000);
  image(all_star_img, 100, 100, 250, 250);
  textSize(20);
  text('Now Playing:', 170, 90);
  textSize(32);
  text('All Star', 145, 380);
  textSize(20);
  text('Smash Mouth', 145, 410);
  image(play_img, 175, 425, 75, 75);
  image(forward_img, 260, 425, 75, 75);
  image(backward_img, 85, 425, 75, 75);
}

function mousePressed() {
  background(255); //Clears the player of old text & pictures
  image(forward_img, 260, 425, 75, 75); //Restores default buttons & text that doesn't change
  image(backward_img, 85, 425, 75, 75);
  textSize(20);
  text('Now Playing:', 170, 90);
  
  if (85 < mouseX < 160 && 425 < mouseY < 500) {  //Checks to see if mouse clicked on backward button
    if (counter == 1) { //The case where All Star is the current song
      image(despacito_img, 100, 100, 250, 250);
      textSize(32);
      text('Despacito', 145, 380);
      textSize(20);
      text('Luis Fonsi feat. Daddy Yankee', 125, 410);
      image(pause_img, 175, 425, 75, 75);
      despacito_song.play();
      counter = 3;
    }
    if (counter == 2) { //The case where Sandstorm is the current song
      image(all_star_img, 100, 100, 250, 250);
      textSize(32);
      text('All Star', 145, 380);
      textSize(20);
      text('Smash Mouth', 145, 410);
      image(pause_img, 175, 425, 75, 75);
      all_star_song.play();
      counter = 1;
    }
    if (counter == 3) { //The case where Despacito is the current song
      image(sandstorm_img, 100, 100, 250, 250);
      textSize(32);
      text('Sandstorm', 145, 380);
      textSize(20);
      text('Darude', 145, 410);
      image(pause_img, 175, 425, 75, 75);
      sandstorm_song.play();
      counter = 2;
    }
    textSize(32);
    text('Backward case', 100, 100);
  }
  
  if (260 < mouseX < 335 && 425 < mouseY < 500) { //Checks to see if mouse clicked on forward button
    if (counter == 1) { //The case where All Star is the current song
      image(sandstorm_img, 100, 100, 250, 250);
      textSize(32);
      text('Sandstorm', 145, 380);
      textSize(20);
      text('Darude', 145, 410);
      image(pause_img, 175, 425, 75, 75);
      sandstorm_song.play();
      counter = 2;
    }
    if (counter == 2) { //The case where Sandstorm is the current song
      image(despacito_img, 100, 100, 250, 250);
      textSize(32);
      text('Despacito', 145, 380);
      text(20);
      text('Luis Fonsi feat. Daddy Yankee', 125, 410);
      image(pause_img, 175, 425, 75, 75);
      despacito_song.play();
      counter = 3;
    }
    if (counter == 3) { //The case where Despacito is the current song
      image(all_star_img, 100, 100, 250, 250);
      textSize(32);
      text('All Star', 145, 380);
      textSize(20);
      text('Smash Mouth', 145, 410);
      image(pause_img, 175, 425, 75, 75);
      all_star_song.play();
      counter = 1;
    }
    textSize(32);
    text('Forward case', 100, 100);
  }
  
  if (175 < mouseX < 250 && 425 < mouseY < 500) { //Checks to see if mouse clicked on pause/play button
    if (sw == true) { //The case where the music is playing and needs to stop
      if (counter == 1) { //Checks which song is playing in order to stop it
        image(all_star_img, 100, 100, 250, 250);
        textSize(32);
        text('All Star', 145, 380);
        textSize(20);
        text('Smash Mouth', 145, 410);
        image(play_img, 175, 425, 75, 75);
        all_star_song.pause();
      }
      if (counter == 2) {
        image(sandstorm_img, 100, 100, 250, 250);
        textSize(32);
        text('Sandstorm', 145, 380);
        textSize(20);
        text('Darude', 145, 410);
        image(play_img, 175, 425, 75, 75);
        sandstorm_song.pause();
      }
      else {
        image(despacito_img, 100, 100, 250, 250);
        textSize(32);
        text('Despacito', 145, 380);
        textSize(20);
        text('Luis Fonsi feat. Daddy Yankee', 125, 410);
        image(play_img, 175, 425, 75, 75);
        despacito_song.pause();
      }
    }
    else { //The case where the music isn't playing and needs to start
      if (counter == 1) { //Checks which song is playing in order to resume
        image(all_star_img, 100, 100, 250, 250);
        textSize(32);
        text('All Star', 145, 380);
        textSize(20);
        text('Smash Mouth', 135, 410);
        image(pause_img, 175, 425, 75, 75);
        all_star_song.play();
      }
      if (counter == 2) {
        image(sandstorm_img, 100, 100, 250, 250);
        textSize(32);
        text('Sandstorm', 145, 380);
        textSize(20);
        text('Darude', 135, 410);
        image(pause_img, 175, 425, 75, 75);
        sandstorm_song.play();
      }
      else {
        image(despacito_img, 100, 100, 250, 250);
        textSize(32);
        text('Despacito', 145, 380);
        textSize(20);
        text('Luis Fonsi feat. Daddy Yankee', 125, 410);
        image(pause_img, 175, 425, 75, 75);
        despacito_song.play();
      }
    }
    textSize(32);
    text('Play/Pause case', 100, 100);
  }
  
  else {
    text('Your text goes here', 100, 100);
  }
}
  
/* Calculating distance:
backward: min-x: 85 max-x: 160 x-range: 75
          min-y: 425 max-y: 500 y-range: 75
          center point: 122, 462
forward: min-x: 260 max-x: 335 x-range: 75
          min-y: 425 max-y: 500 y-range: 75
          center point: 297, 462
pause/play: min-x: 175 max-x: 250 x-range: 75
            min-y: 425 max-y: 500 y-range: 75
            center point: 212, 462*/
