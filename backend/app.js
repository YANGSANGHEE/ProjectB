<<<<<<< HEAD
const express = require('express') // express
const cors = require('cors')
const request = require('request')
const router = require('./Router/ApiSetGET')
=======
const express = require("express"); // express
const cors = require("cors");
const router = require("./Router/ApiSetGET");
const postrouter = require("./Router/ApiSetPOST");
const cctvrouter = require("./Router/CctvSetGET");
>>>>>>> origin/CCTV
const app = express();
const Port = process.env.Port || 8080;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);
app.use("/post", postrouter);

app.get("/cctv", cctvrouter);
app
  .get("/", (req, res) => {
    res.send(`server Start ${Port}`);
  })
  .listen(Port, err => {
    if (err) throw err;
    console.log(`server Start ${Port}`);
  });
