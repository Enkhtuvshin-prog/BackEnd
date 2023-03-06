const connection = require("../config/db");
const fs = require("fs");
const insertIntoData = (tableName, data) => {
  connection.query(
    `INSERT INTO travel (id, title, images. detail, price, location, day, cat_id) VALUES${data}; `,
    (err, result) => {
      if (err) {
        // console.log("ERROR---", err);
        return res.status(400).json({ message: err.message });
      }
      //   console.log(result);
      res.status(200).json({ message: "Huselt amjilttai", data: result });
    }
  );
};

const content = fs.readFileSync("../data/travel.json", "utf-8");
const datas = JSON.parse(content).travel;
const insertData = datas
  .map(
    (data) =>
      `(null, "${data.title}", "${data.images}", "${data.detail}", "${data.price}","${data.location}","${data.day}","${cat_id}")`
  )
  .join();
insertIntoData("travel", insertData);
console.log("first---", insertData);
