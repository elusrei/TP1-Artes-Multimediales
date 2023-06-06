function setup() {
  createCanvas(512, 512);
  background(170)
  frameRate(30);
}

function draw() {
  var contador = 0;
  
  
  background(170,random(10,20));
  
  
    //degrade fondo
  var fondo=512;
  var colorfondo=0;
  var opafondo=30;
  for(var r = 1024; r > 0; r-- ){
    
  push();
  stroke(colorfondo,opafondo);
  translate(fondo,0);
  line(0,512,512,0);
  pop();
  fondo--;
  colorfondo+=0.21;
  opafondo-=0.05;
    
  }
  

  ////cuadrados base
  var sumaX = 0;
  var sumaY = 0;

  for (var j = 0; j < 4; j++){
  for (var i = 0; i < 4; i ++){
    push();
    translate(6 + sumaX,6 + sumaY );
    strokeWeight(2);
    noFill();
    rect(0,0,120,120);
    pop();
    
    sumaX+=126;  
  }
  sumaX=0;
  sumaY+=126;
  }
  
  /////////////////////
  
  ///correcion para el siguiente cuadros
  sumaX = 0;
  sumaY = 0;
  
  /////fin cuadrados base
  
  
  //cuadrados move
  var intensidad = 0;
  for (var n = 0; n < 4; n++){
  for (var ñ = 0; ñ < 4; ñ++){
    push();
    
    
    translate(66 + sumaX + random(-2,2),66 + sumaY + random(-2,2));
    rotate(random(0,0.02));
    
    strokeWeight(random(0,2));
    
    stroke(random(0,20));
    
    noFill();
    
    rect(-60,-60,120 + random(-2,2),120 +random(-2,2));
    
    
    pop();
    
  
    
  sumaX+=126;  
  }
  sumaX=0;
  sumaY+=126;
  }
  
  ///correcion para el siguiente cuadros
  sumaX = 0;
  sumaY = 0;
  
  ///fin cuadrados move
  
  
  
  //degradé intensidad
  
intensidad = 1;
  for (var q = 0; q < 4; q++){
  for (var w = 0; w < 4; w++){
    
    push();
    
    
    translate(66 + sumaX + random(-2,2) * intensidad,66 + sumaY + random(-2,2)*intensidad);
    rotate(random(-0.2,0.2)*intensidad);
    
    strokeWeight(random(0,2)*intensidad);
    
    stroke(random(0,5)*intensidad);
    
    noFill();
    
    rect(-60,-60,120 + random(-2,2)*intensidad,120 +random(-2,2)*intensidad);
    
    
    pop();
    
    intensidad +=0.5;
  
    
  sumaX+=126;  
  }
  sumaX=0;
    sumaY+=126;
  }
  
  //fin degradé intensidad
  
 


  
  contador++;
}
