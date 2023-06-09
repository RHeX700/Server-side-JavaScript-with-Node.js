const fs = require('fs');
const lodash = require('lodash');
//import all the require module

//Write try and catch and handle the exceptions where ever require
//return the callback with appropriate values in the methods 

//More userdefined methods can be written if required to write the logical stuff

////This method will read the file content the first parameter is filename and 
//second is a callback
 //create array name it as  fileContents
var fileContents = [];
const readFileContents = (fileName, cb) => {
 
   data= fs.readFileSync(fileName);
   fileContents= data.toString().split('\n');
   fileContents.shift();
   if(typeof cb == 'function'){
    return cb(null, fileContents);}
   //push row by row data in the array created

}

// Use Lodash to filter the data this method will take first parameter
//as fileContents and second parameter as a callback
const filterData = (fileContents, cb) => {
  let filteredData = lodash.filter(fileContents, element =>element.payment_method == 'credit');
  console.log(filteredData);
  if(typeof cb == 'function'){
    cb(null, filteredData);}
}

//This method will writeFile data to output.txt file
//it is taking parameters are filteredData and a callback
//filteredata will be given by the filterData method
const writeFilteredDataToFile = (filteredData, cb) => {
  try {
    //use writeFile method and write the filteredData in output.txt file
    fs.writeFileSync('./resources/output.txt', filteredData);
    if(typeof cb == 'function'){
      cb(null, "Successfully wrote filtered data to output.txt file..!");
    }
    
  } catch (err) {}
    
}

readFileContents('./resources/Sales.csv')
module.exports = {
  readFileContents,
  filterData,
  writeFilteredDataToFile
}
