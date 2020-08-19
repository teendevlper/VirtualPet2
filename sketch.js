var dogIMG, dogIMG2, dog, foodS, foodStock, dataBase, Exercise;
var lastFed,fedTime,foodObj;
var foodObj;
var feed,addfood;

function preload() {
  dogIMG = loadImage("images/dogImg.png");
  dogIMG2 = loadImage("images/dogImg1.png");

  //db = firebase.database().ref();
}

function setup() {
  createCanvas(1000, 500);
  database = firebase.database();
  dog = createSprite(120, 250, 10, 10);
  dog.addImage(dogIMG);
  dog.scale = .2;

  foodObj = new Food(200,200);

  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
  
feed = createButton("Feed");
feed.position(100,350);
feed.mousePressed(feedDog);

addfood = createButton("Add Food");
addfood.position(100,380);
addfood.mousePressed(addFood);


}


function draw() {
  background(46, 139, 87);
  
  drawSprites();

  fedTime = database.ref("FeedTime");
  fedTime.on("value",function(data){
    lastFed = data.val();
  });
 var color1 = random(0,255);
 var color2 = random(0,255);
 var color3 = random(0,255);
 


 fill(color1,color2,color3);
 textSize(50)
 
 
 text("Virtual Pet v2", 350,50);
 text("___________", 350,60);

textSize(20);
  fill('white');
  

  var hour = getTime();



  fill(255,255,254);
  textSize(25);

  
 if(lastFed >= 12){
  text("Last fed : " + lastFed%12 + " PM", 800,490);
}else if(lastFed == 0){
  text("Last Fed : 12 AM",800,490);
}else{
  text("Last Fed : " + lastFed + " AM", 800,490);
}
  console.log(foodS);
  
  text("food Avalible: " + foodS, 5, 490);
  //Exercise = datBase.ref("Exercise");
 
  foodObj.display();
  console.log(lastFed);
}

function readStock(data) {
  foodS = data.val();
}


async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var jsondat = await response.json();

  var dayTime = jsondat.datetime;
  var hour = dayTime.slice(11,13);
  console.log(hour);
 return hour;
}



function writeStock2(x) {
      x = x + 1
  
  firebase.database().ref('/').update({
     Food: x
  })

}

function feedDog() {
  firebase.database().ref('/').update({

    FeedTime : hour()
  });

  foodObj.decFood(foodS);
  dog.addImage(dogIMG2);
}
function addFood(){
  foodS++

  database.ref('/').update({
    Food : foodS
  })
  dog.addImage(dogIMG);
}









