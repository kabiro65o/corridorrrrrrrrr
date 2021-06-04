var bGimg,frank1img,hunterimg,door1img,foodimg,zzimg;
var frank,hunter,doorclosed,door;
var doorGroup;
var gamestate="play";
var touch=false;

function setup() {
  createCanvas(800,800);
  edges= createEdgeSprites();
 bG = createSprite(400, 400, 50, 800);
 bG.velocityY = 3;
 bG.addImage("bg",bGimg);
 bG.scale =5;
  
 frank = createSprite(400,650,10,10);
 frank.addAnimation("lo",frank1img); 

doorGroup = createGroup();

//hunter = createSprite(400,750,10,10);
//hunter.addImage("hntr",hunterimg);
 //hunter.scale =0.7;

 
}

function preload(){
bGimg = loadImage("images/bg.jpg");
frank1img = loadAnimation("images/jake1.png","images/jake2.png","images/jake3.png","images/jake4.png","images/jake5.png");
hunterimg = loadImage("images/hunter.png");
doorclosedimg = loadImage("images/door1.png");
foodimg = loadAnimation("images/food.png");
zzimg = loadImage("images/hunter.png");
}


function draw() {
  background(255,255,255);  

  if(gamestate==="play"){
    if(bG.y>600){
      bG.y = 400;
    }
    
   
    spawndoors();
     

    if(frank.isTouching(doorGroup)){
      touch=true;
     gamestate="rest";
     
    }

    if(keyDown("right")){
      frank.x+=5;
      }
    
      if(keyDown("left")){
        frank.x-=5;
        }
  }
  else if(gamestate==="rest"){
    bG.velocityY=0;
    doorGroup.setVelocityYEach(0);
    doorGroup.setLifetimeEach(-1);
    doorGroup.changeAnimationEach("food");
  
  }
  else if(gamestate==="end"){

  }
 
  
 
   frank.collide(edges[1]);
   frank.collide(edges[0]);
  drawSprites();



}
function spawndoors(){
  if(frameCount % 60 === 0 ) {
   door = createSprite(200,-10,10,10);
  //door.x=Math.round(random(150,650));
  door.velocityY = 4;
  door.addImage("door",doorclosedimg);
  door.addAnimation("food",foodimg)
  var selectside= Math.round(random(1,2)); 
  if (selectside === 1){
 door.x=150;
  }
  else{
door.x=650;
  }
  frank.depth=door.depth+1;
  door.lifetime = 250;
doorGroup.add(door); 
}

}