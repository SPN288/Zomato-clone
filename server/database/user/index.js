import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String},
    address:[{details:{type:String},for:{type:String}}],
    phonenumer:{type:Number},
},{timestamps:true})


UserSchema.statics.findEmailandPhone = async (email,phoneNumber)=>{
    const checkUserByEmail = await UserModel.findOne({ email });
        const checkUserByPhone = await UserModel.findOne({ phoneNumber });

        if (checkUserByEmail || checkUserByPhone) {
            throw new Error("user already exists" );
        }
        return false;
};


export const UserModel =mongoose.model("users",UserSchema);