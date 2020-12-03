class Mango extends BaseClass{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      Matter.Body.setAngle(this.body, angle);
      this.image = loadImage("sprites/mango.png");
    }
    display(){
      var pos =this.body.position;
      pos.x = 800;
      pos.y = 625;
      push();
      translate(pos.x, pos.y);
      pop();
    }
  };