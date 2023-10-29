import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// // import User from '../src/Model/User.js'
import User from '../server/src/Model/User.js'
import Product from './src/Model/Product.js';
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

// Post signup
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

// Post login
app.post('/login', async (req , res) => {
    const {email , password} = req.body

    if(!email || !password)
    {
        return res.json({
            success : false,
            message:"Email and Password is required"
        })
    }

    const user = await User.findOne({
        email:email,
        password:password
    }).select(" name email mobile")

    if(user)
    {
        res.json({
            success : true,
            data:user,
            message:"Login Successfully"
        })
    }else
    {
        res.json({
            success : false,
            
            message:"Invalid Credentials"
        })
    }
    

})

// get products

app.get('/products',async(req , res) => {

    const product = await Product.find();

    res.json({
        success : true,
        data : product,
        message : "Successfully fetch all products"
    })
})
// post product

app.post('/product', async (req , res) => {
    const {name, description , price , image, category, brand} = req.body;

    const product = new Product({
        name: name,
        description: description,
        price:price,
        image:image,
        category:category,
        brand:brand
    })

    try{
        const savedProduct = await product.save();

        res.json({
            success:true,
            data:product,
            message:"Successfully added new product"
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
// get product /:id
app.get('/product/:id',async(req , res) => {
  
    const {id} = req.params;

    const product = await Product.findById(id);

    res.json({
        success : true,
        data : product,
        message : `Successfully fetch products with id ${id}`
    })
})
// put product
app.put('/product/:id',async(req , res) => {
  
    const {id} = req.params;
    const {name, description, price , category , image , brand} = req.body;

    await Product.updateOne({_id:id},{$set:{
        name:name,
        description:description,
        price:price,
        category:category,
        image:image,
        brand:brand
    }});

    const updatedproduct = await Product.findOne({_id:id})

    res.json({
        success : true,
        data : updatedproduct,
        message : `Successfully updated products with id ${id}`
    })
})

// delete product

app.delete('/product/:id',async (req ,res) => {
    const {id} = req.params;

    const deletedProduct = await Product.deleteOne({_id:id})

    res.json({
        success:true,
        message:"Successfully deleted product"
    })
})
// get product/search?query

// app.get('/product/search',async (req , res) => {
//     const {q} = req.query;

//     const product = await Product.find({name: {$regex :q, $options : 'i'}})

//     res.json({
//         success:true,
//         data: product,
//         message: "Successfully search product"
//     })
// })

app.listen(PORT, () => {
    console.log(`Surver is running on PORT ${PORT}`);
    ConnectDB();
})
