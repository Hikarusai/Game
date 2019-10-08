var game= function(){
  this.canvas=null;
  this.context=null;

  this.width=1300;
  this.height=700;

  this.car=null;

  this.leftKeyIsPressed=false;
  this.rightKeyIsPressed=false;
  this.upKeyIsPressed=false;
  this.downKeyIsPressed=false;

  var self= this;
  
  this.init=function(){
    this.canvas=document.createElement('canvas');
    this.canvas.width=this.width;
    this.canvas.height=this.height;

    this.context=this.canvas.getContext('2d');

    document.body.appendChild(this.canvas);

    this.car=new car(this);
    this.car.init();
    this.loop();
   //lắng nghe lệnh từ phím
    this.listenKey();
  }
   
  this.listenKey=function(){
      document.addEventListener('keydown',function(event){
          if(event.keyCode==37){
              self.leftKeyIsPressed=true;
          }
        else  if(event.keyCode==38){
            self.upKeyIsPressed=true;
        }
        else  if(event.keyCode==39){
            self.rightKeyIsPressed=true;
        }
        else  if(event.keyCode==40){
            self.downKeyIsPressed=true;
        }
      });
      document.addEventListener('keyup',function(event){
        if(event.keyCode==37){
            self.leftKeyIsPressed=false;
        }
      else  if(event.keyCode==38){
          self.upKeyIsPressed=false;
      }
      else  if(event.keyCode==39){
          self.rightKeyIsPressed=false;
      }
      else  if(event.keyCode==40){
          self.downKeyIsPressed=false;
      }
    });
  }

  this.loop=function(){
     console.log('update file');
      self.update();
      self.draw();
      setTimeout(self.loop,20);
  }
  this.update=function () {
      this.car.update();
   
  }
    this.draw=function(){
      this.clearScreen();
     this.car.draw();
  }
  this.clearScreen=function(){
      this.context.fillStyle= '#ffffff';
      this.context.fillRect=(0,0,this.width,this.height);
  }

}

var g= new game();
g.init();