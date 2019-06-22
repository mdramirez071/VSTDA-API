This project is called "VSTDA API" for module NODE101.

The goal of this project was to accomplish the following:

1. Expose an endpoint (that does not require authentication)

2. Implement GET, POST, and DELETE requests by calling on an Array containing Objects and use the requests to extract key/value pairs from those objects (more specifically: todoItemId's). 

3. Each request to the server must also be logged to the console.

How to Demo this project:

Clone the repository locally to your computer. Open up the project in Visual Studio Code. Open up Terminal, run the commands "npm start" to start up the live server. Then navigate to http://localhost:8484 to access the server, from there try accessing http://localhost:8484/api/TodoItems/ then you should see both the data displayed as well as the requests being made in both the web browser and Terminal. You can also run the command, "npm test", //This will run a set of tests inside the Terminal to see whether or not the project has satisfied certain criteria. Once the tests have ran successfully, simply close out the project.