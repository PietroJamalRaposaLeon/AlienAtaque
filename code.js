var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8ff868bb-f7d7-4000-b8d2-2f613c2840cf","9040762f-a8ab-4a64-90a6-18d3f21c23f7","6a14e02e-fb39-4d2d-a3b7-2944929ad701","7826566d-9526-412f-a164-6be9153812d5","accaf772-6184-48b3-9c54-06d1e6145287","7b33194b-ce0d-4d1c-a172-b440f82841b3","af307022-5af6-4834-9649-5ee11fa9b0bc","a6d09bd9-bc56-454b-9e76-5b511e358a46","ef9238c3-96cf-47a7-ae72-66f671f066a9","c932b898-9f88-463b-a897-881305b38a03","b3cfdd39-acc7-4a34-97df-43d9054200e8"],"propsByKey":{"8ff868bb-f7d7-4000-b8d2-2f613c2840cf":{"name":"espaço","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":3,"version":"3_0CpPW.t0DnxuINbKzQuuch8RWOvW.g","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/8ff868bb-f7d7-4000-b8d2-2f613c2840cf.png"},"9040762f-a8ab-4a64-90a6-18d3f21c23f7":{"name":"nave","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":14,"looping":true,"frameDelay":2,"version":"j1qpLpjuDywCQcn4ku2ylk8DZQtLtUfu","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/9040762f-a8ab-4a64-90a6-18d3f21c23f7.png"},"6a14e02e-fb39-4d2d-a3b7-2944929ad701":{"name":"tiro","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"77rp7T1vDT2Vdecj7fQluXESUlv5Vwa5","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/6a14e02e-fb39-4d2d-a3b7-2944929ad701.png"},"7826566d-9526-412f-a164-6be9153812d5":{"name":"comece","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"IcBQftX8Py.zEDgVeNdcAQyb36nNU3IN","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/7826566d-9526-412f-a164-6be9153812d5.png"},"accaf772-6184-48b3-9c54-06d1e6145287":{"name":"Alien","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":6,"looping":true,"frameDelay":4,"version":"_mq5jRvK2tIIYhGCUz2tAReDl8wxeee0","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/accaf772-6184-48b3-9c54-06d1e6145287.png"},"7b33194b-ce0d-4d1c-a172-b440f82841b3":{"name":"Alien2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":3,"looping":true,"frameDelay":4,"version":"EYAI9Q3MUeoO2bnXWOvlH271h.xaRDxo","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/7b33194b-ce0d-4d1c-a172-b440f82841b3.png"},"af307022-5af6-4834-9649-5ee11fa9b0bc":{"name":"Super","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":3,"looping":true,"frameDelay":12,"version":"o__rEUaW0i6ljozET6eIpJt61QUzp0cf","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/af307022-5af6-4834-9649-5ee11fa9b0bc.png"},"a6d09bd9-bc56-454b-9e76-5b511e358a46":{"name":"alien3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":5,"version":"pfKyxkuNrHx9pCuA_WyfTy0DMtyR7oJT","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/a6d09bd9-bc56-454b-9e76-5b511e358a46.png"},"ef9238c3-96cf-47a7-ae72-66f671f066a9":{"name":"cabom","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":10,"looping":false,"frameDelay":4,"version":"Y2uafN_B_kPIhxkC710eUFmBzH1_Xnke","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":400},"rootRelativePath":"assets/ef9238c3-96cf-47a7-ae72-66f671f066a9.png"},"c932b898-9f88-463b-a897-881305b38a03":{"name":"fim1","sourceUrl":null,"frameSize":{"x":59,"y":69},"frameCount":14,"looping":false,"frameDelay":12,"version":"jFgWT0SDIvjDeF6_ku0vo2k02ypdZjJ_","loadedFromSource":true,"saved":true,"sourceSize":{"x":236,"y":276},"rootRelativePath":"assets/c932b898-9f88-463b-a897-881305b38a03.png"},"b3cfdd39-acc7-4a34-97df-43d9054200e8":{"name":"fim2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"D2wwZU0dL7GeLioeFN9720OIvWNdC.EW","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b3cfdd39-acc7-4a34-97df-43d9054200e8.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var fundo = createSprite(200,200,400,400);
fundo.setAnimation("espaço");
fundo.scale = 5.09;

var o = createSprite(0,200,10,400);
o.shapeColor = "black";

var p = createSprite(400,200,10,400);
p.shapeColor = "black";

var t = createSprite(200,0,400,10);
t.shapeColor = "black";

var tiro;

var comece = createSprite(200,200,5,50);
comece.setAnimation("comece");
comece.scale = 2;
 
var nave = createSprite(200,330);
nave.setAnimation("nave");
nave.scale = 0.75;
nave.setCollider("rectangle",0,0,40,40);

var inimigo = createSprite(200,70,30,30);
inimigo.setAnimation("Alien");

var life = 100;

var supier = 0;

var boss = 3000;

function draw() {
  background("Black");
  
  if(keyDown("left")){
    nave.x -=8;
  }
   if(keyDown("right")){
    nave.x +=8;
  }
  
    if(keyDown("up")){
    nave.y -=8;
  }
   if(keyDown("down")){
    nave.y +=8;
  }
  
   
  if(keyDown("f")){
    tiro = createSprite(200,200,30,30);
    tiro.setAnimation("tiro");
    tiro.velocityY =-15;
    tiro.x = nave.x;
    tiro.y = nave.y;
    tiro.scale = 1;
    tiro.setCollider("rectangle",0,0,40,800);
    
    if(inimigo.isTouching(tiro)){
      boss -=5;
      supier +=0.1;
    }
  }
  
  if(keyDown("space")){
    comece.destroy();
    inimigo.velocityY = 9;
    inimigo.velocityX = -5;
    playSound("assets/carnival-kerfuffle-music.mp3");
  }
  
  if(supier > 9){
    
    if(keyWentDown("d")){ 
         var Super = createSprite(12,200,33,33);
    Super.setAnimation("Super");
    Super.velocityY = -15;
    Super.x = nave.x;
    Super.y = nave.y;
    supier -=10;
    Super.setCollider("rectangle",0,0,60,800);
    
         if(Super.isTouching(inimigo)){
      boss -=200;
    }
 
    }
  }
  
  if(nave.isTouching(inimigo)){
    life -=0.5;
  }
  
  if(boss == 1500){
    inimigo.setAnimation("Alien2");
    inimigo.velocityX = 13;
    inimigo.velocityY = -15;
  }
  
  if(boss == 1000){
    inimigo.setAnimation("alien3");
    inimigo.velocityX = 20;
    inimigo.velocityy =-24;
    inimigo.scale = 1.5;
  }
  
  if(inimigo.isTouching(o) || inimigo.isTouching(p) || inimigo.isTouching(t)){
    var cabom = createSprite(22,22,22,22);
    cabom.setAnimation("cabom");
    cabom.x = inimigo.x;
    cabom.y = inimigo.y;
    
    if(cabom.isTouching(nave)){
      life -=10;
      cabom.setCollider("rectangle",0,0,100,100);
    }
  }
  
  if(life == 0){
    var fim =createSprite(200,200,400,400);
    fim.setAnimation("fim1");
    fim.scale = 4;
    inimigo.velocityY = 0;
    inimigo.velocityX = 0;
    nave.destroy();
  }
  
  if(boss == 0){
    inimigo.destroy();
    var fim2 =createSprite(200,200,40,40);
    fim2.setAnimation("fim2");
    fim2.scale = 4;
  }
  
 
  
  createEdgeSprites();
  nave.bounceOff(leftEdge);
  nave.bounceOff(rightEdge);
  nave.bounceOff(bottomEdge);
  nave.bounceOff(topEdge);
  inimigo.bounceOff(leftEdge);
  inimigo.bounceOff(rightEdge);
  inimigo.bounceOff(bottomEdge);
  inimigo.bounceOff(topEdge);
  
  
  drawSprites();
  
  stroke("red");
  textSize(20);
  text("Vida : "+ life,300,38);
  
  stroke("blue");
  text("super :"+supier,300,60);
  
  stroke("green");
  text("VidaBoss :"+boss,250,100);
 
  text("Atirar : F",19,38);
  text("Super : D",19,76);
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
