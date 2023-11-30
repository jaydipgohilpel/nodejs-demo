const express = require("express");
require("./mongooseConfig");
const Info = require("./infoSchema");

const app = express();

app.use(express.json());

app.post("/create", async (req, resp) => {
  // console.log(req.body);
  const data = new Info(req.body);
  const result = await data.save();
  console.log(result);

  resp.status(200).json(result);
});

app.get("/list", async (req, resp) => {
  const result = await Info.find();
  console.log(result);

  resp.status(200).json(result);
});

app.get("/delete/:_id", async (req, resp) => {
  console.log(req.params);
  const result = await Info.deleteOne(req.params);
  console.log(result);
  resp.status(200).json(result);
});

app.put("/update/:_id", async (req, resp) => {
  console.log(req.params);
  const result = await Info.updateOne(req.params, { $set: req.body });
  console.log(result);
  resp.status(200).json(result);
});

app.get("/search/:key", async (req, resp) => {
  const result = await Info.find({
    $or: [
      { name: { $regex: req.params.key } },
      { city: { $regex: req.params.key } },
    ],
  });
  console.log(req.params.key);

  resp.status(200).json(result);
});

app.listen(4000);
