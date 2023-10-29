import { Schema,model } from "mongoose";

const userSchema = new Schema({
    name : {
        type : String,
        default : "-"
    },
    email : {
        type : String,
        unique:true,
        required : true
    },
    password : {
        type : Number,
        required : true
    },
    address : {
        type : String,

    },
    mobile : {
        type : String,
        unique:true,
        required:true
    },
    gender : {
        type : String,
        default : "Prefer not to say"
    }
},
{
    timestamps:true
})

const User = model("User" , userSchema)

export default User;