class Roca
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.rockWidth=450;
		this.rockHeight=600;
		this.rockThickness=10;
		
		this.image=loadImage("roca.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.rockWidth, this.rockThickness, {isStatic:true})
		World.add(world, this.bottomBody)

	}
	
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.rockHeight/2,this.rockWidth, this.rockHeight)
			pop()
			
	}

}
