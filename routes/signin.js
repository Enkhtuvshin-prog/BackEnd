const { Router } = require("express");
const { signInUser } = require("../controllers/auth");
const router = Router();
router.post("/", signInUser);
module.exports = router;
