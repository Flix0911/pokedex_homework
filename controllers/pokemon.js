//dependencies

//import express
const express = require("express")

//create router
const router = express.Router()

//pokemon array
const pokemon = require("../models/pokemon.js")

//ROUTES

//INDEX - GET - /pokemon
router.get("/", (req, res) => {
    //confirming data is connected. ANSWER: YES, returns JSON data
    //res.send(pokemon)
    res.render("index.ejs", {pokemon})
})

//NEW - GET - /pokemon/new
router.get("/new", (req, res) => {
    res.render("new.ejs")
})

//DESTORY - DELETE

//UPDATE - PUT
router.put("/:id", (req, res) => {
    //get id from params
    const id = req.params.id
    //get the body
    const body = req.body
    //swap out the old version for the new version
    pokemon[id] = body
    res.redirect("/pokemon")
})

//CREATE - POST

//EDIT - GET - /pokemon/:id/edit
router.get("/:id/edit", (req, res) => {
    //get id from params
    const id = req.params.id
    //get pokemon from array
    const pokemons = pokemon[id]
    res.render("edit.ejs", {pokemons, id})
})

//SHOW - GET - /pokemon/:id
router.get("/:id", (req, res) => {
    //get id from params
    const id = req.params.id
    //get pokemon from array
    const pokemons = pokemon[id]
    // res.send(pokemons)
    res.render("show.ejs", {pokemons, id})
})


//export the router
module.exports = router