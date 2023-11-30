const http = require("http");
const data = require("./data");
const express = require("express");
const app = express();
const reqFilter = require("./middleware/simpleMiddleware");
const route = express.Router();
const dbConnection = require("./dbConnection");

route.use(reqFilter);

const main = async () => {};
main();
// app.use(reqFilter);

// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "Content-Type": "application/json" });
//     // resp.write(JSON.stringify(data));
//     resp.end();
//   })
//   .listen(4000);

// file operation
const input = process.argv;
// const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "file-crud");
// for (i = 0; i <= 5; i++) {
//   fs.writeFileSync(dirPath + "/test" + i + ".txt", "test text " + i);
// }
// fs.readdir(dirPath, (err, files) => {
//   console.log(files);
// });

// asynchronous
// let promise = new Promise((resolve, reject) => {
//   resolve(22222);
// });

// promise
//   .then((data) => {
//     console.log("resolve", data);
//   })
//   .catch((data) => {
//     console.log("reject", data);
//   });

app.get("", (req, resp) => {
  // console.log("req", req.query);
  // resp.send(JSON.stringify(req.query));
  // resp.send("welcome " + req.query.name);
  resp.send(data);
});

app.get("/about", (req, resp) => {
  resp.send("this is About Page");
});
// app.set("view engine", "ejs");
// app.get("/profile", (_, resp) => {
//   const user = {
//     name: "jaydip",
//     id: 2141,
//   };
//   resp.render("profile", { user });
// });

route.get("/blog", (req, resp) => {
  resp.send("this is/blog Page");
});
route.get("/video", (req, resp) => {
  resp.send("this is video Page");
});

app.use("/", route);
app.listen(4000);
