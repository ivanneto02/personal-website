const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Article = new Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true },
        author: { type: String, required: true },
        type: { type: String, required: true }
    },
    { timestamp : true }
)

module.exports = mongoose.model("articles", Article)
