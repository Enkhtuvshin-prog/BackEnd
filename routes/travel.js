const { Router } = require("express");
const { getTravels, createTravel } = require("../controllers/travel");
const router = Router();

// router.post("/", getUsers);
router.get("/", getTravels).post("/", createTravel);

module.exports = router;
