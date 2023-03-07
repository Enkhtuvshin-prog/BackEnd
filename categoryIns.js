const connection = require("./config/db");
const fs = require("fs");
const insertIntoData = (tableName, data) => {
  connection.query(
    `INSERT INTO category (id, title, image, description) VALUES${data}; `,
    (err, result) => {
      if (err) {
        console.log("ERROR---", err);
        return ;
        // res.status(400).json({ message: err.message });
      }
        console.log(result);
      // res.status(200).json({ message: "Huselt amjilttai", data: result });
    }
  );
};

const content = fs.readFileSync("./data/categories.json", "utf-8");
const datas = JSON.parse(content).category;
const insertData = datas
  .map(
    (data) =>
      `(null, "${data.title}", "${data.img}", "${data.description}")`
  )
  .join();
insertIntoData("category", insertData);
console.log("=====", insertData);