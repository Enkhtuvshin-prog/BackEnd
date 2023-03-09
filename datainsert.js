const connection = require("./config/db");
const fs = require("fs");
const insertIntoData = (tableName, data) => {
  connection.query(
    `INSERT INTO users (id, name, email, password, role, phone_number, profileImg) VALUES ${data}; `,
    (err, result) => {
      if (err) {
        console.log("ERROR---", err);
        return;
        // res.status(400).json({ message: err.message });
      }
      console.log(result);
      // res.status(200).json({ message: "Huselt amjilttai", data: result });
    }
  );
};

const content = fs.readFileSync("./data/users.json", "utf-8");
const datas = JSON.parse(content).users;
const insertData = datas
  .map(
    (data) =>
      `(null, "${data.name}", "${data.email}", "${data.password}", "USER", ${data.phone_number}, "${data.profileImg}")`
  )
  .join();
insertIntoData("users", insertData);
// console.log("first---", insertData);
