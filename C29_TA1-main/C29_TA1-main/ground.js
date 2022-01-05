class Ground {
    constructor(X,Y,W,H) {
        var options = {
            isStatic: true
        }
        
        this.body = Bodies.rectangle(X,Y,W,H,options);
        World.add(world, this.body);

        this.w = W;
        this.h = H;
    }

    display() {
        var pos = this.body.position
        push();
        rectMode(CENTER);
        noStroke();
        fill(148,127,146);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
    
}
