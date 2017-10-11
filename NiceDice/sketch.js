
var h = 600;
var w = 400;

var dice = false;
var count = 0;

var num = 1;
var oldNum=1;
var countF = 0;
var diceEnd = false;

function setup() {
  createCanvas(w, h,WEBGL);


}

function draw() {
  background(127);
  //print(mouseX);

  push();
  if(dice){
    countF++;
    rotateX(countF*0.15);
    rotateY(countF*0.15);
    count+= 0.1;

    if(count>12){

      dice = false;
      count = 0;
      countF = 0;
      print(num);
      diceEnd=true;
      oldNum=num;
    }
  }
  //190
  
  //rotateX(0.2);
  //rotateY(5.8);
  
  fill(255);
  


//Face principal
  if(diceEnd){
    push();
    number(num);
    pop();
    diceEnd=false;
  }else{
    push();
    number(oldNum);
    pop();
  }
  

//rotateY(1.5);

 


if(oldNum == 2 || oldNum == 5){

  push();
  rotateY(1.5);
  translate(-3, 0, -42);
  ellipse(0, 0, 15, 15);
  pop();

  push();
  rotateY(1.5);
  translate(3, 0, 42);
  ellipse(20, -25, 15, 15);
  ellipse(-20, 25, 15, 15);
  ellipse(-20, -25, 15, 15);
  ellipse(20, 25, 15, 15);
  ellipse(20, 0, 15, 15);
  ellipse(-20, 0, 15, 15);
  pop();

  push();
  rotateX(1.5);
  translate(0, 0, -39.5);
  ellipse(20, -20, 15, 15);
  translate(0, 0, -5);
  ellipse(-20, 15, 15, 15);
  translate(0, 0, 3);
  ellipse(0, -5, 15, 15);
  pop();

  push();
  rotateX(1.5);
  translate(0, 5, 42);
  ellipse(20, 20, 15, 15);
  ellipse(-20, 20, 15, 15);
  ellipse(20, -20, 15, 15);
  ellipse(-20, -20, 15, 15);
  pop();
 

}else if(oldNum == 3 || oldNum == 4){

  push();
  rotateY(1.5);
  translate(-3, 0, -42);
  ellipse(0, 0, 15, 15);
  pop();

  push();
  rotateY(1.5);
  translate(3, 0, 42);
  ellipse(20, -25, 15, 15);
  ellipse(-20, 25, 15, 15);
  ellipse(-20, -25, 15, 15);
  ellipse(20, 25, 15, 15);
  ellipse(20, 0, 15, 15);
  ellipse(-20, 0, 15, 15);
  pop();

  push();
  rotateX(1.5);
  translate(0, 0, -39.5);
  ellipse(20, -20, 15, 15);
  translate(0, 0, -5);
  ellipse(-20, 15, 15, 15);
  pop();

   push();
  rotateX(1.5);
  translate(0, 5, 42);
  ellipse(0, 0, 15, 15);
  ellipse(20, 20, 15, 15);
  ellipse(-20, 20, 15, 15);
  ellipse(20, -20, 15, 15);
  ellipse(-20, -20, 15, 15);
  pop();

}else{
  push();
  rotateX(1.5);
  translate(0, 0, -39.5);
  ellipse(20, -20, 15, 15);
  translate(0, 0, -5);
  ellipse(-20, 15, 15, 15);
  pop();

   push();
  rotateX(1.5);
  translate(0, 5, 42);
  ellipse(0, 0, 15, 15);
  ellipse(20, 20, 15, 15);
  ellipse(-20, 20, 15, 15);
  ellipse(20, -20, 15, 15);
  ellipse(-20, -20, 15, 15);
  pop();

// 3 e 4 no Y
 push();
  rotateY(1.5);
  translate(0, 0, -42);
  ellipse(20, -20, 15, 15);
  translate(0, 0, 1);
  ellipse(0, 0, 15, 15);
  translate(0, 0, 2);
  ellipse(-20, 20, 15, 15);
  
  
  pop();

  push();
  rotateY(1.5);
  translate(0, 0, 42);
  ellipse(20, 20, 15, 15);
  ellipse(-20, 20, 15, 15);
  ellipse(20, -20, 15, 15);
  ellipse(-20, -20, 15, 15);
  pop();


}


  

  pointLight(255,80,80,200,50);
 
  box(80);
  
  pop();

        
        

  
}


function mouseReleased() {
  dice = true;
  num = round(random(1,6));

  
}






function number(n){
  switch(n){
        case 1:
        translate(0, 0, 42);
        ellipse(0, 0, 15, 15);
    break;
        case 2:
        translate(20, -20, 42);
        ellipse(0, 0, 15, 15);
        translate(-40, 40, 0);
        ellipse(0, 0, 15, 15);;
    break;
        case 3:
        translate(0, 0, 42);
        ellipse(0, 0, 15, 15);
        ellipse(20, -20, 15, 15);
        ellipse(-20, 20, 15, 15);
    break;
        case 4:
        translate(0, 0, 42);
        ellipse(20, -20, 15, 15);
        ellipse(-20, 20, 15, 15);
        ellipse(-20, -20, 15, 15);
        ellipse(20, 20, 15, 15);
        
    break;
        case 5:
        translate(0, 0, 42);
        ellipse(0, 0, 15, 15);
        ellipse(20, -20, 15, 15);
        ellipse(-20, 20, 15, 15);
        ellipse(-20, -20, 15, 15);
        ellipse(20, 20, 15, 15);
        
    break;
        case 6:
        translate(0, 0, 42);
        
        ellipse(20, -25, 15, 15);
        ellipse(-20, 25, 15, 15);
        ellipse(-20, -25, 15, 15);
        ellipse(20, 25, 15, 15);
        ellipse(20, 0, 15, 15);
        ellipse(-20, 0, 15, 15);
    break;
  }
}