var bgfloresta, raposa, imraposa, floresta, dora,leao, passaro,cobra;
var obscimag, obsbaixog;

function preload(){
  bgfloresta = loadImage("assets/flore.jpg")
  imraposa = loadImage("assets/raposa.png")
  dora = loadImage("assets/dorapre.png")
  leao = loadImage("assets/leaobangela.png")
  passaro = loadImage("assets/obsTop2.png")
  cobra = loadImage("assets/sr.cobra.png")
}

function setup(){
  createCanvas(1000,550)
  //imagem de plano de fundo
  floresta = createSprite(500,275);
  floresta.addImage(bgfloresta);
  floresta.scale = 0.9

  //criando canto superior e inferior
  bottomGround = createSprite(200,390,800,20);
  bottomGround.visible = false;

  topGround = createSprite(200,10,800,20);
  topGround.visible = false;
        
  //criando o balão     
  raposa = createSprite(150,200,20,50);
  raposa.addImage(imraposa);
  raposa.scale = 0.2;

  obscimag = new Group();
  obsbaixog = new Group();
}

function criObista(){
 if(frameCount%60===0){
  var obisdecima = createSprite(1000,50);
  obisdecima.velocityX=-3
  var aleatorio = Math.round(random(1,2))
  switch(aleatorio){
    case 1: obisdecima.addImage(dora);
     break;
    case 2: obisdecima.addImage(passaro)
     break;
   default:break;
  }
  obisdecima.lifetime=345
  obscimag.add(obisdecima)
 }

}

function criObista1(){
  if(frameCount%60===0){
   var obisdebaixo = createSprite(1000,500);
   obisdebaixo.velocityX=-3
   var aleatorio = Math.round(random(1,2))
   switch(aleatorio){
     case 1: obisdecima.addImage(leao);
      break;
     case 2: obisdecima.addImage(cobra)
      break;
    default:break;
   }
   obisdecima.lifetime=345
   obsbaixog.add(obisdebaixo)
  }
 
 }
 

function draw() {
  
  background("black");
        
  //fazendo o balão de ar quente pular
  if(keyDown("space")) {
    raposa.velocityY = -6 ;
  }
  criObista();
  //adicionando gravidade
  raposa.velocityY = raposa.velocityY + 2;
   
  drawSprites();
        
}
