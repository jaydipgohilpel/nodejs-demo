const express = require("express");
require("./mongooseConfig");
const Info = require("./infoSchema");
const Persons = require("./personsSchema");
// const { MongoClient } = require('mongodb');
// const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string
// const client = new MongoClient(uri);
// const myDB = client.db("nodejs_demo");

const app = express();

app.use(express.json());

app.post("/create", async (req, resp) => {
  const data = new Info(req.body);
  const result = await data.save();

  resp.status(200).json(result);
});

app.get("/list", async (req, resp) => {
  const result = await Info.find();

  resp.status(200).json(result);
});

app.get("/delete/:_id", async (req, resp) => {
  const result = await Info.deleteOne(req.params);
  resp.status(200).json(result);
});

app.put("/update/:_id", async (req, resp) => {
  const result = await Info.updateOne(req.params, { $set: req.body });
  resp.status(200).json(result);
});

app.get("/search/:key", async (req, resp) => {
  const result = await Info.find({
    $or: [
      { name: { $regex: req.params.key } },
      { city: { $regex: req.params.key } },
    ],
  });

  resp.status(200).json(result);
});

app.get("/test", async (req, resp) => {
  const result = {
    productList: await Product.find(),
    userList: await User.find(),
    infoList: await Info.find(),
  }


  // Group orders by status within the last week
  // const aggregateResult =await Product.aggregate([
  //   {
  //     $match: {
  //       price: {
  //         $gte: 25,
  //         $lt:200000,
  //       },
  //     },
  //   },
  //   {
  //     $group: {
  //       _id: "$user_id",
  //       count: {
  //         $sum: 1,
  //       },
  //     },
  //   },
  // ]);
  // for await (const doc of aggregateResult) {
  //   console.log(doc);
  // }


  // const cursor = Product.find({});
  // for await (const doc of cursor) {
  //   console.log(doc);
  // }


  const cursor = Product.find({});
  console.log("async");
  for await (const doc of cursor) {
    console.log(doc);
  }
  resp.status(200).json(await cursor);

});





