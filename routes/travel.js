const { Router } = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const router = Router();

router.post("/", (req, res)=>{
    try{
        const travels = fs.readFileSync("travel.json", "utf-8");
        const data = JSON.parse(travels);
        const newData ={...req.body};
        data.travel.push(newData);
        fs.writeFileSync("travel.json", JSON.stringify(data));
        res.status(201).json({message: "travel amjilttai burtgegdlee", data: newData})
    }catch(err){
        return res.status(400).json({message: err.message});
    }
    res.json({});
});
router.get("/", (req, res) => {
    try {
      const travels = fs.readFileSync("travel.json", "utf-8");
      const data = JSON.parse(travels);
      res.status(200).json({ message: "success", data: data });
      console.log("data:", data);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  });

module.exports = router;
