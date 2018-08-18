const express = require("express");
const { validate } = require("../model/user-model");

const router = express.Router();

router.post("/", (req, res) => {
  const { error, value } = validate(req.body);
  if (error) {
    res.send(error.details[0].message);
    return;
  }
  res.send(value);
});

module.exports = router;
