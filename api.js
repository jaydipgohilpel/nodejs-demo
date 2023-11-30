const express = require("express");
const dbConnection = require("./dbConnection");
const mongodb = require("mongodb");
const app = express();

app.use(express.json());

app.get("/", async (request, response) => {
  const db = await dbConnection();
  const data = await db.find().toArray();
  response.send(data);
});

app.post("/", async (request, response) => {
  const db = await dbConnection();
  const data = await db.insertOne(request.body);
  console.log(data);
  response.send(data);
});

app.put("/:id", async (request, response) => {
  const db = await dbConnection();
  const data = await db.updateOne(
    {
      _id: new mongodb.ObjectId(request.params.id),
      // name: request.body.name,
    },
    { $set: request.body }
  );
  console.log(data);
  if (data.acknowledged) response.send("data updated");
});

app.delete("/:id", async (request, response) => {
  const db = await dbConnection();
  console.log(request.params.id);
  const data = await db.deleteOne({
    _id: new mongodb.ObjectId(request.params.id),
  });
  console.log(data);
  response.send("record deleted");
});

app.listen(4000);
