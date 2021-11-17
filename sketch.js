var canvas;
var backgroundImage, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var question;
var startButtonImg;
var muteButton,muteButtonImg;
var bgMusic;
var coco,cocoS;


function preload() {
  backgroundImage = loadImage("assets/QuestionBg.jpg");
  //startButtonImg = loadImage("assets/play.png");
  bgMusic = loadSound("assets/Background_sound.mp3");
  coco = loadImage("assets/Coco.gif");
  cocoS = loadImage("assets/cocoSad.gif");
}

function setup() {
  canvas = createCanvas(900,500);
  database = firebase.database();

  // Creating mute button
   muteButton = createImg('assets/Mute_button.png');
   muteButton.position(800,35);
   muteButton.size(60,60);
   muteButton.mouseClicked(mute);

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);

  fill("White");
  textSize(50);
  //font("Calibri");
  text("qUirKy QuiZ",340,100);
  
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
   // game.start();
   // question.display();
  }

  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function mute()
{
  if(bgMusic.isPlaying())
     {
      bgMusic.stop();
     }
     else{
      bgMusic.play();
     }
}
