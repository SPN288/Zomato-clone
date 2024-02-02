import mongoose from "mongoose";

const restaurantSchema = mongoose.Schema({


    name:{type:String,required:true},
    city:{type:String,required:true},
    address:{type:String,required:true},
    mapLocation:{type:String,required:true},
    cusine:[String],
    restaurantsTimings:String,
    contactNumber:Number, 
    website:String,
    popularDishes:[String],
    averageCost:Number,
    amenties:[String],
    menuImages:{type:mongoose.Types.ObjectId,ref:"Images"},
    menu:{type:mongoose.Types.ObjectId,ref:"Menus"},
    reviews:[{types:mongoose.Types.ObjectId,ref:"Reviews"}],
    photos:{type:mongoose.Types.ObjectId,ref:"Iamaes"}
    


},{timestamps:true})

export const RestaurantModel =mongoose.model("Restaurants",restaurantSchema);