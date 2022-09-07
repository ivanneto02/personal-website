const mongoose = require('mongoose')

// Make the connection to the MongoDB database
mongoose
    .connect('mongodb://127.0.0.1:27017/ivan-react-website', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
