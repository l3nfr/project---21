var canvas;
var boxA, boxB, boxC, boxD;

function preload(){
 
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 boxA = createSprite(40,550,200,20);
 boxA.shapeColor = "red";
 boxB = createSprite(260,550,200,20);
 boxB.shapeColor = "blue";
 boxC = createSprite(480,550,200,20);
 boxC.shapeColor = "purple";
 boxD = createSprite(700,550,200,20);
 boxD.shapeColor = "yellow";
    //create box sprite and give velocity
 box = createSprite(random(10,790));
 box.shapeColor = "white";
 
 box.width = 20;
 box.height = 20;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  
  box.velocityY = 9;
  
    drawSprites();

 if(boxA.isTouching(box) && box.bounceOff(boxA)){
   box.shapeColor = "red";
   box.velocityY = box.velocityY - 15;
 }
 if(boxB.isTouching(box) && box.bounceOff(boxB)){
    box.shapeColor = "blue";
    box.velocityY = box.velocityY - 15;
 }  
 if(boxC.isTouching(box) && box.bounceOff(boxC)){
    box.shapeColor = "purple";
    box.velocityY = box.velocityY - 15;
 }     
 if(boxD.isTouching(box) && box.bounceOff(boxD)){
    box.shapeColor = "yellow";
    box.velocityY = box.velocityY - 15;
 }

    //add condition to check if box touching surface and make it box
}
 