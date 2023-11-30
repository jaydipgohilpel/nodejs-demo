const dbConnection = require("./dbConnection");

const deleteData = async () => {
  const db = await dbConnection();
  const result = await db.deleteMany({ name: "exjd" });
  console.log(result);
};
deleteData();
