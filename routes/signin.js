const { Router } = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const router = Router();
router.post("/", (req, res) => {
  const { email, password } = req.body;
  const data = fs.readFileSync("users.json", "utf-8");
  const parsedData = JSON.parse(data);
  const findUser = parsedData.users.find((user) => user.email === email);

  if (!findUser) {
    res.status(401).json({ message: "Email burtgelgui bna", user: null });
    return;
  }

  if (findUser) {
    const isCheck = bcrypt.compareSync(password, findUser.password);
    if (isCheck)
      res.status(200).json({ message: "Amjlttai newterlee", user: findUser });
    else
      res
        .status(401)
        .json({ message: "Email esvel password buruu bna", user: null });
  }
});
module.exports = router;
