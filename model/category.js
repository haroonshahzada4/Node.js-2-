const mongoose = require("mongoose");

const categoryschema = mongoose.Schema({
productname:{type:String},
color:{type:String},
wight:{type:Number},

})
module.exports=mongoose.model("category",categoryschema);