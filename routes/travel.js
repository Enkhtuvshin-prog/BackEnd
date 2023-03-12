const { Router } = require("express");
const {
  getTravels,
  createTravel,
  updateTravel,
  getTravelsByCategory,
  deleteTravel,
} = require("../controllers/travel");
const router = Router();

// router.post("/", getUsers);
router.get("/", getTravels);
router.post("/", createTravel);

router.get("/:travel", getTravelsByCategory);

router.put("/:id", updateTravel);
router.delete("/:id", deleteTravel);

module.exports = router;
