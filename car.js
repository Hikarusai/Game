const onDegree=Math.PI/180;

var car= function(game){
    this.game=game;

    this.x=300;
    this.y=300;

    this.img=null;
    this.loaded=false;

    this.degree=0;//góc quay của xe
    this.speed=3;

    var self=this;


    this.init=function () {
        this.img= new Image();
        this.img.onload=function(){
            self.loaded=true;
        }
        this.img.src='car.png';
    }

    this.update=function(){

        if(this.game.upKeyIsPressed || this.game.downKeyIsPressed){
            if(this.game.leftKeyIsPressed){
                this.degree-=onDegree;
            }
            else if(this.game.rightKeyIsPressed){
                this.degree+=onDegree;
            }
        }
    
        if(this.game.upKeyIsPressed){
            self.goForward();
        }
        else if(this.game.downKeyIsPressed){
            self.goBackward();
        }

        this.goForward=function(){
            var speedX=this.speed*Math.cos(this.degree);
            var speedY=this.speed*Math.sin(this.degree);
            this.x+=speedX;
            this.y+=speedY;
        }

        this.goBackward=function(){
            var speedX=this.speed*Math.cos(this.degree);
            var speedY=this.speed*Math.sin(this.degree);
            this.x-=speedX;
            this.y-=speedY;
        }
     
   
    }
    this.draw=function(){
       if(this.loaded){

        this.game.context.save();
        this.game.context.translate(this.x+50,this.y+24);
        this.game.context.rotate(this.degree);

        this.game.context.drawImage(this.img,-50,-24);

        this.game.context.restore();
          
       }
    }
}