
const Article = require('../models/article_model')

// logic to create a new article
createArticle = (req, res) => {
    const body = req.body

    console.log(body)

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an article',
        })
    }

    const article = new Article(body)

    if (!article) {
        return res.status(400).json({ success: false, error: err })
    }

    article
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: article._id,
                message: 'Article created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Article not created!',
            })
        })
}

// logic to update an existing article
updateArticle = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Article.findOne({ _id: req.params.id }, (err, article) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Article not found!',
            })
        }
        article.title = body.title
        article.body = body.body
        article.author = body.author
        article.type = body.type
        article
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: article._id,
                    message: 'Article updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Article not updated!',
                })
            })
    })
}

// logic to delete an existing article
deleteArticle = async (req, res) => {
    await Article.findOneAndDelete({ _id: req.params.id }, (err, article) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!article) {
            return res
                .status(404)
                .json({ success: false, error: `Article not found` })
        }

        return res.status(200).json({ success: true, data: article })
    }).catch(err => console.log(err))
}

// logic to find an article with a given id
getArticleById = async (req, res) => {
    await Article.findOne({ _id: req.params.id }, (err, article) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!article) {
            return res
                .status(404)
                .json({ success: false, error: `Article not found` })
        }
        return res.status(200).json({ success: true, data: article })
    }).catch(err => console.log(err))
}

// logic to get multiple articles
getArticles = async (req, res) => {
    await Article.find({}, (err, articles) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!articles.length) {
            return res
                .status(404)
                .json({ success: false, error: `Article not found` })
        }
        return res.status(200).json({ success: true, data: articles })
    }).catch(err => console.log(err))
}

// module exports the following methods
module.exports = {
    createArticle,
    updateArticle,
    deleteArticle,
    getArticles,
    getArticleById,
}
