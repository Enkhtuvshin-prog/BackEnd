const { Router } = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const router = Router();

router.post("/", (req, res) => {
  res.status(200).json({ message: "Hello express server" });
  try {
    const content = fs.readFileSync("categories.json", "utf-8");
    const data = JSON.parse(content);
    const newData = { ...req.body };
    data.categories.push(newData);
    fs.writeFileSync("categories.json", JSON.stringify(data));
    res.status(201).json({ message: "amjilttai uuseglee", data: newData });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  res.json({});
});

router.get("/", (req, res) => {
  try {
    const categories = fs.readFileSync("categories.json", "utf-8");
    const data = JSON.parse(categories);
    res.status(200).json({ message: "success", data: data });
    console.log("data:", data);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

router.put("/:id", (req, res) => {
  try {
    const categoriesData = fs.readFileSync("categories.json", "utf-8");
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

    fs.writeFileSync("categories.json", JSON.stringify(data));
    res
      .status(200)
      .json({ message: "success", data: data.categoriesData[findIndex] });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", (req, res) => {
  try {
    const categoriesData = fs.readFileSync("categories.json", "utf-8");
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

    fs.writeFileSync("categories.json", JSON.stringify(data));
    res.status(200).json({ message: "success", data: deletedCategory });
  } catch (error) {
    return res.status(400).json({ message: err.message });
  }
});

module.exports = router;
