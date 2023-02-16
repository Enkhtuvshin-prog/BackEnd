const { Router } = require("express");
// const fs = require("fs");
// const bcrypt = require("bcrypt");
const router = Router();
const {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/user");
router.get("/", getAllUsers);
router.get("/:id", getUser).put("/:id", updateUser).delete("/:id", deleteUser);

module.exports = router;
