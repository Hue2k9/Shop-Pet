const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const methodOverride = require("method-override");
const cookies = require("cookie-parser");
const app = express();
app.use(express.json());

const router = require("./Routes/index");
const db = require("./config/db")();
app.use(methodOverride("_method"));
app.use("/static", express.static("public"));
app.use(cookies());

app.use(express.static(path.join(__dirname, "public")));

app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");

router(app);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port http://localhost:${process.env.PORT}`);
});
