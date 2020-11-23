var tower,towerImage;
var door,doorImage;
var doorGroup;
var ghost,ghostImage;
var invisibleblock, invisibleblockGroup;
var gameState ="play";
var spookysound;


function preload(){
  towerImage = loadImage("tower.png");
  doorImage = loadImage("door.png");
  ghostImage = loadImage("ghost-standing.png");
  spookysound = loadSound("spooky.wav");
}

function setup()
{
  createCanvas(600,500);
  spookysound.loop();
  
  tower = createSprite(300,300);
  tower.addImage(towerImage);
  tower.velocityY =1;
  
  ghost = createSprite(200,200,50,50);
  ghost.addImage(ghostImage);
  ghost.scale = 0.3;
  
  doorGroup = createGroup();
  invisibleblockGroup = createGroup();

}

function draw()
{
  background("black");
  if(gameState === "play"){
    
  
  
  if(tower.y>400){
    tower.y = 300;
  }
  
  if(keyDown("left_arrow")){
     ghost.x = ghost.x -3;
     }
  
  if(keyDown("right_arrow")){
     ghost.x = ghost.x +3;
     }
  
  if(keyDown("space")){
     ghost.velocityY = -5;
     }
  ghost.velocityY = ghost.velocityY + 0.8;
  
  spawnDoors();
  
  drawSprites()
    
    if(ghost.isTouching(invisibleblockGroup) || ghost.y>600){
      gameState = "end";
      ghost.destroy();
    }
}
  if(gameState === "end"){
    fill("orange");
    textSize(30);
    text("GAME OVER ",230,250);
  }
}
function spawnDoors()
{
  if(frameCount % 240===0){
     door = createSprite(200,-50);
  door.addImage(doorImage);
  door.velocityY = 1;
    door.x = Math.round(random(120,400));
    door.lifetime = 800;
    doorGroup.add(door);
    ghost.depth = door.depth;
    ghost.depth = ghost.depth+1;
    
      
  invisibleblock = createSprite(200,10);
  invisibleblock.height = 2;
  invisibleblock.x = door.x;
  invisibleblock.velocityY = 1;
    invisibleblockGroup.add(invisibleblock);
  
  }
 
}