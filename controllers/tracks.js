const { trascksModel } = require('../models');
/**
*obtenernlista de la base de datos!
*@param {*} resq
*@param {*} resq
*/
const getItems = async(req,res) =>{
    const data = await trascksModel.find({});
    // trascksModel.find({}).then((res) =>{console.log(res)})

    res.send({ data });
};


/**
 *obtener un detalle fn
*@param {*} resq
*@param {*} resq
*/
const getItem =(req,res) =>{};
/**
 * Insetar un registro
*@param {*} resq
*@param {*} resq
 */
const createItem =(req,res) =>{};
/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem =(req,res) =>{};
/**
 * eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem =(req,res) =>{};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem};



