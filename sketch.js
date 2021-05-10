var back;
var bg;
var edges;
var score=0;

function preload() {
   backimg = loadImage("Road.png");
   dmdimg = loadImage("coin.png");
   grimg= loadAnimation("gran2.png","gran3.png","gran4.png")
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
  bg=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  bg.addImage(backimg);
  bg.scale=0.8;

  gr = createSprite(100,height/2);
  gr.addAnimation("run",grimg);

  dmdgrp=new Group();
  
 
  bg.velocityX=-6;
 
   edges= createEdgeSprites();
  
}

function draw(){
   // background(76,77,79)
   background("white")
   if(bg.x<0){
       bg.x=windowWidth/2
   }

   diamond();

    //strokeWeight(4);
    if(dmdgrp.isTouching(gr)){
        dmdgrp.get(0).destroy();
        score=score+1;

    }

    if(keyDown("UP_ARROW")){
        gr.y=gr.y-15;
    }
    if(keyDown("DOWN_ARROW")){
        gr.y=gr.y+15;
    }

    
    gr.bounceOff(edges);
   
    drawSprites();
    textSize(30);
    fill("pink");
    text("SCORE : "+score,windowWidth-300,50);
}

function diamond(){
    if(frameCount%30===0){
        dmd=createSprite(600,Math.round(random(150,width-150)));
        dmd.addImage(dmdimg);
        dmd.scale=0.1;
        dmd.velocityX=-6;
        dmdgrp.add(dmd);
        dmd.lifetime=1000
    
    }
}




/*async function time(){
var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responsejson = await response.json();
console.log(responsejson);
var datim = responsejson.datetime;
console.log(datim);
var hour = datim.slice(11,13);

if(hour<=19&&hour>=06){
  var bg="sprites/bg.png";
  console.log("hi");
}
else{
    bg="sprites/bg2.jpg";
    console.log("bye");
}

backgroundImg=loadImage(bg);
}*/
