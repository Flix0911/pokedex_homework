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
router.delete("/:id", (req, res) => {
    //get the id from params
    const id = req.params.id
    //splice it from the array
    pokemon.splice(id, 1)
    //redirect back to index
    res.redirect("/pokemon")
})

//UPDATE - PUT
router.put("/:id", (req, res) => {
    //get id from params
    const id = req.params.id
    console.log("Request Body:", req.body);
    console.log("Updating Pokemon at index:", id);
    //get the body
    const body = req.body
    console.log("Update Pokemon Data:", body)
    //swap out the old version for the new version
    pokemon[id].stats = body.stats
    console.log("Pokemon array after update:", pokemon)
    res.redirect("/pokemon")
})

//CREATE - POST
router.post("/", (req, res) => {
    //grab the form data
    const body = req.body
    //create a new pokemon
    //add the pokemon to the array
    pokemon.push(body)
    res.redirect("/pokemon")
})

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