var form, game, player, bull, zombie1, killC;
var LG, ZG;
var gameState = 0
var B1, B2, B3, mage, bullet, zom, kill, im_heart;
var out;
var lives = 10;
var gunshot, reload, Zombi, bt, LGP, LBG, WMG;
var score = 0
var HS = 0;
var drops = []
var nametag;
var font;
var GO
var RestartB
var fire
var GameOver
var RestartB



function preload() {
  B1 = loadImage("B1.jpg");
  B2 = loadImage("B2.jpg");
  mage = loadImage("p.png");
  bullet = loadImage("bul.png")
  B3 = loadImage("bg.jpg")
  zom = loadAnimation("z1.gif", "z2.gif", "z3.gif", "z4.gif", "z5.gif", "z6.gif", "z7.gif", "z8.gif", "z9.gif", "z10.gif", "z11.gif");
  gunshot = loadSound("gun shot.mp3");
  reload = loadSound("reload.mp3");
  Zombi = loadSound("z.mp3")
  nametag = loadImage("name.png");
  kill = loadImage("kills.png")
  font = loadFont("metal lord.otf")
  im_heart = loadImage("heart.png")
  GO = loadImage("GO.png")
  bt = loadSound("bt.mp3");
  LGP = loadSound("LPG.mp3");
  LBG = loadSound("LBG.mp3");
  WMG = loadSound("WMg.mp3");
  Hurt = loadSound("hurt.wav")
  GOV = loadSound("GO.wav");
  ETL = loadSound("ETL.wav")
  EWG = loadSound("EWG.wav")
Restart = loadImage("restart.png")
fire = loadImage("fire.png")


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  game = new Game();
  game.reg()


  LG = new Group();
  ZG = new Group();

  killC = createSprite( windowWidth - 475, 50, 10, 10);
  killC.addImage(kill);
  killC.visible = false;


  player = createSprite(100, windowHeight / 4 * 3, 100, 100);
  player.addImage(mage);
  player.width = 172
  player.visible = false;




  zombie1 = createSprite(windowWidth * 2 - windowWidth / 2, windowHeight / 4 * 3, 250, 292);
  zombie1.addAnimation("zom", zom)
  zombie1.width = 250
  zombie1.visible = true
  zombie1.setCollider("rectangle");
  ZG.add(zombie1);


  zombie2 = createSprite(windowWidth * 2 - windowWidth / 3, windowHeight / 4 * 3, 250, 292);
  zombie2.addAnimation("zom", zom)
  zombie2.width = 250
  zombie2.visible = true
  zombie2.setCollider("rectangle");
  ZG.add(zombie2);



  zombie3 = createSprite(windowWidth * 2 - windowWidth / 4, windowHeight / 4 * 3, 250, 292);
  zombie3.addAnimation("zom", zom)
  zombie3.width = 250
  zombie3.visible = true
  zombie3.setCollider("rectangle");
  ZG.add(zombie3);



  zombie4 = createSprite(windowWidth * 2 - windowWidth / 5, windowHeight / 4 * 3, 250, 292);
  zombie4.addAnimation("zom", zom)
  zombie4.width = 250
  zombie4.visible = true
  zombie4.setCollider("rectangle");
  ZG.add(zombie4);



  zombie5 = createSprite(windowWidth * 2 - windowWidth / 6, windowHeight / 4 * 3, 250, 292);
  zombie5.addAnimation("zom", zom)
  zombie5.width = 250
  zombie5.visible = true
  zombie5.setCollider("rectangle");
  ZG.add(zombie5);

  
  fireB = createSprite(windowWidth / 4 * 3, windowHeight / 2)
  fireB.addImage(fire)
  fireB.visible = false


  GameOver = createSprite(windowWidth / 2, windowHeight / 2)
  GameOver.addImage(GO)
  GameOver.visible = false




}

