const dbConnection = require("./dbConnection");

const update = async () => {
  const db = await dbConnection();
  const result = await db.updateMany(
    { name: "dd" },
    { $set: { name: "Mr.India", city: "surat" } },
    function (err, res) {
      if (err) throw err;
      db.close();
    }
  );
  if (result.acknowledged) console.log("Record Updated", result);
};
update();
