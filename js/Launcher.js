class Launcher{
     constructor(bodyA,pointB){
        var options = {

        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.01,
        length: 10
        
        }

        this.pointB = pointB
        this.Launcher = Constraint.create(options);
        World.add(world, this.Launcher);
    }
    
    attach(body){
      this.Launcher.bodyA = body;
  }

    fly(){
        this.Launcher.bodyA = null;
    }

    Launch(bodyA){

      this.Launcher.bodyA = bodyA;

    }

    display(){

      if(this.Launcher.bodyA){
        var pointA = this.Launcher.bodyA.position;
        var pointB = this.Launcher.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        console.log(this.Launcher.bodyA);
    }

   }