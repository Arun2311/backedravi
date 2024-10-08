const mongoose  =  require("mongoose")


const AuthSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
)

module.exports = mongoose.model("auth" ,AuthSchema )