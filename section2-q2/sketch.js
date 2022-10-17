// チェッカー
function setup() {
  createCanvas(200, 200)
  noStroke();

  for(let i=0; i<8; i++){
    for(let j=0; j<8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((i+j)%2==0){
        fill(255);
      }
      else{
        fill(220,220,220);
      }

      rect(i*8,j*8,8,8)

    
    if((i+j)%2==0){
      noFill();
    }

    else{
      if(j<3){
       fill(255,0,0);
      }
      else if(j<5){
       noFill();
      }
      else{
       fill(0,0,0);
      }

    ellipse((i*8)+4,(j*8)+4,7)

    } 
  }
 }
}



  

