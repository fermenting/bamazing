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
});