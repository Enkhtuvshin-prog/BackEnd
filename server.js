const express = require("express");
const cors = require("cors");
const fs = require("fs");
const port = 8003;
// const res = require("express/lib/response");
const server = express();
server.use(cors());
server.use(express.json());
const { v4: uuidv4 } = require("uuid");
const { parse } = require("path");
const bcrypt = require("bcrypt");

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hello express server" });
});
server.post("/signup", (req, res) => {
  const { name, role, email, password } = req.body;
  const data = fs.readFileSync("users.json", "utf-8");
  const parsedData = JSON.parse(data);
  const id = uuidv4();
  const salted = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salted);
  const newUser = {
    id,
    name,
    role,
    email,
    password: hashedPassword,
  };
  parsedData.users.push(newUser);
  fs.writeFileSync("users.json", JSON.stringify(parsedData));
  res.status(201).json({ message: "hereglegch amjilttai burtgegdlee" });
});
server.post("/signin", (req, res) => {
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

server.get("/users", (req, res) => {
  fs.readFile("users.json", "utf-8", (err, data) => {
    if (err) {
      console.log("ERROR");
      return;
    }
    console.log(data);
    const parsedData = JSON.parse(data);

    res.status(201).json({ users: parsedData.users });
  });
});

server.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const data = fs.readFileSync("users.json", "utf-8");
  const parsedData = JSON.parse(data);
  const user = parsedData.users.find((el) => el.id === id);
  res.status(200).json({ user });
});

server.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const data = fs.readFileSync("users.json", "utf-8");
  const parsedData = JSON.parse(data);
  const findIndex = parsedData.users.findIndex((el) => el.id === id);
  parsedData.users[findIndex].name = name;
  fs.writeFileSync("users.json", JSON.stringify(parsedData));
  res
    .status(201)
    .json({ message: "Шинэ хэрэглэгчийн өгөгдөл амжилттай солигдлоо." });
});
server.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const data = fs.readFileSync("users.json", "utf-8");
  const parsedData = JSON.parse(data);
  const findIndex = parsedData.users.findIndex((el) => el.id === id);
  parsedData.users.splice(findIndex, 1);
  fs.writeFileSync("users.json", JSON.stringify(parsedData));
  res
    .status(201)
    .json({ message: `${id} тай хэрэглэгч амжилттай устгагдлаа.` });
});

server.get("/package", (req, res) => {
  fs.readFileSync("travelData.json", "utf-8", (err, data) => {
    if(err){
      console.log("ERROR");
      return;
    }
    console.log(data);
    const parsedData = JSON.parse(data)
    res.status(201).json({travel: parsedData.data})
  });
});

server.listen(port, () => {
  console.log(`server start ${port}`);
});
