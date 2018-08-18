const express = require("express");
const router = express.Router();
const { readFile } = require("./model/model");

const courses = readFile();

//Middleware if want to inject anything in between
router.use((req, res, next) => {
  next();
});

router.get("/", function(req, res) {
  res.send(courses);
});

router.get("/:id", (req, res) => {
  
  const id = parseInt(req.params.id);
  const course = courses.find(c => c.id === id);
  if (!course) {
    res.status(404).send(`ID: ${id} not found`);
    return;
  }
  res.send(course);
});

module.exports = router;
