const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const createCategory = (req, res) => {
  try {
    const content = fs.readFileSync("./data/categories.json", "utf-8");
    const data = JSON.parse(content);
    const newData = { ...req.body };
    data.categories.push(newData);
    fs.writeFileSync("./data/categories.json", JSON.stringify(data));
    res.status(201).json({ message: "amjilttai uuseglee", data: newData });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  res.json({});
};

const getCategory = (req, res) => {
  try {
    const categories = fs.readFileSync("./data/categories.json", "utf-8");
    const data = JSON.parse(categories);
    res.status(200).json({ message: "success", data: data });
    console.log("data:", data);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const updateCategory = (req, res) => {
  try {
    const categoriesData = fs.readFileSync("./data/categories.json", "utf-8");
    console.log("CC", categoriesData);
    const data = JSON.parse(categoriesData);
    console.log("DD", data);
    const findIndex = data.categoriesData.findIndex(
      (el) => el.id === req.params.id
    );

    if (findIndex === -1) {
      return res.status(404).json({ message: "not found", data: null });
    }

    data.categoriesData[findIndex] = {
      ...data.categoriesData[findIndex],
      ...req.body,
    };

    fs.writeFileSync("./data/categories.json", JSON.stringify(data));
    res
      .status(200)
      .json({ message: "success", data: data.categoriesData[findIndex] });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const deletedCategory = (req, res) => {
  try {
    const categoriesData = fs.readFileSync("./data/categories.json", "utf-8");
    console.log("CC", categoriesData);
    const data = JSON.parse(categoriesData);
    console.log("DD", data);
    const findArr = data.categoriesData.filter((el) => el.id !== req.params.id);
    const deletedCategory = data.categoriesData.find(
      (el) => el.id === req.params.id
    );

    if (!(findArr.length > 0)) {
      return res.status(404).json({ message: "not found", data: null });
    }

    data.categoriesData = findArr;

    fs.writeFileSync("./data/categories.json", JSON.stringify(data));
    res.status(200).json({ message: "success", data: deletedCategory });
  } catch (error) {
    return res.status(400).json({ message: err.message });
  }
};
module.exports = {
  createCategory,
  getCategory,
  updateCategory,
  deletedCategory,
};
