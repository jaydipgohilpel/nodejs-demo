const dbConnection = require("./dbConnection");

const insert = async () => {
  const db = await dbConnection();
  // const result = await db.insert({
  //   name: "xyzcav",
  //   city: "surat",
  // });
  // console.log(db.insert({}));
  var payload = [{ name: "Company Inc", city: "Highway 38" }];
  const result = await db.insertMany(payload);
  if (result.acknowledged) console.log("Record Inserted", result);
};
insert();
