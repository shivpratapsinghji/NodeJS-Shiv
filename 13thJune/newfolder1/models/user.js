const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
      _id:{
            type:mongoose.Schema.Types.ObjectId,
            required:true
            
      },
      name:{
            type:String,
            required:true            
      },
      email:{
            type:String,
            required:true            
      },
      address:{
            type:String,
            required:true            
      },
      phone:{
            type:String,
            required:true            
      }

});

module.exports=mongoose.model('user',userSchema);