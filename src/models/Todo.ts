import { model, models, Schema } from "mongoose";


const List=new Schema({
    title:{
        type:String,required: true 
    },
    desc:{
        type:String,required: true 
    },
    isCompleted:{
        type:Boolean,required: true ,default:false
    },
    
    
},{timestamps:true});



const Todo=models.Todo || model("Todo",List)

export default Todo;