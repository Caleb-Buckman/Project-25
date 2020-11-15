class Dustbin {
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.thickness=20;
        this.height=100;
        this.dw=200;
this.image = loadImage("dustbingreen.png");

        this.bottomBody=Bodies.rectangle(this.x,this.y,this.dw,this.thickness,{isStatic:true});
        this.leftBody=Bodies.rectangle(this.x-this.dw/2,this.y-50,this.thickness,100,{isStatic:true});
        this.rightBody=Bodies.rectangle(this.x+this.dw/2,this.y-50,this.thickness,100,{isStatic:true});
    
        World.add(world,this.bottomBody);
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);
        
    }

    display(){
        var bbpos=this.bottomBody.position;
        var lbpos=this.leftBody.position;
        var rbpos=this.rightBody.position;
        
        push();
        translate(bbpos.x,bbpos.y);
        rectMode(CENTER);
        fill("white");
        imageMode(CENTER);
        image(this.image,0,-50,this.dw,100);
       // rect(0,0,this.dw,this.thickness);
        pop();

        push();
        translate(lbpos.x,lbpos.y);
        rectMode(CENTER);
        fill("white");
       // rect(0,0,this.thickness,100);
        pop();

        push();
        translate(rbpos.x,rbpos.y);
        rectMode(CENTER);
        fill("white");
      //  rect(0,0,this.thickness,100);
        pop();
    }
}