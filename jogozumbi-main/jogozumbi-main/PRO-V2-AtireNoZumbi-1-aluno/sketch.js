var bg,bgImg;
var player, shooterImg, shooter_shooting;
var heart_1, heart_2, heart_3;
var heart1Img, heart2Img, heart3Img

function preload(){
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  bgImg = loadImage("assets/bg.jpeg")
  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
  

  //criando o sprite do jogador
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(shooterImg)
  player.scale = 0.3
  player.setCollider("rectangle",0, 0, 300, 300)
  player.debug = true

  heart_1 = createSprite(displayWidth-150,40,20,20)
  heart_1.addImage(heart1Img)
  heart_1.scale = 0.4
  heart_1.visible = false

  heart_2 = createSprite(displayWidth-100,40,20,20)
  heart_2.addImage(heart2Img)
  heart_2.scale = 0.4
  heart_2.visible = false

  heart_3 = createSprite(displayWidth-150,40,20,20)
  heart_3.addImage(heart3Img)
  heart_3.scale = 0.4
  heart_3.visible = true
}

function draw() {
  background(0); 
 //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")|| touches.length>0){
    player.y = player.y+30
  }

  //solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada
  if(keyWentDown("space")){
  player.addImage(shooter_shooting)
     
  }
  else if(keyWentUp("space")){
  player.addImage(shooterImg)
  }
  //o jogador volta à imagem original quando pararmos de pressionar a barra de espaço

  drawSprites();

}