async function testfunction() {
  //   db.user.aggregate([{ $match: { gender: 'male' } }, { $group: { _id: "$age", data: { $push: "$$ROOT" } } }]);
  //   db.user.aggregate([{ $match: { gender: 'male' } }, { $group: { _id: "$age", number: { $sum: 1 } } }, { $sort: { number: -1 } }]);
  //   db.user.aggregate([{ $unwind: "$email" }, { $group: { _id: "$age", email: { $push: "$email" } } }])
  //   db.user.aggregate([{ $group: { _id: null, average: { $avg: "$age" } } }])
  //   db.user.aggregate([{ $unwind: "$age" }, { $group: { _id: null, allAge: { $addToSet: "$age" } } }])


  //   db.user.updateMany(
  //     { age: { $gt: 0, $lt: 20 } }, // Filter conditions: documents where 'age' > 30, 'age' < 50, and 'isActive' is true
  //     { $set: { scores: [40, 95, 49, 60, 55, 59, 84] } } // Set operation to update 'status' and 'role' fields
  //   );
  // db.user.updateMany(
  //   {},
  //   { $set: { is_active: true, is_deleted: false } }
  // );
  // db.user.updateMany(
  //   { age: { $lt: 18 } }, // Condition: documents where 'age' is greater than 30
  //   { $set: { is_active: false } } // Set operation to update the 'status' field
  // );

  //   db.user.aggregate([
  //     {
  //       $group: {
  //         _id: null,
  //         ageScore: {
  //           $avg: {
  //             $filter: {
  //               input: "$scores",
  //               as: "score",
  //               cond: { $gt: ["$age", 0] }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   ]);

  // const cursor = Product.find({});
  // const allValues = await cursor;
  // db.user.aggregate([{ $match: { $and: [{ gender: "female" }, { age: { $lt: 25 } }] } }]);
  // db.user.aggregate([
  //   { $group: { _id: "$age" } }
  // ])
  // db.user.aggregate([{ $group: { _id: "$gender", count: { $sum: 1 } } }])

  // db.user.aggregate([{ $group: { _id: "$age", gender: { $push: "$gender" } } }])
  // db.user.aggregate([{ $group: { _id: "$gender", age: { $push: "$age" } } }])

  // not add duplicate value in gender field
  // db.user.aggregate([{ $group: { _id: "$age", gender: { $addToSet: "$gender" } } }])
  // db.user.aggregate([{ $group: { _id: "$gender", age: { $addToSet: "$age" } } }])
  // db.user.aggregate([{ $group: { _id: "$age" } }])


  //its give name onf mobile number of all user who have O+ blood groups
  // db.user.aggregate([
  //   { $match: { bloodGroup: "O+" } },
  //   {
  //     $group: {
  //       _id: "$bloodGroup",
  //       count: { $sum: 1 },
  //       phone: {
  //         $push: {
  //           $concat: [
  //             "$firstName",
  //             " - ",
  //             "$phone"
  //           ]
  //         }
  //       }
  //     }
  //   }
  // ]);

  // db.user.aggregate([{ $group: { _id: "$company.address.coordinates" } }])
  // db.user.aggregate([{ $group: { _id: { age: "$age", gender: "$gender", bloodGroup: "$bloodGroup" } } }])
  // let girls = await User.aggregate([
  //   {
  //     $match: {
  //       $and: [
  //         { gender: "female" },
  //         { age: { $lt: 30 } }
  //       ]
  //     }
  //   },
  //   {
  //     $group: {
  //       // gender: "$gender"
  //       _id: { age: "$age" },
  //       count: { $sum: 1 },
  //       phone: {
  //         $push: {
  //           $concat: [
  //             "$firstName",
  //             " ",
  //             "$lastName",
  //             "phone: ",
  //             "$phone",
  //             ",",
  //             "address:",
  //             "$address.address", ",city:", "$address.city", ",state:", "$address.state"
  //           ]
  //         }
  //       }
  //     }
  //   }
  // ]);

  //second type of stage re-older
  // girls = await User.aggregate([

  //   {
  //     $group: {
  //       _id: { age: "$age", gender: "$gender" },
  //       count: { $sum: 1 },
  //       phone: {
  //         $push: {
  //           $concat: [
  //             "$firstName",
  //             " ",
  //             "$lastName",
  //             "phone: ",
  //             "$phone",
  //             ",",
  //             "address:",
  //             "$address.address", ",city:", "$address.city", ",state:", "$address.state"
  //           ]
  //         }
  //       }
  //     }
  //   },
  //   {
  //     $match: {
  //       $and: [
  //         { "_id.gender": "female" },
  //         { "_id.age": { $lt: 30 } }
  //       ]
  //     }
  //   },
  // ]);

  // $count
  // let count = await User.aggregate([
  //   { $count: "allDocumentCount" }
  // ])

  // console.log("result", count);
  // console.log(
  //   await User.aggregate([{ $count: "total" }])
  // );

  // console.log(await User.find({}))


  // console.log(
  //   await User.aggregate([
  //     { $match: { age: { $lt: 30 } } },
  //     { $group: { _id: { eyeColor: "$eyeColor", age: "$age" } } },
  //     { $count: "eyeColorAndAge" },
  //   ])
  // );


  // $sort


  // { $match: { $and: [{ age: { $lt: 30 }, gender: "female" }] } },
  // console.log(await User.aggregate([
  //   { $sort: { age: -1, gender: -1, eyeColor: -1 } }
  // ])
  // )
  // console.log(await User.aggregate([
  //   { $match: { gender: "female" } },
  //   { $group: { _id: { age: "$age", bloodGroup: "$bloodGroup", gender: "$gender" } } },
  //   { $sort: { "_id.age": 1 } },
  //   { $skip: 0 }
  // ])
  // )

  // $project
  // console.log(
  //   await Persons.aggregate([
  //     // { $project: { address: 0, company: 0, bank: 0, userAgent: 0, image: 0 } },
  //     {
  //       $project: {
  //         bloodGroup: 1, phone: 1, email: 1,
  //         user: {
  //           firstName: "$firstName", lastName: "$lastName",
  //           userName: "$username",
  //         }
  //       },
  //     },
  //   ])
  // )

  // $unwind
  // console.log(
  //   await Persons.aggregate([
  //     { $unwind: "$scores" },
  //     { $project: { _id: 0, scores: 1, id: 1, age: 1, gender: 1 } },
  //     { $limit: 7 },
  //     { $sort: { id: 1 } }
  //   ])
  // )

  //  Accumulators 
  // console.log(
  //   await Persons.aggregate([
  //     {
  //       $project: {
  //         _id: 0,
  //         //  id: 1, firstName: "$firstName",
  //         total: { $sum: "$scores" },
  //         avg: { $avg: "$scores" }
  //       }
  //     },
  //     { $sort: { total: -1 } }
  //   ])
  // )

  // $sum
  // console.log(
  //   await Persons.aggregate([
  //     { $unwind: "$tags" },
  //     { $group: { _id: "$tags", count: { $sum: 1 } } },
  //   ])
  // )

  // $avg
  // console.log(
  //   await Persons.aggregate([
  //     {
  //       $group: {
  //         _id: "$company.address.city",
  //         avgAge: { $avg: "$age" },
  //         // count: { $sum: 1 }
  //       }
  //     },
  //     {
  //       $project: {
  //         _id: 1,
  //         // count: 1,
  //         avgAge: { $round: ["$avgAge", 2] } // Round the average age to two decimal places
  //       }
  //     }
  //   ])

  // );

  //unary operator
  // $typ

  console.log(
    await Persons.aggregate([
      {
        $project: {
          _id: 1,
          firstName: 1,
          nameType: { $type: "$firstName" },
          ageType: { $type: "$age" },
          weightType: { $type: "$weight" },
          heightType: { $type: "$height" },
          companyType: { $type: "$company" },
          scoresType: { $type: "$scores" },
          tagsType: { $type: "$tags" },
          is_activeType: { $type: "$is_active" },
        }
      }
    ])
  );
}

// db.user.aggregate([{ $group: { _id: "$firstName", total: { $sum: "$age" }, count: { $sum: 1 } } }])
// db.user.aggregate([{ $match: { age: { $gt: 10 } } }])
testfunction();
app.listen(4000);
