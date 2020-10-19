class dustbin{
    constructor(x, y)
    {
       /* this.x = x;
        this.y = y;
        this.dustbinwidth=200;
        this.dustbinheight=100;
        this.wallthickness=20;
        this.angle=0;

      this.dustbinbottom=Bodies.rectangle(this.x, this.y, this.dustbinwidth, this.wallthickness, {isStatic:true});

      this.dustbinleftwall=Bodies.rectangle(this.x-this.dustbinwidth/2, this.y-this.dustbinheight/2, this.wallthickness, this.dustbinheight,{isStatic:true});
      Matter.Body.setangle(this.dustbinleftwall, this.angle);

      this.dustbinrightwall=Bodies.rectangle(this.x+this.dustbinwidth/2, this.y-this.dustbinheight/2, this.wallthickness, this.dustbinheight,{isStatic:true});
      Matter.Body.setangle(this.dustbinrightwall, -1*this.angle);



        World.add(world, this.dustbinbottom);
        World.add(world, this.dustbinleftwall);
        World.add(world, this.dustbinrightwall); */

        this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=150;
		this.wallThickness=20;
    //this.angle=0;	
    this.image=loadImage("Sprites/dustbingreen.png");
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
	
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
        
    }   
       
        display(){
         /*  var posBottom = this.dustbinbottom.position;
           var posLeft = this.dustbinleftwall.position;
           var posRight= this.dustbinrightwall.position;


           push();
           translate(posLeft.x,posLeft.y);
          rectMode(CENTER);
           //strokeWeight(3);
           angleMode(RADIANS);
           fill(255);
           stroke(255);
           rotate(this.angle)
           rect(0,0,this.wallthickness,this.dustbinheight);
           pop();
       
           
           push();
           translate(posRight.x,posRight.y);
          rectMode(CENTER);
           //strokeWeight(3);
           stroke(255);
           angleMode(RADIANS);
           fill(255);
           rotate(-1*this.angle)
           
           rect(0,0,this.wallthickness,this.dustbinheight);
           pop();

        

           push();
           translate(posBottom.x,posBottom.y);
          rectMode(CENTER);
           //strokeWeight(3);
           stroke(255);
           angleMode(RADIANS);
          // rotate(this.angle)
           fill(255);
           rect(0,0,this.this.dustbinwidth,this.this,this.wallthickness);
           pop(); */

           var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x+100, posLeft.y+160);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
     rect(0,0,this.wallThickness, this.dustbinHeight );
      //image(this.image, 0,0,this.wallThickness,this.dustbinHeight);
			pop()

			push()
			translate(posRight.x+100, posRight.y+160);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
      rect(0,0,this.wallThickness, this.dustbinHeight);
      //image(this.image, 0,0,this.wallThickness,this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x+110, posBottom.y+150);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
      rect(0,0,this.dustbinWidth, this.wallThickness);
     // image(this.image, 0,0,this.dustbinwidth,this.wallThickness);
      
      pop()
      
      image(this.image, this.x, this.y ,this.dustbinWidth,this.dustbinHeight);

       }
    
}