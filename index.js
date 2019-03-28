const express = require("express");
const multer = require("multer");

const app = express();

const upload = multer({
	dest: './uploads',
	fileFilter: (req, file, cb) => {
		console.log("req.body")
		console.log(req.body)
		cb(null, true)
	}
}).any();

app.post("/", upload, (req, res) => res.status(200).end());

app.get("*", (req, res) => {
  return res.status(200).end();
});

app.listen(3000, err => {
  if (err) throw err;
  console.log(`> Uploader Server Ready on http://localhost:${3000}`);
});
