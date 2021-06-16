class Start{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        this.image=loadImage("start.png");
    }

    display(){
        var pos=this.body.position
        push ()
        translate (pos.x,pos.y);
        rectMode(CENTER);
        imageMode (CENTER);
        image (this.image,0,0,200,100)
        pop ()
    }
}