const fs = require("fs");
const { reject } = require("lodash");
// import the lodash library
const lodash = require("lodash");
const readline = require('readline');

// Read the file data and return the data in the resolved Promise
const read = (fileName) => {
  return new Promise((resolve, reject) => {
    let data = '';
    rl = readline.createInterface({
      input : fs.createReadStream(fileName),
      output : process.stdout,
      terminal : false
    });

    rl.on('line', line => {
      data += line;
    });

    rl.on('close', () => {
      resolve(data);
    });

  });
};
// Define a function to Convert the file content to upper case and return the result in the resolved Promise
const convertToUpperCase = (fileContents) => {
  return new Promise((resolve, reject) => {});
};
// Define a function to read and convert the file contents, use the then and catch blocks here
const readAndConvertFileContents = (fileName, cb) => {
  try{
    fileContents = fs.readFileSync(fileName).toString().split(',');

  }catch(err){
    cb("Encountered error while reading file contents..!")
  }
    fC = fileContents.map(m => m.toUpperCase());
    cb(null, fC);
};

module.exports = {
  readAndConvertFileContents,
};
