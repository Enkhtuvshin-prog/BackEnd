const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const filePath = "./data/users.json";
// const signInUser = (req, res) => {
//   const { email, password } = req.body;
//   const data = fs.readFileSync(filePath, "utf-8");
//   const parsedData = JSON.parse(data);
//   const findUser = parsedData.users.find((user) => user.email === email);

//   if (!findUser) {
//     res.status(401).json({ message: "Email burtgelgui bna", user: null });
//     return;
//   }

//   if (findUser) {
//     const isCheck = bcrypt.compareSync(password, findUser.password);
//     if (isCheck)
//       res.status(200).json({ message: "Amjlttai newterlee", user: findUser });
//     else
//       res
//         .status(401)
//         .json({ message: "Email esvel password buruu bna", user: null });
//   }
// };
const signInUser =(req, res)=>{
  const {email, password} = req.body;

connection.query(`SELECT email, password FROM users WHERE email=${email} AND password = ${password}`, (err, result) => {
  if (err) {
    return res.status(400).json({ message: err.message });
  }
  res.status(200).json({ message: "Huselt amjilttai", data: result });
});
}
module.exports = { signInUser };
