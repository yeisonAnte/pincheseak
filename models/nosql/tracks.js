const mongoose = require("mongoose")

const TracksSheme = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        album:{
            type:String,
        },
        cover:{
            type:String,
            validate:{
                validator:(req) =>{
                    return true;
                },
                menssage: "error_url",
            },
        },
        artist:{
            name:{
                type:String,
            },
            nickname: {
                type:String,
            },
            nationality:{
                type:String,
            },
        },
        duration:{
            start:{
                type:Number,
            },
            end: {
                type:Number,
            },
        },
        mediaId:{
            type: mongoose.Types.ObjectId,
        },
    },
    {
        timestamps:true, //este campo no que permite es regitrar el createdAt, updateAt fecha de cracion y fecha de actualizacion
        versionKey: false
    }
);
module.exports = mongoose.model("Users", TracksSheme)// en ese apartado va el nombre de la tabla de mysql