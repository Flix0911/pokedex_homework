//dependencies

//import express
const express = require("express")

//create router
const router = express.Router()

//pokemon array
const pokemon = require("../models/pokemon.js")

//ROUTES

//INDEX - GET
router.get("/", (req, res) => {
    //confirming data is connected. ANSWER: YES, returns JSON data
    //res.send(pokemon)
    res.render("index.ejs", {pokemon})
})

//NEW - GET

//DESTORY - DELETE

//UPDATE - PUT

//CREATE - POST

//EDIT - GET

//SHOW - GET
router.get("/:id", (req, res) => {
    //get id from params
    const id = req.params.id
    //get pokemon from array
    const pokemons = pokemon[id]
    // res.send(pokemonId)
    res.render("show.ejs", {pokemons, id})
})


//export the router
module.exports = router