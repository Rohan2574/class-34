class Ball{
    constructor(x, y, r) {
        var options = {
            restitution :0.4,
            friction :0.5,
            density :1.2
            
        }
        this.body = Bodies.circle(x, y,r, options);
        this.r = r;
        World.add(world, this.body);
        
        
      }
      display(){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          ellipseMode(CENTER);
          fill("grey");
          ellipse( 0, 0, this.r*2, this.r*2);
          pop(); 
      }
  }