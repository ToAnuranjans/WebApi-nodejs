const express = require("express");
const router = express.Router();
const { readFile, writeFile } = require("./model/model");

const courses = readFile();

router.post("/", (req, res) => {
  const index = courses.length + 1;
  const newCourse = {
    id: index,
    name: req.body.name + index
  };

  courses.push(newCourse);

  writeFile(courses);
  res.send(newCourse);
});

router.put("/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(400).send(`ID: ${id} not found`);
    return;
  }
  course.name = req.body.name;

  writeFile(courses);
  res.send(course);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(c => c.id === id);
  if (!course) {
    res.status(400).send(`ID: ${id} not found`);
    return;
  }
  courses.splice(courses.indexOf(course), 1);

  writeFile(courses);

  res.send(course);
});

module.exports = router;
