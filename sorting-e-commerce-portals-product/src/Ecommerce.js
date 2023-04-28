const fs = require('fs');
const readline = require('readline');
const lodash = require('lodash');
//import all the require modules

//write try catch to hanlde the exceptions

//More userdefined methods can be written if required to write the logical stuff

//return the callback with appropriate data where ever require in all the methods

//This method will read the file it takes two parameters first the fileName 
//and second the callback
const readFileContents = (fileName, cb) => {
  fileContents= new Array();
  rl = readline.createInterface({
    input : fs.createReadStream(fileName),
    terminal : false
  });

  rl.on('error', () => {
    cb("Encountered error while reading file contents..!");
  });

  rl.on('line', line => {fileContents.push(line)});
  rl.on('close', () =>{
    fileContents.shift();
    cb(null, fileContents);
  });
}

//This method will sortDataonprice it will take two parameters one is fileContent
//second the callback
const sortDataOnPrice = (fileContents, cb) => {
  //use lodash.sortBy()
  sortedData= lodash.sortBy(fileContents, o => parseFloat(o.retail_price));

  cb(null, sortedData);
}

//This method will sortDataonRating 
const sortDataOnRating = (fileContents, cb) => {
//use map where ever required 
fileC = lodash.filter(fileContents, element => element.product_rating != 'No rating available')
  
//use lodash sortBy() and compact() if required
sortedData = lodash.sortBy(fileC, o => parseInt(o.product_rating));

  //use lodash.reverse() if required
  cb(null, lodash.reverse(sortedData));
}

//This method will write the sortedData in the output file
const writeSortedDataToFile = (outputFileName, sortedData, cb) => {
 
}





module.exports = {
    readFileContents,
    sortDataOnPrice,
    sortDataOnRating,
  
}