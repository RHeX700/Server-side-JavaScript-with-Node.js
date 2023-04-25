const lodash = require('lodash');
//import the lodash module


//Create a function to find a maximum value from number array.
function findMaxValue(arr){
  return lodash.max(arr);
}


//Create a function to return all values from numbers array 
//which are greater than the second parameter.​

function filterValues(arr, comp){
  return lodash.filter(arr, (e) => {
    return e > comp;
  })
}


//Create a function to return all values of employeeName array in capital letters.
function nameInCapital(){

}



module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital,
  
}
