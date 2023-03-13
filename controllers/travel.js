const fs = require("fs");
const connection = require("../config/db")
// const { v4: uuidv4 } = require("uuid");
const filePath = "./data/travel.json";
const getTravels = (req, res) => {
  connection.query(`SELECT * FROM travel`, (err, result)=>{
    if(err){
      res.status(400).json({message: err.message})
    }
    res
    .status(201)
    .json({ message: "SUCCESS", data: result });
  })
  // try {
  //   const travels = fs.readFileSync(filePath, "utf-8");
  //   const data = JSON.parse(travels);
  //   res.status(200).json({ message: "success", data: data });
  //   console.log("data:", data);
  // } catch (err) {
  //   return res.status(400).json({ message: err.message });
  // }
};
const createTravel = (req, res) => {
  const { title, image, detail, price, location, day, cat_id} = req.body;
  const query=`INSERT INTO travel (id, title, image, detail, price, location, day, cat_id) VALUES(null, ?, ?, ?, ?, ?, ?, ?)`;
  connection.query(query , [title, image, detail, price, location, day, cat_id], (err, result)=>{
    if(err){
      res.status(400).json({message: err.message})
    }
    res
    .status(201)
    .json({ message: "SUCCESS", data: result });

  } )
  // try {
  //   const travels = fs.readFileSync(filePath, "utf-8");
  //   const data = JSON.parse(travels);
  //   const newData = { ...req.body };
  //   data.travel.push(newData);
  //   fs.writeFileSync(filePath, JSON.stringify(data));
  //   res
  //     .status(201)
  //     .json({ message: "travel amjilttai burtgegdlee", data: newData });
  // } catch (err) {
  //   return res.status(400).json({ message: err.message });
  // }
  // res.json({});
};
const updateTravel = (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const convertToStr =(body)=>{
    const datas = Object.keys(body);
    const travel=datas.map((data)=>  `${data}= "${body[data]}"`);
    return travel;

  }
  const updateQuery = convertToStr(body);
  connection.query(`UPDATE travel SET ${updateQuery} WHERE id = ${id}`, (err,result)=>{
  if(err){
    res.status(400).json({message: err.message})
  }
  res
  .status(201)
  .json({ message: "SUCCESS", data: result });
  }
  )
  // const data = fs.readFileSync(filePath, "utf-8");
  // const parsedData = JSON.parse(data);
  // const findIndex = parsedData.users.findIndex((el) => el.id === id);
  // parsedData.users.splice(findIndex, 1);
  // fs.writeFileSync(filePath, JSON.stringify(parsedData));
  // res.status(201).json({ message: `${id} hereglegch amjilttai ustlaa ` });
};

const deleteTravel = (req, res)=>{
  connection.query(`DELETE FROM travel WHERE id = ${req.params} `, (err, result)=>{
    if(err){
      res.status(400).json({message: err.message})
    }
    res
    .status(201)
    .json({ message: "SUCCESS", data: result });
  
  } )
}



const getTravelsByCategory = (req, res) => {
  const {id} = req.params;
  connection.query(
    `SELECT * FROM travel WHERE id =${id}`, (err, result)=>{
      if(err){
        res.status(400).json({message: err.message})
      }
      res
      .status(201)
      .json({ message: "SUCCESS", data: result });
    
    } 
  )
  // const category = req.params.travel;
  // const data = fs.readFileSync(filePath, "utf-8");
  // const parsedData = JSON.parse(data);
  // const findCategories = parsedData.travels.filter(
  //   (el) => el.category === category
  // );
  // res.status(201).json({ message: `success`, data: findCategories });
};

module.exports = {
  createTravel,
  getTravels,
  updateTravel,
  deleteTravel,
  getTravelsByCategory,
};
