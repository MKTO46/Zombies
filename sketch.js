var score =0
function preload(){
playerImg = loadImage("Images/download.png")
enemyImg = loadImage("Images/Enemy.png")
bulletImg = loadImage("Shooting game/bullet.png")
backgroundImg = loadImage("Images/background.jpeg")
}
function setup() {
  createCanvas(800,400);
  bg = createSprite(400,200,800,400)
  bg.addImage(backgroundImg)
  bg.scale = 3.2
 player = createSprite(60,370)
player.addImage(playerImg)
player.scale = 0.6
ground = createSprite(400,400,800,20)
player.setCollider("rectangle",0,0,100,120)
Egroup = new Group()
Bgroup = new Group()
Edges = createEdgeSprites()
}

function draw() {
  background(180);
  player.collide(ground)
  player.collide(Edges[0])
  if(keyDown("space")){
    bullet = createSprite(100,player.y -18)
    bullet.velocityX = 4
    bullet.addImage(bulletImg)
    bullet.scale =0.05
    Bgroup.add(bullet)
  } 
  player.velocityY = 0
  if(keyDown("up")){
    player.velocityY = -3
  }
  if(keyDown("down")){
    player.velocityY = 3
  }
  for(var i=0; i< Egroup.length;i++){
    if(Bgroup.isTouching(Egroup.get(i))){
      Egroup.get(i).destroy()
      score++
      Bgroup.destroyEach()
  }
  }

  enemys()
  drawSprites()
  fill('green')
  text("Score: "+score,700,50)
}
function enemys(){
  if(frameCount % 50  ===0){
    enemy = createSprite(800,random(100,300))
    enemy.addImage(enemyImg)
    enemy.velocityX = -3
    enemy.scale = 0.05
    Egroup.add(enemy)
  }
}