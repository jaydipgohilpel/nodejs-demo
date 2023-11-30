const database = "nodejs_demo";
const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const connection = new MongoClient(url);

async function dbConnection() {
  let result = await connection.connect();
  let db = result.db(database);

  return db.collection("temp1");    
  // let response = await collection.find({}).toArray();
  // console.log(response);
}
// dbConnection().then((res) => {
//   res
//     .find()
//     .toArray()
//     .then((data) => {
//       console.warn(data);
//     });
// });
// dbConnection();
module.exports = dbConnection;
