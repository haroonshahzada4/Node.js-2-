const mongoose = require("mongoose");

const orderschema = mongoose.Schema({
user_id:{type:mongoose.Schema.Types.ObjectId , ref:"user"},
product_id:{type:mongoose.Schema.Types.ObjectId , ref:"product"},
total:{type:Number},

});
module.exports=mongoose.model("order",orderschema)