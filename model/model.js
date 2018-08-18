const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "courses.json");


function readFile() {
  return JSON.parse(fs.readFileSync(filePath));
}

function writeFile(courses) {
  fs.writeFileSync(filePath, JSON.stringify(courses));
}

module.exports = { readFile, writeFile };
