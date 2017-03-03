var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  port     : 3306,
  host     : "localhost",
  user     : "root",
  password : "root",
  database : "bamazon_db",
});

connection.connect();

function viewStore() {
	connection.query("select * from products", function (error, results, fields) {
  		if (error) throw error;
   console.log(results);
 });
}
