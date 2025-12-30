import { model, models, Schema } from "mongoose";


const User=new Schema({
    Username:{
        type:String,require:true
    },
    Password:{
        type:String,require:true
    },
    lists: [
      {
        type: Schema.Types.ObjectId,
        ref: "Todo", // reference to another model
      }
    ],
    
    
},{timestamps:true});



const Users=models.Todo || model("Todo",User)