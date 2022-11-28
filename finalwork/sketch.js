// 最終課題を制作しよう




function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


let first = [];
let second = [];
let third = [];
let turn=0;
let number1;
let number2;
let number3;
let hit;


 
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0;i<10;i++){
     first[i]=i;
     second[i]=i;
     third[i]=i;
  }
}

function draw(){
  background(160, 192, 255);

  fill(250, 170, 200);
  rect(50,30,500,350);


  stroke(255);
  fill(255);
  textSize(20);
  text("スロット",260,70);
  text("1,2,3を順に押してください",180,250);
  text("spaceキーでスタート・リセット",170,290);

  noFill();
  rect(100,100,100,100);
  rect(250,100,100,100);
  rect(400,100,100,100);

  textSize(60);
  fill(255);

   if(key == " "){
    text(first[turn],130,170);
    text(second[turn],280,170);
    text(third[turn],430,170);
  }
  
   if(key=="1"){
    text(first[number1],130,170);
    text(second[turn],280,170);
    text(third[turn],430,170);
  }

  if(key=="2"){
    text(first[number1],130,170);
    text(second[number2],280,170);
    text(third[turn],430,170);
  }
  
  if(key=="3"){
    text(first[number1],130,170);
    text(second[number2],280,170);
    text(third[number3],430,170);
  } 
 
  turn=turn+1;
  if(turn==10){
     turn=0;
  } 

  if(hit==1, 2,3){
    result();
  }
}


function result(){
  if(hit==1){
    textSize(40);
     text("大当たり！",240,350);
  }
  if(hit==2){
    textSize(40);
     text("当たり！",240,350);
  } 	
  if(hit==3){
    textSize(40);
     text("はずれ！",240,350);
  }
}


function judge(){
  if(number1 == number2 && number2 == number3 ){
    if(number3==7){
      hit=1;
    }
    else{
     hit=2; 
    }
  }
  else{
    hit=3;
  }
}



function keyPressed(){
  if(key == " "){ 
     number1=turn;
      number2=turn;
      number3=turn;
  }
  if(key=="1"){
    number1=turn;
 }
 if(key=="2"){
    number2=turn;
 }
 if(key=="3"){
    number3=turn;
    judge();
 } 
}






