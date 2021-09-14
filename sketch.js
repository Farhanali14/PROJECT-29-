const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var base;
var Rwall;
var Lwall;
var bridge;
var jointPoint;
var jointLink;

var stones = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base = new Base(700,height-20,width,30);
  bridge = new Bridge(14,{x: 750,y :height-300});
  Rwall = new Base(width-250,height-300,500,30);
  Lwall = new Base(250,height-300,500,30);

  jointPoint = new Base(750,height-280,500,10);

  Matter.Composite.add(bridge.body,jointPoint);
  jointLink = new Link(bridge,jointPoint)
}

function draw() {

  background(51);
  Engine.update(engine);

  
  base.display();
  fill("brown");
  Rwall.display();
  Lwall.display();

  for(var i = 0; i<= 8; i++)
  {
    var x = random(width/2-200, width/2 + 300);
    var y = random(-10,140);
    var stone = new Stone(x,y,80,80);
    stones.push(stone);
  }

}
