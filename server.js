//dependencies

//import express
const express = require("express")
//import morgan
const morgan = require("morgan")
//import method-override
const methodOverride = require("method-override")

//pokemon router - empty, will return

//import pokemen - empty, will return 

//create app object
const app = express()

//middleware

//styles - empty, will return

//urlencoded
app.use(express.urlencoded({extended: true}))

//use morgan
app.use(morgan("dev"))

//methodOverride
app.use(methodOverride("_method"))

//pokemon router - empty, will return

//server listener
app.listen(3000, () => {
    console.log("you gotta catch'em all, on port 3000")
})