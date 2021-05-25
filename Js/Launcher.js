class Launcher{
	constructor(bodyA, bodyB){
		var options = {
			bodyA:pointA,
			bodyB:pointB,
			stiffnes:0.02,
			length:5

			}
		this.launcher= Constraint.create(options);
		world.add(world.this.launcher)
	}
    fly(){
		this.launcher.bodyA = null;
	}

	display()
	{	
		var pointA = this.launcher.bodyA.position;
		var pointB = this.launcher.bodyB.position;
		strokeWeight(4);
		Line(pointA.x, pointA.y, pointB.x, pointB.y);
 }
}