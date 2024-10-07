const fs = require('fs');
const path = require('path');

function readJSON(fileName) {
    const filePath = path.join(__dirname, fileName);
    const fileData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileData);
  }

  function writeJSON(fileName, data) {
    const filePath = path.join(__dirname, fileName);
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonData, 'utf-8');
  }


  module.exports = {
    readJSON,
    writeJSON
  };