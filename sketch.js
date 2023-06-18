  let x = 0;
  let y = 0;

  let reset = 0;  

function setup() {
  createCanvas(512,512);
  frameRate(30)
  background(220);
    
}

function draw() {

  
  push();
  scale(0.333333);
  
  translate(0+x,0+y);
  
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  
  if(true){
  push();
  
  push();
  fill(220,5);
  noStroke();
  rect(0,0,512);
  pop();
  
  ////cuadrados base
  
  var sumaXb = 0;
  var sumaYb = 0;

  for (var j = 0; j < 4; j++){
  for (var i = 0; i < 4; i ++){
    push();
    translate(6 + sumaXb,6 + sumaYb );
    strokeWeight(2);
    noFill();
    rect(0,0,120,120);
    pop();
    
    sumaXb+=126;  
  }
  sumaXb=0;
  sumaYb+=126;
  }

  
  
  /////fin cuadrados base
 
  ///////////////////////////////////////////////
  
  //cuadrados move
  
  var sumaXm = 0;
  var sumaYm = 0;
  var intensidad = 0;
  
  for (var n = 0; n < 4; n++){
  for (var ñ = 0; ñ < 4; ñ++){
    push();
    
    
    translate(66 + sumaXm + random(-2,2),66 + sumaYm + random(-2,2));
    rotate(random(0,0.02));
    
    strokeWeight(random(0,2));
    
    stroke(random(0,20));
    
    noFill();
    
    rect(-60,-60,120 + random(-2,2),120 +random(-2,2));
    
    
    pop();
    
  
    
  sumaXm+=126;  
  }
  sumaXm=0;
  sumaYm+=126;
  }
   
  
  
  ///fin cuadrados move
  
  //////////////////////////////////////////////
  
  //degradé intensidad x
  
  var sumaXdx = 0;
  var sumaYdx = 0;
  intensidad = 1;
  
  for (var q = 0; q < 4; q++){
  for (var w = 0; w < 4; w++){
    
    push();
    
    
    translate(66 + sumaXdx + random(-2,2) * intensidad,66 + sumaYdx + random(-2,2)*intensidad);
    rotate(random(-0.1,0.1)*intensidad);
    
    strokeWeight(random(0,2));
    
    stroke(random(0,5)*intensidad);
    
    noFill();
    
    rect(-60,-60,120 + random(-2,2)*intensidad,120 +random(-2,2)*intensidad);
    
    
    pop();
    
    intensidad +=0.5;
  
    
  sumaXdx+=126;  
  }
  sumaXdx=0;
    sumaYdx+=126;
  }
  
  
  
  //fin degradé intensidad x
  
  //////////////////////////////////////////////  
  
  //degradé intensidad y
  
  var sumaXdy = 0;
  var sumaYdy = 0; 
  intensidad = 1;
  
  for (var p = 0; p < 4;p++){
  for (var o = 0; o < 4; o++){
    
    push();
    
    
    translate(66 + sumaXdy + random(-2,2) * intensidad,66 + sumaYdy + random(-2,2)*intensidad);
    rotate(random(-0.1,0.1)*intensidad);
    
    strokeWeight(random(0,2));
    
    stroke(random(0,5)*intensidad);
    
    noFill();
    
    rect(-60,-60,120 + random(-2,2)*intensidad,120 +random(-2,2)*intensidad);
    
    
    pop();
    
    intensidad +=0.5;
  
    
  sumaYdy+=126;  
  }
  sumaYdy=0;
    sumaXdy+=126;
  }
  
  
  
  //fin degradé intensidad y
  
  pop();
}
  
  
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  
  if(true){
  push();
  
  translate(512,512);
    
  
  push();
  fill(220);
  noStroke();
  rect(0,0,512);
  pop();
  
  let sumaXy = 0;
  let sumaYy = 0;
  
  let intensidady = 0;
  
  /////Y
  
  for (let j = 0; j < 4; j++){
  for (let i = 0; i < 4; i ++){
    
    push();
    
    translate(6 + sumaXy + 60 + random(-1*intensidady,1*intensidady), 6 + sumaYy + 60 + random(-1*intensidady,1*intensidady));
    
    rotate(random(-1*intensidady,1*intensidady));
    
    scale(random(-0.1,0.1)*intensidady);

    strokeWeight(2);
    noFill();
    rect(0 -60,0 -60,120,120);
    pop();
    
    sumaXy+=126;  
  }
  sumaXy=0;
  sumaYy+=126;
  intensidady+=4;
  }
  
  /////X
  let sumaXx = 0;
  let sumaYx = 0;
  let intensidadx = 0;
  
  for (let w = 0; w < 4; w++){
  for (let q = 0; q < 4; q ++){
    
    push();
    translate(6 + sumaXx + 60 + random(-1*intensidadx,1*intensidadx) , 6 + sumaYx + 60 + random(-1*intensidadx,1*intensidadx));
    
    rotate(random(-0.1,0.1)*intensidadx);
    
    scale(random(-0.1*intensidadx,0.1*intensidadx));
    
    strokeWeight(2);
    noFill();
    rect(0 -60,0 -60,120,120);
    pop();
    
    sumaYx+=126;  
  }
  sumaYx=0;
  sumaXx+=126;
  intensidadx+=4;
  }
  pop();
  }
  
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  
    if(true){
  push();
  
  translate(1024, 1024);
  scale(1);
  
  //traslacion canvas
  ///////////
  let sumaXy = 0;
  let sumaYy = 0;
  
  let intensidady = 0;
  
  /////Y
  
  for (let j = 0; j < 4; j++){
  for (let i = 0; i < 4; i ++){
    
    push();
    
    translate(6 + sumaXy + 60 + random(-1*intensidady,1*intensidady), 6 + sumaYy + 60 + random(-1*intensidady,1*intensidady));
    
    rotate(random(-1*intensidady,1*intensidady));
    
    scale(random(-0.1*intensidady,0.1*intensidady));

    strokeWeight(2);
    noFill();
    rect(0 -60,0 -60,120,120);
    pop();
    
    sumaXy+=126;  
  }
  sumaXy=0;
  sumaYy+=126;
  intensidady+=2;
  }
  
  /////X
  let sumaXx = 0;
  let sumaYx = 0;
  let intensidadx = 0;
  
  for (let w = 0; w < 4; w++){
  for (let q = 0; q < 4; q ++){
    
    push();
    translate(6 + sumaXx + 60 + random(-1*intensidadx,1*intensidadx) , 6 + sumaYx + 60 + random(-1*intensidadx,1*intensidadx));
    
    rotate(random(-1*intensidadx,1*intensidadx));
    
    scale(random(-0.1*intensidadx,0.1*intensidadx));
    
    strokeWeight(2);
    noFill();
    rect(0 -60,0 -60,120,120);
    pop();
    
    sumaYx+=126;  
  }
  sumaYx=0;
  sumaXx+=126;
  intensidadx+=2;
  }
  //if(frameCount==100 || frameCount%100 == 0){background(220);}
  pop();
  }
  
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  
  
  pop();
  /*
  if(frameCount%100==0){
    x-=512;
    y-=512;
    reset++;}
    if (reset == 3){
      x=0;
      y=0;
      reset = 0;
}*/

}
