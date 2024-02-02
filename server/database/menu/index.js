import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
    menus:[
        {
            name:{type:String,require:true},
            items:{type:mongoose.Types.ObjectId,
                ref:"Foods"}
        }
    ],
    recommnended:[{
        type:mongoose.Types.ObjectId,
        ref:"Foods",
        unique:true,
    }]
},{timestamps:true})

export const MenuModel =mongoose.model("Menus",MenuSchema);