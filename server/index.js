import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

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

app.listen(PORT, () => {
    console.log(`Surver is running on PORT ${PORT}`);
    ConnectDB();
})
