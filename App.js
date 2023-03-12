// console.log("OB");

// const body = { name: "naraa", age: 23 };

// const keys = Object.keys(body);
// const values = Object.values({ name: "naraa" });
// const ob = Object.entries(body);

// console.log(keys);
// console.log(values);

// const a = keys.map((key) => `${key}=${body[key]}`);
// const b = a.join();
// console.log(a);
// console.log(b);
// 1. UPDATE azure_user SET name="NARAA", ovog="JON" WHERE aid=1;
// let name = "naraa";
// let ovog = "JOIN";
// let id = 1;
// 2. `UPDATE azure_user SET name="${name}", ovog="${ovog}" WHERE aid=${id}`;
// const body = { name: "naraa", ovog: "JON" };

// name = body.name;
// ovog = body.ovog;
// id = 1;
// 3. `UPDATE azure_user SET name="${name}", ovog="${ovog}" WHERE aid=${id}`;
// const {name, ovog} = body;
// let id=1;
// 4. `UPDATE azure_user SET name="${name}", ovog="${ovog}" WHERE aid=${id}`;
// const {ovog}= {  ovog: "JON" };
// let id=1;
// 5. `UPDATE azure_user SET ovog="${ovog}" WHERE aid=${id}`;
// const { name } = { name: "naraa" };
// let id=1;
// 6. `UPDATE azure_user SET name="${name}" WHERE aid=${id}`;

//name="Naraa", ovog="JON" ||  ovog="${ovog}" || name="${name}"

// updateQuery = 'name="Naraa", ovog="JON"';
// updateQuery = ' ovog="JON"';
// updateQuery = ' name=""';
6; // `UPDATE azure_user SET ${updateQuery} WHERE aid=${id}`;

//  { name: "naraa", ovog: "JON" }
// const convertToStr = (body) => {
//   const keys = Object.keys(body); //keys: ["name","ovog"]
//   const values = Object.values(body); //keys: ["name","ovog"]
//   const dd = keys.map((key) => `${key}='${body[key]}'`).join();
//   return dd;
// };
// const body = { name: "naraa", ovog: "JON", age: 100, address: "BZD" };
// const updateQuery = convertToStr(body);
// console.log("DD: ", updateQuery);

 // `UPDATE azure_user SET ${updateQuery} WHERE aid=${id}`;
// const body = { name: "naraa", age: 23 };
// const keys = Object.values(body);
// const values = Object.values({ name: "naraa" });
// const ob = Object.entries(body);

// console.log(keys);
// console.log(values);