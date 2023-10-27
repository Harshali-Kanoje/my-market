import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// // import User from '../src/Model/User.js'
import User from '../server/src/Model/User.js'
// import User from './Model/User.js'

const app = express();
app.use(express.json());

// const PORT = process.env.PORT || 5000; 
const PORT = 5000

// const PORT = process.env.PORT || 5000;

const ConnectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    if(conn)
    {
        console.log("MongDB connected successfully");
    }
}

app.post('/signup', async (req , res) => {
    const {name , email , password , mobile , address , gender} = req.body

    const user = new User({
        name : name ,
        email :email, 
        password:password , 
        mobile:mobile ,
        address:address,
        gender:gender
    })

    try{
        const saveduser = await user.save();

    res.json({
        success : true,
        data : saveduser,
        message:"fetch studendt"
    })
    }

    catch(e)
    {
        res.json({
            success:false,
            message:e.message
        })
    }
})

app.listen(PORT, () => {
    console.log(`Surver is running on PORT ${PORT}`);
    ConnectDB();
})
