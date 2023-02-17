const { Router } = require("express");
const {
  getTravels,
  createTravel,
  updateTravel,
  getTravelsByCategory,
} = require("../controllers/travel");
const router = Router();

// router.post("/", getUsers);
router.get("/", getTravels);
router.post("/", createTravel);

router.get("/category/:travel", getTravelsByCategory);

router.put("/:id", updateTravel);

module.exports = router;
