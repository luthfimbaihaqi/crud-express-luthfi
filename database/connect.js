let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "rival",
  password: "jajaku23",
  database: "db_express_mysql",
});

connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("\nKoneksi Berhasil!");
  }
});

module.exports = connection;
