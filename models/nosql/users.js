const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema(
    {
        name:{
            type:String
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String
        },
        role:{
            type:["user","admin"],
            default: "user",
        },
    },
    {
        timestamps:true, //este campo no que permite es regitrar el createdAt, updateAt fecha de cracion y fecha de actualizacion
        versionKey: false
    }
);
module.exports = mongoose.model("Users", UserScheme)// en ese apartado va el nombre de la tabla de mysql