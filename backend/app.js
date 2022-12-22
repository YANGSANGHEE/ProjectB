const express = require("express"); // express
const cors = require("cors");
const router = require("./Router/ApiSetGET");


const app = express();
const Port = process.env.Port || 8080;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

app
  .get("/", (req, res) => {
    res.send(`server Start ${Port}`);
  })
  .listen(Port, err => {
    if (err) throw err;
    console.log(`server Start ${Port}`);
  });
