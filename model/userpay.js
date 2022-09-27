const mongoose = require("mongoose");

const payschema = mongoose.Schema({
paytype:{type:String},
status:{type:String},
accountnumber :{type:Number}

})
module.exports=mongoose.model("pay", payschema)