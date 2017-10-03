function setup() {
 createCanvas(800,600);
}

function draw() {

 //Neck

 stroke(136,132,137);
 strokeWeight(2); 
   line(300,200,300,380);
   line(310,200,310,380);
   line(320,200,320,380);


 //Antennas

 stroke(136,132,137);
 strokeWeight(2); 

 line(280,150,300,180);

 line(350,215,370,220);

 line(350,100,315,180);

 //Body

 noStroke();

 fill(136,132,137);
 ellipse(290,430,70,70);

 fill(0,0,0);
 rect(240,280,100,150);

 fill(136,132,137);
 rect(240,300,100,7);


 //Head

 noStroke();

 fill(0,0,0);
 ellipse(310,200,90,90)

 fill(255,255,255);
 ellipse(325,197,30,30);

 fill(0,0,0);
 ellipse(325,197,7,7);

 fill(190,190,191);
 ellipse(300,197,10,10);

 fill(190,190,191);
 ellipse(343,210,5,5);

 fill(190,190,191);
 ellipse(328,175,8,8);


// secondo robot
stroke(136,132,137);
strokeWeight(2); 
line(500,270,490,380);
stroke(0,0,0);
line(480,290,487,380);

noStroke();

fill(190,190,191);
ellipse(490,340,70,70);


noStroke();
 fill(255,255,255);
 rect(440,350,100,70);

fill(190,190,191);
 ellipse(490,400,120,120);

stroke(0,0,0);
strokeWeight(2); 
line(458,350,522,350);

fill(0,0,0);
 ellipse(505,337,10,10);

fill(190,190,191);
 ellipse(505,337,7,7);

fill(0,0,0);
 ellipse(480,330,16,16);
fill(190,190,191);
 ellipse(480,330,12,12);




}