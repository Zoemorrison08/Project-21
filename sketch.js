var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    block1 = createSprite(100,580,180,30);
    block1.shapeColor = "red";
    block2 = createSprite(295,580,180,30);
    block2.shapeColor = "purple";
    block3 = createSprite(500,580,180,30);
    block3.shapeColor = "green";
    block4 = createSprite(700,580,180,30);
    block4.shapeColor = "blue";

    ball = createSprite(random(10,780),50,50,50);
    ball.shapeColor = "white";
    ball.velocityX = 5;
    ball.velocityY = 7;
}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites() 
    ball.bounceOff(edges);
    if(block1.isTouching(ball)&& ball.bounceOff(block1)){
        ball.shapeColor = "red";
        music.play()
    }
    if(block2.isTouching(ball)){
        ball.shapeColor = "purple";
        ball.velocityX = 0;
        
        ball.velocityY = 0;
        music.stop()
    }
    if(block3.isTouching(ball)&& ball.bounceOff(block3)){
        ball.shapeColor = "green";
       
    }
    if(block4.isTouching(ball)&& ball.bounceOff(block4)){
        ball.shapeColor = "blue";
       
    }
    drawSprites()

}
