class Food{
    constructor(){
var foodStock, lastFed;


        this.image = loadImage("Milk.png");


    }

    getFoodStock(){
        foodStock = database.ref('Food');
        foodStock.on('value', function(data){
        foodS = data.val();

        })

    }
    updateFoodStock(x){
       // if(x<=0){
         //   x = 0;
        //  }else(x = x-1);
        database.ref('/').update({
            Food: x
        });
        }

    deductFood(){
        
            updateFoodStock(foodS);
            //foodS = foodS-1;
          
          
          
    }
    normal(){
       var norm  = createSprite(400, 400,800, 800);
       norm.shapeColor= (46, 139, 87);
       dog.overlap(norm)
       
    }

    bedroom(){

        background(bedroomImg);

    }

    garden(){
        var garden = createSprite(400, 400, 800, 800);
        garden.addImage(gardenImg);


    }

    bathroom(){
background(bathroomImg);
    }

    display(){
        var x = 80, y = 100;
     
            imageMode(CENTER);
            image(this.image, 720, 220, 70, 70);


            if(this.foodStock!=0){
                for(var i = 0; i<this.foodStock;i++){
                    if(i%10===0){
                    x = 80;
                    y = y+50;
                }
              image(this.image, x, y, 50, 50);
              x = x+30;
            }

         
    }
    
    }
}