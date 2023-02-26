const express = require("express");
const cors = require("cors");
const usersRoute = require("./routes/users");
const categoriesRoute = require("./routes/categories");
const signinRoute = require("./routes/signin");
const signupRoute = require("./routes/signup");
const travelRoute = require("./routes/travel");
const wishlistRoute = require("./routes/wishlist")
// const fs = require("fs");
const port = 8003;
// const res = require("express/lib/response");
const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hello express server" });
});

server.use("/users", usersRoute);
server.use("/categories", categoriesRoute);
server.use("/signin", signinRoute);
server.use("/signup", signupRoute);
server.use("/travel", travelRoute);
server.use("/wishlist", wishlistRoute);
server.listen(port, () => {
  console.log(`server start ${port}`);
});
