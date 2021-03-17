var pitch,pitchImage
var batsmen,batsmen1Image
var bowler,bowlerImage
var batsmen2,batsmen2Image
var ballGroup

function preload(){

pitchImage = loadAnimation("pitch.jpg")
batsmen1Image = loadAnimation("batsmen.png")
bowlerImage = loadAnimation("bowler.png")
batsmen2Image= loadAnimation("batsmen 2.png")
ballGroup= new Group()
batsmenHit= loadAnimation("batsmenHit.png")
ballImage= loadImage("ball.png")
ballCatch= loadAnimation("celebration.png")
wicketKeeperImage= loadAnimation("Wicket Keeper.png")
wicket=loadAnimation("Wicket Stump hit.png")

}

function setup() {
  createCanvas(displayWidth+100,displayHeight+100);
  pitch = createSprite(800,50,displayWidth,displayHeight);
  pitch.addAnimation("pitch",pitchImage)
  pitch.scale=8

  batsmen = createSprite(800,550);
  batsmen.addAnimation("bat1",batsmen1Image)
  batsmen.scale= 1.3
  batsmen.debug=true
  batsmen.setCollider("rectangle",0,0,70,70)

  batsmen2 = createSprite(712,250,20,40)
  batsmen2.addAnimation("bat2",batsmen2Image)
  batsmen2.scale=0.2

  bowler = createSprite(831,247,20,40)
  bowler.addAnimation("bowl",bowlerImage)
  bowler.scale=0.2
    batsmen.addAnimation("hit",batsmenHit)
    
   fielder1= createSprite(350,390)
   fielder2= createSprite(1087,440)
//   fielder1.addAnimation("catch",ballCatch)
// fielder2.addAnimation("catch",ballCatch)

wicketKeeper= createSprite(709,848)
wicketKeeper.addAnimation("wicket",wicketKeeperImage)
wicketKeeper.addAnimation("stump",wicket)
}

function draw() {
  background(255,255,255);  
 
  // to bowl 
if(keyWentDown("space")){
ball()
}

// batsman to bat
if(keyWentDown("a"))
{
  batsmen.changeAnimation("hit",batsmenHit)
}


if(keyWentUp("a"))
{
  batsmen.changeAnimation("bat1",batsmen1Image)
}

   drawSprites();
   textSize(50)
   text(mouseX+ " " +mouseY,mouseX,mouseY)

  if(ballGroup.isTouching(batsmen)){
  var r=Math.round(random(-8,8))

  
  ballGroup.setVelocityYEach(r)
  var rand=Math.round(random(-10,5))
  ballGroup.setVelocityXEach(rand)
  }
  if(ballGroup.velocityX>0)
  {
    ballGroup.destroyEach()
    }


    //fielder
   if(ballGroup.isTouching(fielder1)||ballGroup.isTouching(fielder2)){
   
         if(ballGroup.isTouching(fielder1))
         {
                fielder1.addAnimation("catch",ballCatch)
        }
         if(ballGroup.isTouching(fielder2))
         {
            fielder2.addAnimation("catch",ballcatch)
          }
   }


   // wicket keeper

   if(ballGroup.isTouching(wicketKeeper))
   {
    wicketKeeper.changeAnimation("stump",wicket)
   }



}

function ball(){

bowl = createSprite(bowler.x,bowler.y,20,20)
bowl.addImage(ballImage)
bowl.scale=0.05
var rand= Math.round(random(10,15))
bowl.visible=true
bowl.velocityY=rand
ballGroup.add(bowl)
bowl.debug=true





}
