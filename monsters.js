class monsters{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
           
        
       this.body=Bodies.rectangle(x,y,width,height,options)
       this.width=width;
       this.height=height;
       World.add(world,this.body);
       this.image=loadImage("monster.png")
    }

   display(){
       var pos = this.body.position
       push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0,0,300, 300)
       pop()
   }

}