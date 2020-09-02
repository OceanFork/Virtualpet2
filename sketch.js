//Create variables here
var dog, HappyDog,foodS;
var foodStock;
var database;
var milkimg;
var milk;
function preload()
{
  //load images here
  milkimg = loadImage("images/Milk.png")
  dogImg = loadImage("images/dogImg.png")
  dogImg1 = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.1;
  database = firebase.database();
  foodStock=database.ref('Food');
foodStock.on("value",readStock);

}

 function draw() {  
background(46,136,87);
  textSize(20);
  fill("white");
  text("Press up arrow to feed me.", 180, 50);
  text("Press down arrow to add food to stock.", 135, 100);
  text("Food left: " + foodS, 250,150);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
      dog.addImage(dogImg1);
    milk = createSprite(200,300,10,10);
    milk.addImage(milkimg);
    milk.scale = 0.1;

  }
  if(keyWentUp(UP_ARROW)){
      dog.addImage(dogImg);
    milk.destroy();
  }
  if(keyWentDown(DOWN_ARROW)){
    write(foodS);
   

  }
  drawSprites();
}
  //add styles here
function readStock(data){
foodS = data.val();


}
function writeStock(x){
  if(x<1){
    x=0;
  }else{
    x=x-1;
  }
foodStock = database.ref('/').update({

Food:x
})



}
function write(y){
  if(y>19){
    y=20;
  }else{
    y=y+5;
  }
  foodStock = database.ref('/').update({

    Food:y
    })



}