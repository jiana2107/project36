class Food{

    constructor(){
        this.foodStock=null;
        this.addFood=createButton('ADD FOOD')
    }

    display(){
      var x=80,y=100;
      this.addFood.position(200,150)

      imageMode(CENTER)
      

      if(this.foodStock!=0){
          for(var i=0;i<this.foodStock;i++){
              if(i%10==0){
                  x=80;
                  y=y+50;
              }
            image(milkI,x,y,50,50)
            x=x+20;
          }
      }

      this.addFood.mousePressed(()=>{
        foodObj.updateFoodStock(x)
      })
    }

     getFoodStock(){
      database.ref('food').on("value",(data)=>{
        this.foodStock=data.val()
      })
     
    }
    
  updateFoodStock(x){  
      if(x>0){
        x=20
      }
      database.ref('/').update({
        food:x})
    }

 /*updateFood(food){
    if(foodObj.foodStock<1){
      var f1=database.ref('food').set({
        food:20
      })
    }
  }*/
    
   /*deductFood(x){
    if(x>=0){
      x=10
    }
    database.ref('/').update({
      food:x})
  }*/
  
   }
