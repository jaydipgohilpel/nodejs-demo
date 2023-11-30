const dbConnection = require("./dbConnection");

const search = async () => {
  const db = await dbConnection();
  const result = await db
    .find({}, { projection: { _id: 0, name: 1, city: 1 } })
    .toArray();
  console.log("Record List", result);
};
search();