function draw() {

  background(255);



console.log(gameState)

  if (gameState === 0) {

LGP.play()


if(frameCount%10140===0){
  LGP.play()
}
    background(B1)
    fill("red")
    stroke("black")
    strokeWeight(5)
    textSize(36);
    textFont(font);
    text("ZOMBIE  INVASION  PART 1", windowWidth / 2, windowHeight / 4)
    fill("black")
    stroke("white")
    textSize(18);
    text("Name : ", windowWidth / 2 - 50, windowHeight / 4 * 3 - 40)

  }
  else if (gameState === 1) {
    background(B2)



  }
  else if (gameState === 2) {


    background(B3)

    player.visible = true;

    killC.visible = true;
    fill("white");
    textSize(18);
    textFont(font);
    text("kills : " + score, windowWidth - 450, 50)

    out = createSprite(30 + 75, -height + 66, 50, 66)

    for (var i = 0; i < lives; i++) {
      image(im_heart, 30 / 2 + (i * 70 / 2), height / 6, 30, 30);
    }






    for (var i = 0; i < drops.length; i++) {
      drops[i].show();
      drops[i].move();



      if (drops[i].hits(zombie1)) {

        drops[i].evaporate()
        score++
        zombie1.x = windowWidth * 2 - windowWidth / 2;
        console.log("ZD1")
      }
      if (drops[i].hits(zombie2)) {

        drops[i].evaporate()
        score++
        zombie2.x = windowWidth * 2 - windowWidth / 3;
        console.log("ZD1")
      }
      if (drops[i].hits(zombie3)) {

        drops[i].evaporate()
        score++
        zombie3.x = windowWidth * 2 - windowWidth / 4;
        console.log("ZD1")
      }
      if (drops[i].hits(zombie4)) {

        drops[i].evaporate()
        score++
        zombie4.x = windowWidth * 2 - windowWidth / 5;
        console.log("ZD1")
      }
      if (drops[i].hits(zombie5)) {

        drops[i].evaporate()
        score++
        zombie5.x = windowWidth * 2 - windowWidth / 6;
        console.log("ZD1")


      }
    }


    if (frameCount % 60 === 0) {
      Zombi.play();
    }


    zombie1.velocityX = -8 - (score / 5)
    zombie2.velocityX = -10 - (score / 5)
    zombie3.velocityX = -12 - (score / 5)
    zombie4.velocityX = -14 - (score / 5)
    zombie5.velocityX = -16 - (score / 5)




    if (player.x < zombie1.x + zombie1.width && player.x + player.width > zombie1.x) {
      lives--;
      Hurt.play();
      zombie1.x = windowWidth * 2 - windowWidth / 2;
    }
    if (player.x < zombie2.x + zombie2.width && player.x + player.width > zombie2.x) {
      lives--;
      Hurt.play();
      zombie2.x = windowWidth * 2 - windowWidth / 3;
    }
    if (player.x < zombie3.x + zombie3.width && player.x + player.width > zombie3.x) {
      lives--;
      Hurt.play();
      zombie3.x = windowWidth * 2 - windowWidth / 4;
    }
    if (player.x < zombie4.x + zombie4.width && player.x + player.width > zombie4.x) {
      lives--;
      Hurt.play();
      zombie4.x = windowWidth * 2 - windowWidth / 5;
    }
    if (player.x < zombie5.x + zombie5.width && player.x + player.width > zombie5.x) {
      lives--;
      Hurt.play();
      zombie5.x = windowWidth * 2 - windowWidth / 6;
    }

    for (var i = drops.length - 1; i >= 0; i--) {
      if (drops[i].toDelete) {
        drops.splice(i, 1);
      }
    }







     
    



    if (lives === 0) {
      gameState = 3;
    }


if(keyCode === 32){
  gameState = 3
}


  }






  else {
    background(B3)
GOVR()

GameOver.visible = true
player.visible = false;
killC.visible = false;
   









   
  }
  drawSprites()


}

function mouseClicked(){
  if(mouseClicked  && gameState === 2 )  
  gunshot.play()

  var drop = new Drop(windowWidth / 4 * 1, height / 2);
  drops.push(drop);
}






//console.log (keyCode); 








function GOVR() {
  if (gameState === 3)
    GOV.play()
  gameState = 4;
}


























function Drop(x, y) {
  this.x = x;
  this.y = y;
  this.width = 60;
  this.toDelete = false;

  this.show = function () {
    noStroke();
    fill(150, 0, 255);
    image(bullet, this.x, this.y, this.r * 2, this.r * 2);
  };

  this.evaporate = function () {
    this.toDelete = true;
  };

  this.hits = function (Zombies) {
    var d = dist(this.x, this.y, Zombies.x, Zombies.y);
    if (d < this.width + Zombies.width) {
      console.log("====")
      return true;
    } else {
      return false;
    }
  };

  this.move = function () {
    this.x = this.x + 20;
  };
}





function touch(Zombie, PLayer) {
  if (Zombie.y < PLayer.y + PLayer.h && Zombie.y + Zombie.h > PLayer.y) {
    if (Zombie.x == PLayer.x) {
      return true;
    }
  }
}