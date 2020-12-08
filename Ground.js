class Ground {
	constructor(x, y, width, height) {
		var options1 = {
			isStatic : true
		}

		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;

		this.body = Bodies.rectangle(x, y, width, height, options1);
		World.add(world, this.body);
	}
	display() {
		var pos1 = this.body.position;
		rectMode(CENTER);
		fill("yellow");
		rect(pos1.x, pos1.y, this.width, this.height);
	}
}