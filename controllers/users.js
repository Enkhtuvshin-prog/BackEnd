const { Router } = require("express");
const fs = require("fs");

const getUsers = (req, res) => {
  fs.readFile("users.json", "utf-8", (err, data) => {
    if (err) {
      console.log("ERROR");
      return;
    }
    console.log(data);
    const parsedData = JSON.parse(data);

    res.status(201).json({ users: parsedData.users });
  });
};

module.exports = { getUsers };
