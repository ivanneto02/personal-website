const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

// define application
const app = express()

// define constants
const port = 3030

// chain middlewares
app.use(bodyParser.urlencoded({ extended : true }))
app.use(cors())
app.use(bodyParser.json())

/* Main level route */
app.use("/", require("./routes"));

// start the app and define port
app.listen(port, () => console.log(`API Server running on port ${port}`))
