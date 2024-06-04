let cor;
let circuloX; // posiçao horizontal
let circuloY; // posiçao vertical

let x2; // posiçao horizontal
let y1; // posiçao vertical

function setup() {
  
  createCanvas(400, 400);
  
  background(color(230, 0, 0));
  
  cor=color(random(0, 255), random(0, 255), random(0, 255))
  
  circuloX = [0, 0, 0];
  
  circuloY = [random(height), random(height), random(height)];
  
}

function draw() {
  
  fill(cor)
  
  //console.log(circuloX.length);
  for(let contador in circuloX) {
    console.log(contador);
    
    circle(circuloX[contador], circuloY[contador], 50);
    circuloX[contador]+= random(0, 3);
    circuloY[contador]+= random(-3, 3);
    
    if(circuloX[contador] >= width) {
      
      circuloX[contador] = 0;
      circuloY[contador] = random(heigth);
    }
    
  }
  
  
     cor=color(random(0, 255), random(0, 255), random(0, 255), random(0, 100))
  
}