const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,
box11,box12,box13,box14,box15,box16;
var hero,heroine,monster,rope,rope2,ground;
var monsterImg;
var male , female,maleImg,femaleImg;
var ak,sun,night;
var choose, chooseImg , choose2;
var start,startImg,play,playImg;
var gameState="1";
var gameOver,gameOverImg,restart,restartImg;
var music;

function preload() {
  bg = loadImage("gamingbackground2.png");
  night = loadImage("gamingbackground1.jpg")
  monsterImg=loadImage("monster.png");
  startImg=loadImage("start.png");
  maleImg=loadImage("superhero2.png");
  femaleImg=loadImage("superhero.png");
  chooseImg=loadImage("choose.png");
  gameOverImg=loadImage("gameover.png");
  restartImg=loadImage("restart1.png");
  music=loadSound("506052__mellau__button-click-3.wav");
}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;


    ground = new Ground(600, 600, 1200, 28);
  
    hero = new Hero(100,800,250);
    heroine = new Heroine(200,800,250);
    rope = new Rope(hero.body, { x: 500, y: 50 });
    rope2 = new Rope(heroine.body, { x: 500, y: 50 });
    monster = new Monster(1100,550,300);
  
    box1 = new Box(900, 550, 70, 70);
    box2 = new Box(900, 480, 70, 70);
    box3 = new Box(900, 410, 70, 70);
    box4 = new Box(900, 350, 70, 70);
    box5 = new Box(900, 300, 70, 70);
  
    box6 = new Box(800, 550, 70, 70);
    box7 = new Box(800, 480, 70, 70);
    box8 = new Box(800, 410, 70, 70);
    box9 = new Box(800, 350, 70, 70);
    box10 = new Box(800, 300, 70, 70);
    box11 = new Box(800, 250, 70, 70);
    box12 = new Box(800, 200, 70, 70);
    
    box13 = new Box(700, 550, 70, 70);
    box14 = new Box(700, 480, 70, 70);
    box15 = new Box(700, 410, 70, 70);
    box16 = new Box(700, 350, 70, 70);
  
    box17 = new Box(600, 550, 70, 70);
    box18 = new Box(600, 480, 70, 70);
    box19 = new Box(600, 410, 70, 70);
    box20 = new Box(600, 350, 70, 70);
    box21 = new Box(600, 300, 70, 70);
    box22 = new Box(600, 250, 70, 70);
    
    
  male=createSprite(400,300,50,50);
  male.addImage(maleImg);
  male.scale=0.3;
  male.visible=false;

  female=createSprite(1200,300,50,50);
  female.addImage(femaleImg);
  female.scale=0.2;
  female.visible=false;

  choose=createSprite(350,450,50,50);
  choose.addImage(chooseImg);
  choose.scale=0.1;
  choose.visible=false;

  choose2=createSprite(1150,450,50,50);
  choose2.addImage(chooseImg);
  choose2.scale=0.1;
  choose2.visible=false;

  ak=createSprite(750,300,50,50);
  ak.addImage(monsterImg);
  ak.scale=0.6;

 
  start=createSprite(750,500,50,50);
  start.addImage(startImg);
  start.scale=0.4
 
  gameOver=createSprite(700,250,50,50);
  gameOver.addImage(gameOverImg);
  gameOver.scale=0.8;
  gameOver.visible=false;

  /*restart=createSprite(700,430,50,50);
  restart.addImage(restartImg);
  restart.scale=0.3;
  restart.visible=false;*/



 
}

function draw() {
  background(bg);
  Engine.update(engine);
  drawSprites();




  if (gameState==="1") {

    gameOver.visible=false;
    //restart.visible=false;
  
    ak.visible=true;
    start.visible=true;
     
    stroke ("black");
    strokeWeight (10)
    fill ("red");
    textSize (70)
    text ("KILL THE MONSTER",420,115);
    if(mousePressedOver(start)){
      gameState = "2";
      music.play();
    }
  
   }


  if(gameState==="2"){

    ak.visible=false;
    start.visible=false;
    male.visible=true;
    female.visible=true;
    choose.visible=true;
    choose2.visible=true;

    strokeWeight(10)
    stroke("white")
    textSize(45)
    fill("black");
    text("SELECT",720,310);

    strokeWeight(10)
    stroke("white")
    textSize(45)
    fill("black");
    text("YOUR",735,355);

    strokeWeight(10)
    stroke("white")
    textSize(45)
    fill("black");
    text("CHARACTER",670,400);

    strokeWeight(10)
    stroke("black")
    textSize(45)
    fill("pink");
    text("CLICK ON CHOOSE TO SELECT!!!",70,100);



    if(mousePressedOver(choose)){
      gameState="3";

      male.visible=false;
      female.visible=false;
      choose.visible=false;
      choose2.visible=false;

      music.play();
    }

    if(mousePressedOver(choose2)){
      gameState="4";
      male.visible=false;
      female.visible=false;
      choose.visible=false;
      choose2.visible=false;
      music.play();
    }

 }


 if(gameState==="3"){


  ground.display();
  box1.display();
  box2.display();
  box3.display();
 box4.display();
  box5.display();
 box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
 box11.display();
 box12.display();
 box13.display();
  box14.display();
  box15.display();
box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
 

  hero.display();
  rope.display();
  monster.display();

  strokeWeight(5)
  stroke("yellow")
  fill("pink");
  textSize(35);
  text("DRAG THE MOUSE TO KILL THE MONSTER",40,70);

  if(monster.body.position.x>1500 || monster.body.position.y>700){
    gameState="5";
    
  }
   
}


 if(gameState==="4"){

  ground.display();
  heroine.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
 box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
 box11.display();
 box12.display();
 box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  rope.display();
  monster.display();

  strokeWeight(5)
  stroke("yellow")
  fill("pink");
  textSize(35);
  text("DRAG THE MOUSE TO KILL THE MONSTER",40,70);


  if(monster.body.position.x>1500 || monster.body.position.y>700){
    gameState="5";
  }

  
 }

 



if(gameState==="5"){
 
  
  gameOver.visible=true;
  /*restart.visible=true;

  if(mousePressedOver(restart)){
   
    Restart();

    music.play();
 }*/
}
 
 
 

}

function mouseDragged() {
  
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });

  Matter.Body.setPosition(heroine.body, { x: mouseX, y: mouseY });

  if((hero.body.position.x >250 && hero.body.position.x < 1000) || (heroine.body.position.x >250 && heroine.body.position.x < 1000)) {
  Matter.Body.setStatic(box1.body,false);
  Matter.Body.setStatic(box2.body,false); 
  Matter.Body.setStatic(box3.body,false);
  Matter.Body.setStatic(box4.body,false);
  Matter.Body.setStatic(box5.body,false);
  Matter.Body.setStatic(box6.body,false);
  Matter.Body.setStatic(box7.body,false);
  Matter.Body.setStatic(box8.body,false);
  Matter.Body.setStatic(box9.body,false);
  Matter.Body.setStatic(box11.body,false);
  Matter.Body.setStatic(box12.body,false);
  Matter.Body.setStatic(box13.body,false);
  Matter.Body.setStatic(box14.body,false);
  Matter.Body.setStatic(box15.body,false);
  Matter.Body.setStatic(box16.body,false);
  Matter.Body.setStatic(box17.body,false);
  Matter.Body.setStatic(box18.body,false);
  Matter.Body.setStatic(box19.body,false);
  Matter.Body.setStatic(box20.body,false);
  Matter.Body.setStatic(box21.body,false);
  Matter.Body.setStatic(box22.body,false);
  }
   
 }

 /*function Restart(){

  gameState="1";

  
 }*/
