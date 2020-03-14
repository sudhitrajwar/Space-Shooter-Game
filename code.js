var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["35ffeda4-21e9-44a8-902b-af2c3f14a2d6","5858ab36-16a1-4fbf-badf-d6c0315cfb8b","d5218379-1744-4124-b4c2-96019db4d2d1","3a1babb1-5313-4d73-a0c2-2862c3b4d4f5","0ffbafb9-49ad-4884-bfd2-ed2b98c67efa","bb1135c8-21d3-4f5a-9eec-098705b6c69a","b2f3c7bb-1a31-42a8-bb5f-a34cb1b23ec3","38abbaec-56ee-446d-8f2b-19c704705fd7","9844602a-a66d-4668-b61e-bfd7c6179a54","ab7668af-04e2-4581-832a-69711a5f54e9","a0bf37fa-a28b-4a61-8f84-9282a1b28bc9","38cb6752-3029-4bc2-aa6d-049af678c4b6"],"propsByKey":{"35ffeda4-21e9-44a8-902b-af2c3f14a2d6":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"VJIKPdmfi0BjhUXb51Qvtym3BwFYBKPc","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/35ffeda4-21e9-44a8-902b-af2c3f14a2d6.png"},"5858ab36-16a1-4fbf-badf-d6c0315cfb8b":{"name":"car_blue_1","sourceUrl":"assets/api/v1/animation-library/4YZuCQBTe6Els6i6ZBTXixKxDQ8sX_Mm/category_vehicles/car_blue.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"4YZuCQBTe6Els6i6ZBTXixKxDQ8sX_Mm","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/4YZuCQBTe6Els6i6ZBTXixKxDQ8sX_Mm/category_vehicles/car_blue.png"},"d5218379-1744-4124-b4c2-96019db4d2d1":{"name":"Enemy1","sourceUrl":null,"frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":10,"version":"Ehn16vi_UcJh.tMVmA3mAN6sRtuNvZhj","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/d5218379-1744-4124-b4c2-96019db4d2d1.png"},"3a1babb1-5313-4d73-a0c2-2862c3b4d4f5":{"name":"Enemy2","sourceUrl":null,"frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"bBSbEz3LAattPDNVbGNNGRI69CVve9.l","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/3a1babb1-5313-4d73-a0c2-2862c3b4d4f5.png"},"0ffbafb9-49ad-4884-bfd2-ed2b98c67efa":{"name":"Enemy3","sourceUrl":"assets/api/v1/animation-library/m63Nu4FNF7r64NwddTtIE3WiqFPbqAv8/category_vehicles/enemyRed1.png","frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"m63Nu4FNF7r64NwddTtIE3WiqFPbqAv8","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/api/v1/animation-library/m63Nu4FNF7r64NwddTtIE3WiqFPbqAv8/category_vehicles/enemyRed1.png"},"bb1135c8-21d3-4f5a-9eec-098705b6c69a":{"name":"Enemy4","sourceUrl":"assets/api/v1/animation-library/qjOJYzBTlh.C0IlGUfgBNcoCXgGuW2dg/category_vehicles/enemyGreen1.png","frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"qjOJYzBTlh.C0IlGUfgBNcoCXgGuW2dg","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/api/v1/animation-library/qjOJYzBTlh.C0IlGUfgBNcoCXgGuW2dg/category_vehicles/enemyGreen1.png"},"b2f3c7bb-1a31-42a8-bb5f-a34cb1b23ec3":{"name":"motorcycle_1","sourceUrl":"assets/api/v1/animation-library/Ym.a6IChdRPRv48wbyOgxcF_lhRPLoo_/category_vehicles/motorcycle.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"Ym.a6IChdRPRv48wbyOgxcF_lhRPLoo_","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/Ym.a6IChdRPRv48wbyOgxcF_lhRPLoo_/category_vehicles/motorcycle.png"},"38abbaec-56ee-446d-8f2b-19c704705fd7":{"name":"cave_1","sourceUrl":"assets/api/v1/animation-library/xQipuvePUXSq06jZsTlobJR8.Q7ZvgTC/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":1,"version":"xQipuvePUXSq06jZsTlobJR8.Q7ZvgTC","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/xQipuvePUXSq06jZsTlobJR8.Q7ZvgTC/category_backgrounds/background_cave.png"},"9844602a-a66d-4668-b61e-bfd7c6179a54":{"name":"space_1","sourceUrl":"assets/api/v1/animation-library/8O2IYyEUlJ8FNRemqZEf0FXfKmbUIxiF/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"8O2IYyEUlJ8FNRemqZEf0FXfKmbUIxiF","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/api/v1/animation-library/8O2IYyEUlJ8FNRemqZEf0FXfKmbUIxiF/category_backgrounds/background_space.png"},"ab7668af-04e2-4581-832a-69711a5f54e9":{"name":"santa_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"ymbSYJ.WLKl761nGYtG82ObexovAxgbc","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/ab7668af-04e2-4581-832a-69711a5f54e9.png"},"a0bf37fa-a28b-4a61-8f84-9282a1b28bc9":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"wKXYtnC2NKg6tM7aAoTMlqyj8qMz2M7Q","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a0bf37fa-a28b-4a61-8f84-9282a1b28bc9.png"},"38cb6752-3029-4bc2-aa6d-049af678c4b6":{"name":"5-54227_explosion-png-clip-art-explosion-png-transparent-png.png_1","sourceUrl":"assets/v3/animations/dq2g3UfYTfhK6KO30MzvBMTZZVE2qCHorSXTezTbeRE/38cb6752-3029-4bc2-aa6d-049af678c4b6.png","frameSize":{"x":860,"y":570},"frameCount":1,"looping":true,"frameDelay":4,"version":"mnau35WrFLs7m_IU4.rF_.kQl2b9eU1A","loadedFromSource":true,"saved":true,"sourceSize":{"x":860,"y":570},"rootRelativePath":"assets/v3/animations/dq2g3UfYTfhK6KO30MzvBMTZZVE2qCHorSXTezTbeRE/38cb6752-3029-4bc2-aa6d-049af678c4b6.png"}}};
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

var PLAY = 1;
var END = 0;
var gameState = PLAY;

//create background
var ground = createSprite(200,200,50,10);
ground.setAnimation("space_1");

var bulletgroup = createGroup();
var enemygroup = createGroup();
// Create a player sprite
 var player = createSprite(190, 370,20,20);
 player.setAnimation("motorcycle_1");
  player.scale = 0.5;
var score = 0;
var flag = 0;

function draw() {
  background("white");
 drawSprites();
 fill("white"); 
 stroke("yellow");
 textFont("Arial Black");
 
  text("Score: "+score,300,20);
  
 if(gameState === PLAY){

spawnBullet();
spawnEnemy();
for(var i=0;i<=flag-1;i++){
if(bulletgroup.isTouching(enemygroup)){
  bulletgroup.get(i).destroy();
  enemygroup.get(i).destroy();
   score++;
}
 break;
}

}
 else if(gameState === END){
   
 }

//create edges and make the player bounce
  createEdgeSprites();
  player.bounceOff(leftEdge);
  player.bounceOff(rightEdge);
   
  // Move the player sprite about the Mouse X direction.
 player.x = World.mouseX;
if(score >=10){
  enemygroup.setVelocityYEach(7)}
}
for(var i=0;i<=-1;i++){
if(enemygroup.isTouching(bottomEdge)){
   score-1;
}
}


//create enemies sprites
function spawnEnemy(){
if(World.frameCount% 120 === 0){
      var Enemy = createSprite(randomNumber(20,380),10,10,10);
      var num = randomNumber(1,4);
      Enemy.setAnimation("Enemy"+num);
      Enemy.scale = 0.5;
      Enemy.velocityY = 2;
      Enemy.lifetime = 200;
      enemygroup.add(Enemy);
 Enemy.debug = true;
      enemygroup.setColliderEach("rectangle",0,0,20,10);
  flag++;    
  
}
}

function spawnBullet(){

if(keyWentDown("space")){  var bullet = createSprite(player.x,player.y,10,100);
      bullet.setAnimation("animation_2");
      bullet.velocityY = -2;
bullet.scale = 1.5;
  bullet.lifetime =200;
bulletgroup.add(bullet);
bullet.debug = true;  
bulletgroup.setColliderEach("rectangle",0,0,20,50);
}
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
