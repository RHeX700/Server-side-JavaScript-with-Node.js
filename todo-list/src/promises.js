const todolist = require('./todolist')

//Define a function that gets all the todos from the 
// todolist array declared asynchronously after 2 seconds
getAllTodos = () => {
    return new Promise((resolve,reject)=>{
        resolve(todolist);
        }) 
    
}
// Define a function to add a todo to the todolist array
createTodo = (todo) => {
   return new Promise((resolve,reject)=>{
    setTimeout(() =>{
    if(todo){
        todolist.push(todo); 
        resolve(todolist);  
    }
    return reject('No data to be added');
    }, 500);
    
   })
}
module.exports ={
    createTodo,getAllTodos
}