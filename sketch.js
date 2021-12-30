const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var rockObj, dinamitaObj,groundObject;
var diamante1,diamante2,diamante3,diamante4,diamante5,diamante6,diamante7,diamante8,diamante9,diamante10,diamante11,diamante12;
var world,minner;

var launcherObject;
var launchForce = 100;

function preload(){
	minner=loadImage("minero.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	dinamitaObj=new Dinamita(235,420,30); 

	diamante1=new Diamante(1100,100,30);
    diamante2=new Diamante(1010,140,30);
    diamante3=new Diamante(1010,140,30);
	diamante4=new Diamante(1000,70,30);
	diamante5=new Diamante(1100,70,30);
	diamante6=new Diamante(1000,230,30);
	diamante7=new Diamante(900,230,25);
	diamante8=new Diamante(1140,150,25);
	diamante9=new Diamante(1100,230,25);
	diamante10=new Diamante(1200,200,25);
	diamante11=new Diamante(1120,50,25);
	diamante12=new Diamante(900,160,25);

	rockObj=new Roca(1050,580);
	groundObject=new Ground(width/2,600,width,20);

  dinamitaObj.display();
  groundObject.display();
  //crea aquí el launcherObject
  launcherObject = new launcher(dinamitaObj.body,{x:260, y:430});

	Engine.run(engine);
 
}

function draw() {

  background(230);
  textSize(25);
  text("-Preciona space para volver a jugar",50 ,90);
  textSize(25);
  text("Ayuda a el minero a conseguir los diamantes:",50 ,50);
  
  image(minner ,100,290,200,300);
  
  

  rockObj.display();
  dinamitaObj.display();
  diamante1.display();
  diamante2.display();
  diamante3.display();
  diamante4.display();
  diamante5.display();
  diamante6.display();
  diamante7.display();
  diamante8.display();
  diamante9.display();
  diamante10.display();
  diamante11.display();
  diamante12.display();
  dinamitaObj.display();

  groundObject.display();

  dinamitaObj.display();
  groundObject.display();
  launcherObject.display();

  // muestra el objeto lanzador aquí
  


  detectollision(dinamitaObj,diamante1);
  detectollision(dinamitaObj,diamante2);
  detectollision(dinamitaObj,diamante3);
  detectollision(dinamitaObj,diamante4);
  detectollision(dinamitaObj,diamante5);
  detectollision(dinamitaObj,diamante6);
  detectollision(dinamitaObj,diamante7);
  detectollision(dinamitaObj,diamante8);
  detectollision(dinamitaObj,diamante9);
  detectollision(dinamitaObj,diamante10);
  detectollision(dinamitaObj,diamante11);
  detectollision(dinamitaObj,diamante12);
}

//crea aquí la función mouseDragged
function mouseDragged(){
  Matter.Body.setPosition(dinamitaObj.body,{x:mouseX, y:mouseY})
}


//crea aquí la función mouseReleased 
function mouseReleased(){
  launcherObject.fly();
}


//crea aquí la función keyPressed 
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(dinamitaObj.body, {x:235, y:420});
    launcherObject.attach(dinamitaObj.body);
  }
}



  function detectollision(ldinamita,ldiamante){
  diamanteBodyPosition=ldiamante.body.position
  dinamitaBodyPosition=ldinamita.body.position
  
  var distance=dist(dinamitaBodyPosition.x, dinamitaBodyPosition.y, diamanteBodyPosition.x, diamanteBodyPosition.y)
  
  	if(distance<=ldiamante.r+ldinamita.r)
    {
  	  Matter.Body.setStatic(ldiamante.body,false);
    }
  }