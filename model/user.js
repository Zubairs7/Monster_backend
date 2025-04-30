const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String
    }
});

module.exports = mongoose.model('user', userSchema);