import mongoose from "mongoose";

const ReviewsSchema = new mongoose.Schema({
    food:{type:mongoose.Types.ObjectId,ref:"Foods"},
    restaurants:{type:mongoose.Types.ObjectId,ref:"Restaurants"},
    user:{type:mongoose.Types.ObjectId,ref:"Users"},
    rating:{type:Number,required:true},
    reviewText:{type:String,required:true},
    photos:[{
        type:mongoose.Types.ObjectId,
        ref:"Images"
    }]
    
    
},{timestamps:true})

export const ReviewModel =mongoose.model("Review",ReviewsSchema);