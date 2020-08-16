class Food{
    constructor(x,y, foodStock, lastfed){
        this.image = loadImage("images/Milk.png");
       

    }

    display(){
        var x = 450;
        var y = 200;

       
       if(foodS != 0){
        for (var i = 1; i <= foodS; i++){


        
    
        
        image(this.image, x,y, 100,100);
        x = x + 40;
       
        if (i%10==0){
            y = y + 80;
            x = 450;
        }
}
       
       }
    }

getFoodStock (){

    foodStock = firebase.database().ref("Food");
}

updateFoodStock(x){
       
    if (x >= 20) {
        x = 20;
      }
      else {
        x = x + 1;
      }
    firebase.database().ref('/').update({
        Food: x
      });

}

decFood(x){
    
    if (x <= 0) {
        x = 0;
      }
      else {
        x = x - 1;
      }
    firebase.database().ref('/').update({
      Food: x
    }); 
}


}