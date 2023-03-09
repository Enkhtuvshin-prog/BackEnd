const connection = require("./config/db");
const fs = require("fs");
const insertIntoData = (tableName, data) => {
  connection.query(
    `INSERT INTO rating (id, user_id,  travel_id, rating) VALUES${data}; `,
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

const content = fs.readFileSync("./data/rating.json", "utf-8");
const datas = JSON.parse(content).rating;
const insertData = datas
  .map((data) => `(null, ${data.user_id},  ${data.travel_id}, ${data.rating})`)
  .join();
insertIntoData("rating", insertData);
console.log("=====", insertData);
