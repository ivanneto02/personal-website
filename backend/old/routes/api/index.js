var router = require('express').Router();

/* Current route */

// api/
router.get("/", (req, res) => {
    res.send("Hello from api/");
});

/* nested routes */

// api/user
router.use("/user", require('./user'));

// api/booking
router.use("/booking", require('./booking'));

module.exports = router;