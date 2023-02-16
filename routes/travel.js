const { Router, json } = require("express");
const { getUsers, updateUser } = require("../controllers/travel");
const router = Router();

// router.post("/", getUsers);
router.get("/", getUsers).post("/", createUser).put("/:id", updateUser);

module.exports = router;
