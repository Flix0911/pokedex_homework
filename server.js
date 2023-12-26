//dependencies

//import express
const express = require("express")
//import morgan
const morgan = require("morgan")
//import method-override
const methodOverride = require("method-override")

//pokemon router
const pokemonRouter = require("./controllers/pokemon.js")

//import pokemen
const pokemon = require("./models/pokemon.js")

//create app object
const app = express()

//middleware

//styles 
app.use(express.static("public"))

//urlencoded
app.use(express.urlencoded({extended: true}))

//use morgan
app.use(morgan("dev"))

//methodOverride
app.use(methodOverride("_method"))

//pokemon router
app.use("/pokemon", pokemonRouter)

//server listener
app.listen(3000, () => {
    console.log("you gotta catch'em all, on port 3000")
})