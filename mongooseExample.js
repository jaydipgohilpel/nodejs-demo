const mongoose = require("mongoose");
const mongodb = require("mongodb");

const saveDb = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/nodejs_demo");
  const InfoSchema = new mongoose.Schema({
    name: String,
    city: String,
  });
  const InfoModel = mongoose.model("temp1", InfoSchema);
  let data = new InfoModel({ name: "m8", city: "surat" });
  let result = await data.save();
  console.log(result);
};
// saveDb();
const updateDb = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/nodejs_demo");
  const InfoSchema = new mongoose.Schema({
    name: String,
    city: String,
  });
  const InfoModel = mongoose.model("temp1", InfoSchema);
  let data = await InfoModel.updateOne(
    {
      _id: new mongodb.ObjectId("653fb6f81308ad88622ecd7c"),
    },
    {
      $set: { name: "dfgjhddgjhlkjk" },
    }
  );
  console.log("updated", data);
};

// updateDb();

const deleteDb = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/nodejs_demo");
  const InfoSchema = new mongoose.Schema({
    name: String,
    city: String,
  });
  const InfoModel = mongoose.model("temp1", InfoSchema);
  let data = await InfoModel.deleteOne({
    name: "dfgjhddgjhlkjk",
  });
  console.log(data);
};
// deleteDb();

const findDb = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/nodejs_demo");
  const InfoSchema = new mongoose.Schema({
    name: String,
    city: String,
  });
  const InfoModel = mongoose.model("temp1", InfoSchema);
  let data = await InfoModel.find({ city: "surat" });
  console.log(data);
};
findDb();
