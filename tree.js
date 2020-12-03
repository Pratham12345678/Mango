class Tree extends BaseClass{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      Matter.Body.setAngle(this.body, angle);
    }
    display(){
      var pos =this.body.position;
      pos.x = 800;
      pos.y = 625;
      this.image = loadImage("sprites/tree.png")
      push();
      translate(pos.x, pos.y);
      pop();
    }
  };