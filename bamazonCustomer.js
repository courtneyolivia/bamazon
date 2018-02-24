// Required npm packages
var inquirer = require("inquirer");
var mysql = require("mysql");

// Define the MySQL connection parameters
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function displayItems () {
  connection.query("SELECT name FROM bamazone_DB.products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}

// function which prompts the user for what action they should take
function prompt() {
  inquirer
    .prompt({
      name: "itemToBuy",
      type: "rawlist",
      message: "What is the ID of the product you would like to buy?",
      choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
      name: "itemtoBuy",
      type: "rawlist",
      message: "How many units of the product would you like to buy?",
      choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "or more "]
    })
    .then(function(answer) {
      // based on their answer, run function to check if item stock is sufficient
      if (answer.itemToBuy.toUpperCase() === "POST") {
        postAuction();
      // If not sufficient, run message and stop order
      } else {
          console.log("Insufficiant quantity!");
        stop();
      }
      // If quantity is sufficient, run order
      else if () {

      }
    });
}
