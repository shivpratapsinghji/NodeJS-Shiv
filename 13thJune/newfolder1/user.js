const mongoose=require('mongoose');
let userSchema=new mongoose.Schema({
      _id:mongoose.Schema.Types.ObjectId,
      email:String,
      name:String
});
module.exports=mongoose.model('user',userSchema);