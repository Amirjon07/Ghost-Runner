var climber,c
var door,d
var tower,t
var ghost,g
var doors,climbers
var gameState= "play"
function preload(){
 climber= loadImage("climber.png")
  door= loadImage("door.png")
  tower= loadImage("tower.png")
  ghost=loadImage("ghost-standing.png")
}

function setup(){
  createCanvas(600,600)
  t=createSprite(300,300,20,20)
t.addImage(tower)
t.velocityY=2
g=createSprite(200,200,20,20)
g.scale=0.4
  g.addImage(ghost)
doors=new Group()
climbers=new Group()
}
function draw(){
  background("black")
  drawSprites()
if(gameState=="play"){
  if (t.y>600){
t.y=300
}

if (keyDown("space")||touches.length>0){
touches=[]
  g.velocityY=-4
}
if(keyDown("A")){
   g.x=g.x-4
   }
if(keyDown("D")){
   g.x=g.x+4
   }

  g.velocityY=g.velocityY+0.4  
windows()

  if(g.isTouching(climbers)){
  g.destroy()
gameState="end"
  }
if(g.y>600){
  gameState="end"
}
}
  if(gameState=="end"){
   t.velocityY=0  
    doors.setVelocityYEach(0)
    climbers.setVelocityYEach(0)
    textSize(25)
    fill("red")
    text("GameOver",300,300)
}  

function windows(){
if(frameCount%100==0){
d=createSprite(200,-50,20,20)
d.addImage(door)
d.velocityY=2
d.x=Math.round(random(120,400))
c=createSprite(200,10,20,20)
  c.velocityY=2 
  c.addImage(climber)
  c.x=d.x
  d.depth=g.depth
g.depth=g.depth+1
doors.add(d)
climbers.add(c)
}
}
}