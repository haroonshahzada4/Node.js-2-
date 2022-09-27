
///EXPRESS
const express = require("express");
const app = express();
app.use(express.json());


///MODEL
const User = require("./model/user");
const Address = require("./model/useraddress");
const Pay = require("./model/userpay");
const Product= require("./model/product");
const Category= require("./model/category");
const Order= require("./model/order_details");


//database
const database = require("./config/database");
const user = require("./model/user");
const auth = require("./middleware/auth");


//middleware
const jwt = require("jsonwebtoken");
const bodyparser= require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
///env file
require("dotenv").config({path:".env"});





///LOGIC
////register
app.post("/register",async(req, res)=>{
    try{
    const {FIRSTNAME,LASTNAME,email,password,phone}=req.body;
    if(!(FIRSTNAME&&LASTNAME&&email&&password&&phone)){
        res.status(400).send("ALL Required")
    }

    const user = await new User({
        FIRSTNAME,
        LASTNAME,
        email,
        password,
        phone,
    }) 
    await user.save();

    res.status(200).json(user);
}catch(error){
    console.log(error)
}
});



////USER login

app.post("/login",async(req, res)=>{
    try{
    const {email,password}=req.body;
    if(!(email&&password)){
        res.status(400).send("INVALID")
    }

    
    const user = await User.findOne({email})
        if(user)
        {
            const token = jwt.sign({_id: user._id},("privatekey"))
            user.token= token;        
            res.status(200).json(user);
        }
    
}catch(error){
console.log(error)
}
});

///token id

app.get("/logid",auth,async(req, res)=>{
    try{
        
    const user = await User.findById(req.user_id)
    res.json(user)
   
        
                
            const _id=jwt.verify(token,("privatekey"));
            res.status(200).json(_id);
        
        
    }catch(error){
        console.log(error)
}
});
  



app.post("/product",async(req, res)=>{
try{
    const {NAME,Brand,price,warrenty}=req.body
 
 const product = await new Product({
     NAME,
     Brand,
     price,
     warrenty
 })
 await product.save;
res.status(200).json(product)
}catch(error){
    console.log(error)
}
});












//useraddress
app.post("/address",async(req, res)=>{
    const {location,country,postal_code}=req.body;

const address=Address.find()
if(address){
    const address = await new Address({
        location,
        country,
        postal_code,
    })
    res.status(200).json(address)
}   
})


///userpay
// app.post("/pay",(req, res)=>{

// });


//product



// ///category
// app.post("/category",(req, res)=>{
//     res.status(200).send("ok")
// })



// //order
// app.post("/details",(req, res)=>{
//     res.status(200).send("ok")
// })


module.exports=app