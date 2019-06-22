const express = require('express');
const morgan = require('morgan');
const app = express();
const fs = require('fs');
const { Console } = require('console');
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// Custom simple logger
const logger = new Console({ stdout: output, stderr: errorOutput });
// use it like console
var index;
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
    var status = {
        status: "ok"
    }
    res.status(200).send(status);
    });
    //GET request that responds with all "ToDoItems"
    app.get('/api/TodoItems', (req, res) => {
        // write your code to respond "ok" here
        res.status(200).send(dataArray);
        });

    app.get('/api/TodoItems', (req, res) => {
        // write your code to respond "ok" here
        res.status(200).send(dataArray[index]);
        });
    
        //Create Two For Loops that compares the last character in a URL which is an ACTUAL number that references the index
        //Then COMPARE that # to the value within the Object (i.e.  todoItemId: 2,)
        //Inside of the nested for loop create an "if statement" that says if these numbers
        //are EQUAL to each other then store that number into a global variable called index;
        //once that is DONE EDIT LINE 49 to SEND BACK THE CORRECT INDEX.
        var Resource = req.url;



    // //POST Request that responds with item, status 201
    //   app.post('/api/TodoItems/', (req, res) => {
    //         // write your code to respond "ok" here
    //     for(let i = 0; i < dataArray.length; i++){
    //       var dataArrKey;
    //         for (const key in dataArray) {
    //             dataArrKey = dataArray[key];
    //           if(dataArray[i] === dataArray[key])
    //           {
    //             logger.log(dataArray[key]);
    //             res.status(201).send(dataArray[key]); 
    //           }
    //           //console.log(key);
    //         }
    //       }
    //         });

      // app.delete("/api/TodoItems/{id}", (req, res) => {


      // });

      // app.get("/api/TodoItems/{id}", (req, res) => {
      //     res.status(200).send('ok');

      // });

  
module.exports = app;



//OLD CODE FOR TEST #3 POST REQUEST
// //POST Request that responds with item, status 201
// app.post('/api/TodoItems/', (req, res) => {
//   // write your code to respond "ok" here
//   for (const key in dataArray) {
    
//     console.log(key);
//     res.status(201).send(dataArray[key]);      
      
//   }
 
//   });
