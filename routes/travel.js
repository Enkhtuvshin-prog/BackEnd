const { Router } = require("express");
const { getUsers } = require("../controllers/travel");
const router = Router();

// router.post("/", getUsers);
router.get("/", getUsers);

module.exports = router;
