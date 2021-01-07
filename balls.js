class Ball {
  constructor(x, y,raidus) {
    var options = {
      'isStatic': true,
      'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    
    this.y = y;
    this.x = x;
    this.raidus = raidus;
    this.body = Bodies.circle(this.x, this.y, (this.raidus)/2, options);
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    
    push();
    translate(pos.x, pos.y);
   
    rectMode(CENTER);
    strokeWeight(9);
    stroke("blue")
    fill(255);
   ellipse(0, 0, this.width, this.height);
    pop();
  }
};
