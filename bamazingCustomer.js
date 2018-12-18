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

connection.connect(function(err) {
  if (err) throw err;
  // What to do on connection;

  greeting();

  connection.end();
});

// Read
function greeting(){
  connection.query("SELECT * FROM products", function (err, res,) {
    if (err) throw err;
    
    console.log("Greetings! I hope you're having a BAMazing day!\n\nHere are the products we have available at the moment: \n\n")
    for (var i = 0; i < res.length; i++) {
      console.log("item_ID product_name department_name price stock_quantity")
      console.log("_________________________________________________________")
      console.log(res[i].item_id + "  " + res[i].product_name, + "  " + res[i].department_name + "  " + res[i].price + "  " + res[i].stock_quantity)

    }
      })
}