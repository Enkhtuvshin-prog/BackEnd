const { Router } = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const {
  createCategory,
  getCategory,
  updateCategory,
  deletedCategory,
  allgetCategories,
  getBycat,
} = require("../controllers/category");
const router = Router();

router
.get("/", allgetCategories)
  .post("/", createCategory)
  // .get("/:id", getCategory)
  .get("/:id", getBycat)
  .put("/:id", updateCategory)
  .delete("/:id", deletedCategory);

module.exports = router;
