class Box{
  constructor(x,y,width,height){
   var options={
   resitution:0.5,
   friction:5
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world, this.body);
this.Visibility=255


  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed<5){
      var position = this.body.position
      var angle = this.body.angle
     push()
     translate(position.x,position.y);
     rotate(angle)
     fill(0, 255, 255);
     strokeWeight(5);
     rectMode(CENTER)
     rect(0,0,this.width,this.height);
    pop()
     }
    else{

      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility-5;
      tint(255,this.Visibility)
      pop();
    }

    // push();
    // translate(pos.x, pos.y);
    // rotate(angle);
    // strokeWeight(10);
    // fill(233, 30, 99);
    // rectMode(CENTER);
    // rect(0,0,this.width, this.height);
    // pop();
  }

}