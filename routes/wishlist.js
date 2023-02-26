const { Router } = require("express");
const { getWishlist, deleteWishlist } = require("../controllers/wishlist");
const router = Router();

// router.post("/", createWishlist )
router.get("/", getWishlist );
router.delete("/:id", deleteWishlist);

module.exports = router;
