// 13州独立後のアメリカ国旗
function setup() {
  const blue = color(10, 50, 130);
  createCanvas(300, 180);
  noStroke();
  background(255);

  let d = height / 13; // 縞1本の太さ

  for(let i = 0; i < 13; i++){
    if(i % 2 == 0){
      fill(220, 10, 10);
    }
    else if(i % 2 == 1){
      fill(255);
    }
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    rect(0, i * d, width, (i + 1) * d);
  }

  fill(blue);
  let size = d * 7;
  rect(0, 0, size, size);

  for(let i = 0; i < 13; i++){
    const theta = TWO_PI * i / 13; // TWO_PI は円周率πの2倍（ほかに PI, HALF_PI, QUARTER_PI　がある）
    const x = 50 + cos(theta) * 30; // 関数 cos の戻り値を使用
    const y = 50 + sin(theta) * 30; // 関数 sin の戻り値を使用
    star(x, y, 4); // 関数 ellipse の副作用で円が描画される
  }
}

function star(cx, cy, r){
  fill(255)
  stroke(255)
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる

  
  

  
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
}
