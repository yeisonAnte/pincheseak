const mongoose = require("mongoose")

const StorageScheme = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:Number,
        }
    },
    {
        timestamps:true, //este campo no que permite es regitrar el createdAt, updateAt fecha de cracion y fecha de actualizacion
        versionKey: false
    }
);
module.exports = mongoose.model("storage", StorageScheme)// en ese apartado va el nombre de la tabla de mysql