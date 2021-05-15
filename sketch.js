//clock

var Hour,Minute,Second;
var angSec,angHr,angMin;

function setup() {
  createCanvas(500,500);

  //angles
  angleMode(DEGREES);

}

function draw() {
  background("black");  
  translate (200,200);
  rotate(-90);

  angSec=map(Second,0,60,0,360);
  angHr=map(Hour%12,0,12,0,360);
  angMin=map(Minute,0,60,0,360);

  //time
  Hour=hour();
  Minute=minute();
  Second=second();

//Hands
//drawing seconds hand 
push(); 
rotate(angSec); 
//rotate the hand based on angle calculated
stroke(255,0,0); 
strokeWeight(7); 
line(0,0,100,0);
pop() ;

 //drawing the arcs 
 strokeWeight(10); 
 noFill(); 
 //Seconds 
 stroke(255,0,0); 
 arc(0,0,300,300,0,angSec); 
 

//drawing minute hand 
push(); 
rotate(angMin); 
//rotate the hand based on angle calculated
stroke("blue"); 
strokeWeight(7); 
line(0,0,75,0);
pop() ;

 //drawing the arcs 
 strokeWeight(10); 
 noFill(); 
 //minute 
 stroke("blue"); 
 arc(0,0,280,280,0,angMin); 
 
//drawing seconds hand 
push(); 
rotate(angHr); 
//rotate the hand based on angle calculated
stroke("yellow"); 
strokeWeight(7); 
line(0,0,50,0);
pop() ;

 //drawing the arcs 
 strokeWeight(10); 
 noFill(); 
 //Seconds 
 stroke("yellow"); 
 arc(0,0,260,260,0,angHr); 
 
  drawSprites();
}