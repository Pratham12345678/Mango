class Stone extends BaseClass{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      this.image = loadImage("sprites/wood2.png");
      Matter.Body.setAngle(this.body, angle);
    }
    display(){
      var pos =this.body.position;
      pos.x = 800;
      pos.y = 625;
      this.image = loadImage("sprites/stone.png");
      push();
      translate(pos.x, pos.y);
      pop();
    }
  };