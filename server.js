const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const usersRoute = require("./routes/users");
const categoriesRoute = require("./routes/categories");
const signinRoute = require("./routes/signin");
const signupRoute = require("./routes/signup");
const travelRoute = require("./routes/travel");
const wishlistRoute = require("./routes/wishlist");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "azure_db",
});
// const fs = require("fs");
const port = 8003;
// const res = require("express/lib/response");
const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  connection.query("SELECT * FROM azure_user", (err, result, fields) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    res.status(200).json({ message: "Huselt amjilttai", data: result });
  });
});

server.get("/:id", (req, res) => {
  connection.query(
    `SELECT * FROM azure_user   WHERE aid =${req.params.id} `,
    (err, result, fields) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      res.status(200).json({ message: "Huselt amjilttai", data: result });
    }
  );
});
server.post("/", (req, res) => {
  connection.query(
    `INSERT INTO azure_user  VALUES(${req.body.aid}, "${req.body.name}", "${req.body.ovog}" )`,
    (err, result, fields) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      res.status(200).json({ message: "Huselt amjilttai", data: result });
    }
  );
});
server.delete("/:id", (req, res) => {
  connection.query(
    `DELETE FROM azure_user WHERE aid =${req.params.id} `,
    (err, result, fields) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      res
        .status(200)
        .json({ message: "Huselt amjilttai" + req.params.id, data: result });
    }
  );
});
server.put("/:id", (req, res) => {
  const body = req.body;
  const convertToStr = (body) => {
    const keys = Object.keys(body);
    const dd = keys.map((key) => `${key}='${body[key]}'`).join();
    return dd;
  };
  const updateQuery = convertToStr(body);
  connection.query(
    `UPDATE azure_user SET ${updateQuery}  WHERE aid =${req.params.id} `,
    (err, result, fields) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      res.status(200).json({
        message: "Huselt amjilttai:" + req.params.id,
        data: result,
      });
    }
  );
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
