const express = require("express");
const cors = require("cors");
const fs = require("fs");
const port = 8003;
// const res = require("express/lib/response");
const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hello express server" });
});
server.post("/signup", (req, res) => {
  const { name, role } = req.body;
  fs.readFile("users.json", "utf-8", (err, data) => {
    if (err) {
      console.log("error file");
      return;
    }
    console.log(data);
    const parsedData = JSON.parse(data);

    const newUser = { name, role, id: parsedData.users.length };
    parsedData.users.push(newUser);
    fs.writeFile("users.json", JSON.stringify(parsedData), (err) => {
      if (err) {
        res.status(404).json({ message: "Error" });
      }
      res.status(201).json({ message: "Create new user" });
    });
  });
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
  fs.readFile("users.json", "utf-8", (err, data) => {
    if (err) {
      console.log("ERROR");
      return;
    }
    console.log(data);
    const parsedData = JSON.parse(data);

    const { id } = req.params;
    const user = parsedData.users.find((el) => el.id === Number(id));
    res.status(200).json({ user });
  });
});

// server.get("/", (req, res) => {
//   res.send("huselt amjlttai ilgeegdee");
// });
server.listen(port, () => {
  console.log(`server start ${port}`);
});
