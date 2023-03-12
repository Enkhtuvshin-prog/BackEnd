const connection = require("./config/db");
const fs = require("fs");
const insertIntoData = (tableName, data) => {
  connection.query(
    `INSERT INTO category (id, title, image, description, agent_id) VALUES${data}; `,
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
      `(${data.id}, "${data.title}", "${data.img}", "${data.description}", ${data.agent_id})`
  )
  .join();
insertIntoData("category", insertData);
console.log("=====", insertData);