const fs = require("fs");
// const { v4: uuidv4 } = require("uuid");
const filePath = "./data/travel.json";
const getTravels = (req, res) => {
  try {
    const travels = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(travels);
    res.status(200).json({ message: "success", data: data });
    console.log("data:", data);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
const createTravel = (req, res) => {
  try {
    const travels = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(travels);
    const newData = { ...req.body };
    data.travel.push(newData);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res
      .status(201)
      .json({ message: "travel amjilttai burtgegdlee", data: newData });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  res.json({});
};
const updateTravel = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const data = fs.readFileSync(filePath, "utf-8");
  const parsedData = JSON.parse(data);
  const findIndex = parsedData.users.findIndex((el) => el.id === id);
  parsedData.users.splice(findIndex, 1);
  fs.writeFileSync(filePath, JSON.stringify(parsedData));
  res.status(201).json({ message: `${id} hereglegch amjilttai ustlaa ` });
};

module.exports = { createTravel, getTravels, updateTravel };
