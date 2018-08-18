const express = require("express");
require("dotenv").config();

const getApi = require("./get-courses");
const postApi = require("./post-courses");
const login = require("./login/login-controller");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Hello ${process.env.USER_NAME}</h1>`);
});

app.use("/api/courses", getApi);
app.use("/api/courses", postApi);
app.use("/api/login", login);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
