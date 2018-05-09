require("dotenv").config()
let passwords = require("./passwords.js")
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

let sqlPassword = passwords.sql

const app = express()

const PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Get Handlers
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "pages/index.html"))
})

app.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "pages/style.css"))
})

//Starts Server
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
})

