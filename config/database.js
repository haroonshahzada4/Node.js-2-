
const mongoose= require("mongoose");


mongoose.connect("mongodb+srv://Haroonshahzada:Shahzada444@cluster0.ny69e.mongodb.net/")
.then(()=>{
    console.log("CONNECTED")
}).catch((error)=>{
    console.log("connection failed")
    console.log(error)
})