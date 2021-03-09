class Pendulum{
    constructor(x,y,width,height,angle){
        var options = {
            density:5,
            frictionAir:0.000
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        fill("black")
        stroke("white")
        strokeWeight(1)
        rotate(angle);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}