// Define a function to calculate the total marks and return a promise 
const calculateTotalMarks = (math,english,science,social,language) =>{
    return new Promise((resolve,reject)=>{
        if(math==undefined || english==undefined || science==undefined || social==undefined || language==undefined){
            reject('Null values for marks');
        }
        resolve(math+ english+science+ social+ language);
        }) 
}
// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) =>{
    return new Promise((resolve,reject)=>{
    resolve(totalMarks/5)
    }) 
}
// Define a function to calculate grade and return a promise
const calculateGrade = (averageMarks)=>{
    return new Promise((resolve,reject)=>{
       if(averageMarks >= 90){
        resolve('A+');
       }else if(averageMarks <=89 && averageMarks >= 80){
        resolve('A');
       }else if(averageMarks <=79 && averageMarks >= 70){
        resolve('B');
       }else if(averageMarks <=69 && averageMarks >= 60){
        resolve('C');
       }else if(averageMarks <=59 && averageMarks >= 50){
        resolve('E');
       }else{
        resolve('F');
       }

        
    
    })   
}

module.exports = {
    calculateAverageMarks,calculateGrade,calculateTotalMarks
}
