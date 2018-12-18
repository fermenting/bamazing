var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // port selector & credentials
  port: 4377,
  user: "root",
  password: "password",
  database: "bamazingDB"
});

connection.connect(function (err) {
  if (err) throw err;
  // What to do on connection;
  console.log("connected")
  // greeting();
  // buy();

  connection.end();
});

// Read
function greeting() {
  connection.query("SELECT * FROM products", function (err, res, ) {
    if (err) throw err;

    console.log("Greetings! I hope you're having a BAMazing day!\n\nHere are the products we have available at the moment: \n\n")
    for (var i = 0; i < res.length; i++) {
      console.log("item_ID product_name department_name price stock_quantity")
      console.log("_________________________________________________________")
      console.log(res[i].item_id + "  " + res[i].product_name, + "  " + res[i].department_name + "  " + res[i].price + "  " + res[i].stock_quantity)

    }
  })
}

function buy() {
  var itemIdChoices = [];
  for (var i = 0; i < 10; i++) {
    itemIdChoices.push(i + 1)
  }
  inquirer
    .prompt({
      name: "buyItemId",
      type: "list",
      choices: itemIdChoices,
      message: "What language would you like to purchase? Select it using the item ID."
    }, {
        name: "amountToBuy",
        type: "input",
        message: "How many units would you like?",
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      })
    .then(function (answer) {




      var query = "SELECT product_name, department_name, price stock_quantity FROM products WHERE ?";
      connection.query(query, { item_id: answer.buyItemId }, function (err, res) {
        if (res.stock_quantity < parseInt(answer.amountToBuy)) {
          console.log("We're sorry, we can't fulfil that many units. We have " + res.stock_quantity + " " + res.product_name + " units available for purchase.")
        } else {
          console.log("Coming right up!");
          var query = connection.query(
            "UPDATE products SET stock_quantity = stock_quantity - amountToBuy WHERE ?", { item_id: answer.buyItemId }, function (err, res) {
421
            // console.log(res.affectedRows + " products updated!\n")
          var totalCost = parseInt(answer.amountToBuy) * parseInt(answer.price)
          console.log("Your total is: \n\n$" + totalCost)
          
          }
          );
          


          // logs the actual query being run
          // console.log(query.sql);

        }

      });
    });
}
