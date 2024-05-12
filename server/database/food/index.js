import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
    name:{type:String,require:true},
    descript:{type:String,require:true},
    isveg:{type:Boolean,require:true},
    isContainEgg:{type:Boolean,require:true},
    category:{type:String,require:true},
    photos:{
        type:mongoose.Types.ObjectId,
        ref:"Images"
    },
    price:{type:Number,require:true,default:150},
    addOns:{type:mongoose.Types.ObjectId,
    ref:"Foods"},
    restaurants:{
        type:mongoose.Types.ObjectId,
        ref:"Restaurants"
    }
},{timestamps:true})

export const FoodModel =mongoose.model("Foods",FoodSchema);