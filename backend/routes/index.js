const express = require("express");
const router = express.Router();

/* define the routes */
router.get("/", (req, res) => {
    res.send("hello from /");
});

/* nested routes */

router.use("/api", require("./api"));

module.exports = router;