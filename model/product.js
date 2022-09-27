
const mongoose = require("mongoose");

const productschema = mongoose.Schema({
category_id:{type:mongoose.Schema.Types.ObjectId , ref:"category"},
user_id:{type:mongoose.Schema.Types.ObjectId , ref:"user"},
NAME:{type:String},
Brand:{type:String},
price:{type:Number},
warrenty:{type:String},
});
module.exports=mongoose.model("product", productschema)