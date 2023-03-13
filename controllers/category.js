const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const connection = require("../config/db")

const allgetCategories=(req, res)=>{
  connection.query(
    `SELECT * FROM category`, (err, result)=>{
      if(err){
        res.status(400).json({message: err.message})
      }
      res
      .status(201)
      .json({ message: "SUCCESS", data: result });
    
    }
  )
}
const createCategory = (req, res) => {
  const {title, image, description, agent_id} = req.body
  const query = `INSERT INTO category (id, title, image, description, agent_id) VALUES (null, ?, ?, ?, ?)`
connection.query(query, [title, image, description, agent_id ], (err, result)=>{
  if(err){
     return res.status(400).json({ message: err.message });

  }
  res
  .status(201)
  .json({ message: "Шинэ category амжилттай бүртгэгдлээ." });
})
//   try {
//     const content = fs.readFileSync("./data/categories.json", "utf-8");
//     const data = JSON.parse(content);
//     const newData = { ...req.body };
//     data.categories.push(newData);
//     fs.writeFileSync("./data/categories.json", JSON.stringify(data));
//     res.status(201).json({ message: "amjilttai uuseglee", data: newData });
//   } catch (err) {
//     return res.status(400).json({ message: err.message });
//   }
//   res.json({});
};

const getCategory = (req, res) => {
  const {id} = req.params;
  connection.query(`SELECT * FROM category WHERE id = ${id}`, (err, result)=>{
    if(err){
      return res.status(400).json({message: err.message})
    }
    res.status(200).json({ message: "success", data: result });
  } )
};

const updateCategory = (req, res) => {
  const {id} = req.params;
  const body =req.body;
  const convertToStr= (body)=>{
    const keys = Object.keys(body);
    const b = keys.map((key)=> `${key}= '${body[key]}'`).join();
    return b;
  }
  const catQuery = convertToStr(body);
  connection.query(
    `UPDATE category  SET ${catQuery} WHERE id =${id}`, (err, result) =>{
      if(err){
        return res.status(400).json({ message: err.message });
      }
      res.status(201).json({
        message: "Шинэ category өгөгдөл амжилттай солигдлоо." + id,
        data: result,
    })
  }
  )
  // try {
  //   const categoriesData = fs.readFileSync("./data/categories.json", "utf-8");
  //   console.log("CC", categoriesData);
  //   const data = JSON.parse(categoriesData);
  //   console.log("DD", data);
  //   const findIndex = data.categoriesData.findIndex(
  //     (el) => el.id === req.params.id
  //   );

  //   if (findIndex === -1) {
  //     return res.status(404).json({ message: "not found", data: null });
  //   }

  //   data.categoriesData[findIndex] = {
  //     ...data.categoriesData[findIndex],
  //     ...req.body,
  //   };

  //   fs.writeFileSync("./data/categories.json", JSON.stringify(data));
  //   res
  //     .status(200)
  //     .json({ message: "success", data: data.categoriesData[findIndex] });
  // } catch (err) {
  //   return res.status(400).json({ message: err.message });
  // }
};

const deletedCategory = (req, res) => {
  const {id}= req.params;
  connection.query(`DELETE FROM category WHERE id =${id}`, (err, result)=>{
    if(err){
      return res.status(400).json({message: err.message});
    }
    res.status(200).json({message:"SUCCESS" ,data:result})
  })
  // try {
  //   const categoriesData = fs.readFileSync("./data/categories.json", "utf-8");
  //   console.log("CC", categoriesData);
  //   const data = JSON.parse(categoriesData);
  //   console.log("DD", data);
  //   const findArr = data.categoriesData.filter((el) => el.id !== req.params.id);
  //   const deletedCategory = data.categoriesData.find(
  //     (el) => el.id === req.params.id
  //   );

  //   if (!(findArr.length > 0)) {
  //     return res.status(404).json({ message: "not found", data: null });
  //   }

  //   data.categoriesData = findArr;

  //   fs.writeFileSync("./data/categories.json", JSON.stringify(data));
  //   res.status(200).json({ message: "success", data: deletedCategory });
  // } catch (error) {
  //   return res.status(400).json({ message: err.message });
  // }
};

const getBycat = (req, res)=>{
  const {id}=req.params;
  connection.query (
    `SELECT * FROM travel WHERE cat_id =(SELECT id FROM category WHERE id = ${id}) `, (err, result)=>{
      if(err){
        return res.status(400).json({message: err.message})
      }
      res.status(200).json({ message: "success", data: result });
    } )
}

module.exports = {
  allgetCategories,
  createCategory,
  getCategory,
  updateCategory,
  deletedCategory,
  getBycat
};
