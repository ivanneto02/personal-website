const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

// import database
const db = require("./db")
const articleRouter = require("./routes/article_router")

// define application
const app = express()

// define constants
const port = 3030

// chain middlewares
app.use(bodyParser.urlencoded({ extended : true }))
app.use(cors())
app.use(bodyParser.json())

db.on("error", console.error.bind(console, "MondoDB connection error:"))

// define routes
app.get("/", (req, res) => {
    res.send("TEST! Hello World!")
})

app.use("/api", articleRouter)

// start the app and define port
app.listen(port, () => console.log(`API Server running on port ${port}`))
