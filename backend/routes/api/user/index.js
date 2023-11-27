var router = require("express").Router();

/* Current route */

// api/user/
router.get("/", (req, res) => {
    res.json({ users: [] });
});

// api/user/:id
router.get("/:id", (req, res) => {
    res.json({ id: req.params.id });
});

/* Nested route */

module.exports = router;