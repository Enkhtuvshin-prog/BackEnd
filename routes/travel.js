const { Router } = require("express");
const {
  getTravels,
  createTravel,
  updateTravel,
} = require("../controllers/travel");
const router = Router();

// router.post("/", getUsers);
router.get("/", getTravels).post("/", createTravel).put("/:id", updateTravel);

module.exports = router;
