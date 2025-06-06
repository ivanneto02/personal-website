var router = require("express").Router();

/* Current route */

// GET api/booking/
router.get("/", (req, res) => {
    res.json({ booking: [] });
});

// GET api/booking/:id
router.get("/:id", (req, res) => {
    res.json({ id: req.params.id });
});

/* Nested routes */

module.exports = router;