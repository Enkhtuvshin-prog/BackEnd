const fs = require("fs");

//  const createWishlist = (req, res) => {
//       try {
//         const content = fs.readFileSync("./data/wishlist.json", "utf-8");
//         const data = JSON.parse(content);
//         const newData = { ...req.body };
//         data.categories.push(newData);
//         fs.writeFileSync("./data/wishlist.json", JSON.stringify(data));
//         res.status(201).json({ message: "amijilttai uuseglee", data: newData });
//       } catch (err) {
//         return res.status(400).json({ message: err.message });
//       }
//       res.json({});
//     };

const getWishlist = (req, res) => {
  try {
    const wishlist = fs.readFileSync("./data/wishlist.json", "utf-8");
    const data = JSON.parse(wishlist);
    res.status(200).json({ message: "success", data: data });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const deleteWishlist = (req, res) => {
  try {
    const { id } = req.params;
    const data = fs.readFileSync("./data/wishlist.json", "utf-8");
    const parsedData = JSON.parse(data);
    const findIndex = parsedData.wishlist.findIndex((el) => el.id === id);
    if (findIndex == -1) {
      return res.status(402).json({ message: "iim id tai wishlist bhgui bn" });
    }
    parsedData.wishlist.splice(findIndex, 1);
    fs.writeFileSync("./data/wishlist.json", JSON.stringify(parsedData));
    res
      .status(201)
      .json({ message: `${id} тай category амжилттай устгагдлаа.` });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { getWishlist, deleteWishlist };