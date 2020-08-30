const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var dropArray = [];
var variable = 0;

var raindropArray =[];
var manImg, manSprite;

function preload(){
    
}

function setup(){
    createCanvas(400,600);

    engine = Engine.create();
    world = engine.world;
    
    manImg = loadImage("manRain.png");
    manSprite = createSprite(200, 400, 80, 150);


    
}

function draw(){
    background("black");
    Engine.update(engine);
    variable = variable + 1;

    manImg.resize(300,0);
    manSprite.addImage(manImg);

    if(variable % 1 === 0){
         raindropArray.push(new Raindrop(random(0,400), 1, 4, random(5, 25),0, 128, 128));
    }
    
    for(var i = 0;i < raindropArray.length; i++){
        raindropArray[i].display();
    }   

    manSprite.collide(raindropArray, happen);
    isTouching();
/*
for(var i = 1; i < 1000; i = i + 1 ){
        var drop = new Drop(random(0,400), 0, 5,5)
        dropArray.push(drop);
        drop.display();
    }

    if(variable > 1){
        var drop = new Drop(100,100, 5,5)
        dropArray.push(drop);
        //dropArray.push(drop);
        variable = variable + 1
    }

*/
    drawSprites();
}

function happen(){
    console.log("COLLIDE IS WORKING");
}
function isTouching() {
    if(raindropArray.x - manSprite.x < manSprite.width/2 + raindropArray.width/2 
        && manSprite.x - raindropArray.x < manSprite.width/2 + raindropArray.width/2 
        && raindropArray.y - manSprite.y < manSprite.height/2 + raindropArray.height/2 
        && manSprite.y - raindropArray.y < manSprite.height/2 + raindropArray.height/2){
            raindropArray.velocityY = raindropArray.velocityY + 0.12
            raindropArray.velocityX = (random(2,-2))
            raindropArray.velocityY = 2;
            console.log("insde is touching");
     }
}
