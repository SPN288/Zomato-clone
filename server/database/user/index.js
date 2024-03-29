import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String},
    address:[{details:{type:String},for:{type:String}}],
    phonenumer:{type:Number},
},{timestamps:true})

export const UserModel =mongoose.model("users",UserSchema);