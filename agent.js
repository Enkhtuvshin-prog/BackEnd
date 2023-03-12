const connection = require("./config/db");
const fs = require("fs");
const insertAgent =(tablename, data)=>{
    connection.query(
        `INSERT INTO agent (id, user_name, agent_name, password, role, phone_number) VALUES${data};`, (err, result)=>{
            if(err){
                console.log("ERROR", err);
                return;
                // return res.status(400).json({message: err.message});
            }
            console.log("SUCCESS", result);
            // res.status(200).json({message: "SUCCESS" , data: result})
        }
    )

}

const content = fs.readFileSync("./data/agent.json", "utf-8");
const datas = JSON.parse(content).agent;
console.log("datas==", datas);
const insertData = datas.map((data)=>`(${data.id}, "${data.user_name}","${data.agent_name}" , "${data.password}", "${data.role}", "${data.phone_number}" )`).join();
insertAgent( "agent", insertData);
console.log("===", insertData);