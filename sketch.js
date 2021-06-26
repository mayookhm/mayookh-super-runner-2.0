var pathImg,path;
var boyImg,runner;
var gamestate="play";
var score = 0;
var  virusimg, virus;
var monsterImg , monster,monsterGroup;
var gameoverImage,gameover;
var coin,coinimg,coingroup;
var left,right;
var restartimg ,restart;
var dragon , dragonimg;
var dragonleft , dragonleftimg;
function preload(){
  pathImg = loadImage("images/temple run 2.jpg");
  boyImg = loadAnimation("images/Jake1.png","images/Jake2.png","images/jake3.png","images/jake4.PNG","images/jake5.png");
  monsterImg = loadImage("images/bomb.png");
  gameoverImage = loadImage("images/gameover.png");
  coinimg = loadImage("images/coin.png");
  virusimg = loadImage("images/virus.png")
  restartimg = loadImage("images/restart.png");
  dragonimg = loadImage("images/dragon.png");
  dragonleftimg = loadImage("images/dragonleft.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
path = createSprite(width/2,50,width+500,height);
path.scale=3.5
path.addImage(pathImg);

runner = createSprite(500,440,30,30);
runner.addAnimation("runner running",boyImg);
monsterGroup=new Group();
coingroup = new Group();

left = createButton('left');
this.left.position(100,500);
this.left.style('background', 'lightgreen');

right = createButton('right');
this.right.position(1200,500);
this.right.style('background', 'lightgreen');

gameover = createSprite(width/2,200);
  gameover.addImage(gameoverImage);
gameover.scale = 1.5;
gameover.visible = false;


  restart = createSprite(width/2,400);
  restart.addImage(restartimg);
  restart.scale = 0.2;
restart.visible = false;
}

function draw() {
  background("white"); 
  
  path.velocityY = 4;
  if(path.y > 600 ){
    path.y = height/2;
  }
  if(keyDown("space")){
    runner.velocityY=-10; 
   }
   if(keyDown("left_arrow")){
   runner.x=runner.x-11;  
   }
   if(keyDown("right_arrow")){
    runner.x=runner.x+11;  
   }

spawncoin();
   spawnMonster();
   
   spawnMonster1();
   spawnMonster2();
   spawnMonster3();
  drawSprites();

  if(monsterGroup.isTouching(runner)){
    monsterGroup.destroyEach();  
    gamestate="end";
    }  
    if(coingroup.isTouching(runner)){
      coingroup.destroyEach();  
    score= score +1;
      }  
  
  if(gamestate==="end"){
 gameover.visible = true;
 restart.visible = true;
 runner.destroy();
 monsterGroup.destroyEach();  
 coingroup.destroyEach(); 
 }



 this.left.mousePressed(() => {
  runner.x=runner.x-11;  
}); 
this.right.mousePressed(() => {
  runner.x=runner.x+11;  
}); 







stroke("red");
textSize(30);
fill("red")
text("SCORE : "+score,250,90);

textSize(10);
fill("red");
  text("CLICK THE LEFT OR UP RIGHT KEYS TO MOVE THE RUNNER",250,50);
}
function spawnMonster(){
  if(frameCount%30===0){
  monster=createSprite(300,100,20,20); 
  monster.velocityY=6;  
  monster.scale=0.1;
  monster.addImage(monsterImg);
  monster.x=Math.round(random(100,1200));
  monsterGroup.add(monster);
  }  
}
function spawncoin(){
  if(frameCount%30===0){
  coin=createSprite(300,100,20,20); 
  coin.velocityY=6;  

  coin.addImage(coinimg);
  coin.x=Math.round(random(100,1200));
  coingroup.add(coin);
  }  
}
function spawnMonster1(){
  if(frameCount%10===0){
  virus=createSprite(300,100,20,20); 
  virus.velocityY=6;  
  virus.scale=0.1;
  virus.addImage(virusimg);
  virus.x=Math.round(random(100,1200));
  monsterGroup.add(virus);
  }  
}
function spawnMonster2(){
  if(frameCount%30===0){
  dragon=createSprite(300,100,20,20); 
  dragon.velocityY=6;  
 dragon.scale=0.6;
  dragon.addImage(dragonimg);
  dragon.x=Math.round(1340);
  monsterGroup.add(dragon);
  }  
}
function spawnMonster3(){
  if(frameCount%30===0){
  dragonleft=createSprite(300,100,20,20); 
  dragonleft.velocityY=6;  
  dragonleft.scale=0.6;
  dragonleft.addImage(dragonleftimg);
  dragonleft.x=Math.round(13);
  monsterGroup.add(dragonleft);
  }  
}