import { Schema,model } from "mongoose";

const orderSchema = new Schema({
    user:{
        type : Schema.Types.ObjectId,
        required : true,
        ref: 'User'
    },
    product:{
        type : Schema.Types.ObjectId,
        required : true,
        ref: 'Product'
    },
    quantity:{
        type :Number,
        default:1,
    },
    shippingAdress:{
        type : String,
        required : true,
    },
    deliverCharges:{
        type : Number,
       default: 0
    },
    status:{
        type : String,
        default : "pending"
    }
},{
    timestamps : true
})

const Order = model('Order' , orderSchema)

export default Order;