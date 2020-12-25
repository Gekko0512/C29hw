class Hexagon{
  constructor(x,y,r){
      var options = {
          'friction' : 1.0,
          'density' : 1.0,
          'restitution' : 2.0
      }
      this.x = x;
      this.y = y;
      this.r = r;
  }
  display(){
      fill(0,250,23);
      circle(this.x , this.y, this.r);
  }
}
  