// const { Router } = require("express");
const express = require("express");
const router = express.Router();
const {getItems,getItem} =require("../controllers/tracks")
// aqui generamos la ruta de tracks tanto metodo GET, POST, DELETE ,PUT FAMOSO CRUT
router.get("/",getItems)
router.get("/:id",getItem)

module.exports = router