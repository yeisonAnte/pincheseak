require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')
const app = express()

app.use(cors())

const port = process.env.PORT || 3000

// aqui invocamos las rutas
// cuando las personas entren al localhost/api

app.use("/api",require("./routes"))

app.listen(port,() =>{
    console.log(`http:localhost:${port}`)
})
dbConnect()