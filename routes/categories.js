const { Router } = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const {
  createCategory,
  getCategory,
  updateCategory,
  deletedCategory,
} = require("../controllers/category");
const router = Router();

router
  .post("/", createCategory)
  .get("/", getCategory)
  .put("/:id", updateCategory)
  .delete("/:id", deletedCategory);

module.exports = router;
