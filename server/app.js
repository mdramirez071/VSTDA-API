const express = require('express');
const morgan = require('morgan');
const app = express();
const fs = require('fs');
// const { Console } = require('console');
// const output = fs.createWriteStream('./stdout.log');
// const errorOutput = fs.createWriteStream('./stderr.log');
// // Custom simple logger
// const logger = new Console({ stdout: output, stderr: errorOutput });
// use it like console
// add your routes and middleware below
app.use(morgan('dev')); //morgan is the middleware in this case
const dataArray = 
[
    {
      todoItemId: 0,
      name: 'an item',
      priority: 3,
      completed: false
    },
    {
      todoItemId: 1,
      name: 'another item',
      priority: 2,
      completed: false
    },
    {
      todoItemId: 2,
      name: 'a done item',
      priority: 1,
      completed: true
    }
];

app.get('/', (req, res) => {
    // write your code to respond "ok" here
    var checkStatus = {
        status: "ok"
    }
    res.status(200).send(checkStatus);

    });
    //GET request that responds with all "ToDoItems"
    app.get('/api/TodoItems', (req, res) => {
        // write your code to respond "ok" here
        res.status(200).json(dataArray);
        });

        //POST request that creates a new single ToDoItem and Adds it to Object dataArray;
        app.post('/api/TodoItems/', (req, res) => {
          let newItem = {
            todoItemId: 0,
            name: 'an item',
            priority: 3,
            completed: false
          }
          dataArray.push(newItem);
          res.status(201).send(newItem);      
          
          });

          //DELETE REQUEST that grabs a specific todoItemId number and deletes it from dataArray.
           app.delete("/api/TodoItems/:number", (req, res) => {
            let number = req.params.number;
            let index = dataArray.findIndex(id => id.todoItemId==number);
            //logger.log(number);
            res.status(200).send(dataArray[index]);
            });

          //GET REQUEST that grabs a specific ToDoItem using
          //its index in the array to compare to the actual value of the ToDoItem:Number
        app.get("/api/TodoItems/:number", (req,res)=>{
          let number = req.params.number;
          let index = dataArray.findIndex(id => id.todoItemId==number);
          //logger.log(number);
          res.status(200).send(dataArray[index]);
        });

  
module.exports = app;





//OLD CODE FOR TEST #3 POST REQUEST STATUS CODE
// //POST Request that responds with item, status 201
// app.post('/api/TodoItems/', (req, res) => {
//   // write your code to respond "ok" here
//   for (const key in dataArray) {
    
//     console.log(key);
//     res.status(201).send(dataArray[key]);      
      
//   }
 
//   });