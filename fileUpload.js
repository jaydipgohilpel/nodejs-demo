const express = require("express");
const multer = require("multer");


const app = express();

// app.use(express.json());
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads")
    },
    filename: function (req, file, cb) {
      cb(null, file.filename + "-" + Date.now() + ".jpg")
    }
  })
}).single("user_file")

app.post("/upload", upload, async (req, resp) => {

  resp.status(200).json("file uploads");
});


app.listen(4000);
