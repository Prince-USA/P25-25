class Dustbin {
    constructor(x, y) {
        this.width = 200
        this.height = 100
        this.thickness = 200

        this.angle = 0

        this.x = x
        this.y = y

        this.image = loadImage("dustbingreen.png");

        this.bottombody = Bodies.rectangle(this.x, this.y, this.width, this.thickness, { isStatic: true })
        this.leftbody = Bodies.rectangle(this.x - this.width/2, this.y - this.height/2, this.thickness, this.height, { isStatic: true })
        this.rightbody = Bodies.rectangle(this.x + this.width / 2, this.y - this.height / 2, this.thickness, this.height, { isStatic: true })

        Matter.Body.setAngle(this.leftbody, this.angle)
        Matter.Body.setAngle(this.rightbody, -1 * this.angle)

        World.add(world, this.bottombody);
        World.add(world, this.rightbody);
        World.add(world, this.leftbody);
    }
    display() {
     var posbot = this.bottombody.position
     var poslef = this.leftbody.position
     var posrig = this.rightbody.position

     push();
     translate(posbot.x, posbot.y);
     rotate(this.angle);
     rectMode(CENTER);
     fill("red");
     stroke("red")
     strokeWeight(4)
     //rect(0, 0, this.width,this.thickness);
     pop();

     push();
     translate(poslef.x, poslef.y);
     rotate(this.angle);
     rectMode(CENTER);
     fill("red");
     stroke("red")
     strokeWeight(4)
     //rect(0, 0, this.thickness, this.height);
     pop();

     push();
     translate(posrig.x, posrig.y);
     rotate(this.angle);
     rectMode(CENTER);
     fill("red");
     stroke("red")
     strokeWeight(4)
     //rect(0, 0, this.thickness, this.height);
     image(this.image,50,this.height-150,this.width,this.thickness)
     pop();
     

    }
};