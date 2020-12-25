const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var stand1,stand2;
var block18,block19,block20,block21,block22,block23,block24,block25,block26
var polyImg;


function setup() {
  createCanvas(displayWidth,displayHeight);
  
    engine = Engine.create();
    world = engine.world;
  
 // polygon = new Hexagon(500,500,50,50);
 // World.add(world,polygon);

  polygon = new Hexagon(50,500,50);
  stand1 = new Stand(790,515,250,20);
  stand2 = new Stand(1060,415,200,20);

//1st layer
  block1 = new Block1(700,485,30,40);
  block2 = new Block1(730,485,30,40);
  block3 = new Block1(760,485,30,40);
  block4 = new Block1(790,485,30,40);
  block5 = new Block1(820,485,30,40);
  block6 = new Block1(850,485,30,40);
  block7 = new Block1(880,485,30,40);

  //2nd layer
  block8  =  new Block2(730,445,30,40);
  block9  =  new Block2(760,445,30,40);
  block10 =  new Block2(790,445,30,40);
  block11 =  new Block2(820,445,30,40);
  block12 =  new Block2(850,445,30,40);

  //3rd layer
  block13 =  new Block3(760,405,30,40);
  block14 =  new Block3(790,405,30,40);
  block15 =  new Block3(820,405,30,40);
  
  //top
  block16 = new Block4(790,365,30,40);
  
  //slingshot

  //layer 1 - 2
  block18 = new Block1(1000,385,30,40);
  block19= new Block1(1030,385,30,40);
  block20 = new Block1(1060,385,30,40);
  block21= new Block1(1090,385,30,40);
  block22= new Block1(1120,385,30,40);
  
  //layer 2-2
  block23 = new Block2(1030,345,30,40);
  block24 = new Block2(1060,345,30,40);
  block25 = new Block2(1090,345,30,40);
  //layer 2-3
  block26 = new Block3(1060,305,30,40);



  
}

    
function draw() {
  background(0,0,0);  
  
  stand1.display();
  stand2.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  block13.display();
  block14.display();
  block15.display();

  block16.display();

  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  //block27.display();

  polygon.display();
  drawSprites();
}