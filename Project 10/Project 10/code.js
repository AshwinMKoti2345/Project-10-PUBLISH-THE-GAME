var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f770b606-9a25-4c2b-83f5-10256dc87dd2","e464fcbe-dab6-4b2c-8a18-f8b30cf7b6cf","7cccb310-0ca3-45ab-94f6-be7289c67285","678f2489-1aa0-4b04-aeec-191e06cfdf4f","bb4f5ff1-c76d-4bfc-a042-80b1dc4f8dc7"],"propsByKey":{"f770b606-9a25-4c2b-83f5-10256dc87dd2":{"name":"sam","categories":["fantasy"],"frameCount":1,"frameSize":{"x":208,"y":228},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:07:56 UTC","pngLastModified":"2021-01-05 19:06:51 UTC","version":"sbA6wIMCE6Z4FoRqt62ij4avfUs3kP85","sourceUrl":"assets/api/v1/animation-library/gamelab/sbA6wIMCE6Z4FoRqt62ij4avfUs3kP85/category_fantasy/rpgcharacter_09.png","sourceSize":{"x":208,"y":228},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/sbA6wIMCE6Z4FoRqt62ij4avfUs3kP85/category_fantasy/rpgcharacter_09.png"},"e464fcbe-dab6-4b2c-8a18-f8b30cf7b6cf":{"name":"car1","categories":["vehicles"],"frameCount":1,"frameSize":{"x":71,"y":131},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:47:28 UTC","pngLastModified":"2021-01-05 19:46:44 UTC","version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","sourceSize":{"x":71,"y":131},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"7cccb310-0ca3-45ab-94f6-be7289c67285":{"name":"car2","categories":["vehicles"],"frameCount":1,"frameSize":{"x":71,"y":131},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:46:28 UTC","pngLastModified":"2021-01-05 19:47:32 UTC","version":"lHG1XFlqFup4wzdHby85uHkMnnYotG1g","sourceUrl":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png","sourceSize":{"x":71,"y":131},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png"},"678f2489-1aa0-4b04-aeec-191e06cfdf4f":{"name":"car3","categories":["vehicles"],"frameCount":1,"frameSize":{"x":71,"y":131},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:46:46 UTC","pngLastModified":"2021-01-05 19:46:25 UTC","version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","sourceSize":{"x":71,"y":131},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"bb4f5ff1-c76d-4bfc-a042-80b1dc4f8dc7":{"name":"car4","categories":["vehicles"],"frameCount":1,"frameSize":{"x":71,"y":131},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:47:05 UTC","pngLastModified":"2021-01-05 19:47:05 UTC","version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","sourceSize":{"x":71,"y":131},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"}}};
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

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation ("sam");
  sam.scale = 0.17;
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.setAnimation("car1");
  car1.scale = 0.35;
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.setAnimation("car2");
  car2.scale = 0.35;
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car3.setAnimation("car3");
  car3.scale = 0.35;
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.setAnimation("car4");
  car4.scale = 0.35;
  
 
//add the velocity to make the car move.
car1.velocityY = 8;
car2.velocityY = 8;
car3.velocityY = -8;
car4.velocityY = -8;

function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
car1.bounceOff(boundary2);
car1.bounceOff(boundary1);
car2.bounceOff(boundary2);
car2.bounceOff(boundary1);
car3.bounceOff(boundary2);
car3.bounceOff(boundary1);
car4.bounceOff(boundary2);
car4.bounceOff(boundary1);

//Add the condition to make the sam move left and right
if (keyDown(RIGHT_ARROW)){
  sam.x=sam.x+4;
}

if (keyDown(LEFT_ARROW)){
  sam.x=sam.x-4;
}
//Add the condition to reduce the life of sam if it touches the car.
if (sam.isTouching(car1)||sam.isTouching(car2) || sam.isTouching(car3) || sam.isTouching(car4)) 
{
  life=life+1;
  sam.x=20;
  sam.y=190;
  
}
  
 drawSprites();
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
