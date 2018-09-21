const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'bootcamp',
    password: '',
    database: 'greatbay_db',
})

connection.connect((err) => {
    if (err) throw err;

    console.log(`Connected with ID ${connection.threadId}`)
});

function newItem() {
    console.log("Inserting a New Item...\n");
    var query = connection.query(
      "INSERT INTO itemList SET ?",
      {
        item: userInput,
        initialBid: userInitBid,
        HighestBid: userInitBid
      },
      function(err, res) {
        console.log(err);
        console.log(res.affectedRows + " Item inserted!\n");
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }

  function newBid() {
    console.log("Taking a new bid...\n");
    if (userBid > highBid) { 
    var query = connection.query(
      "UPDATE itemList SET ? WHERE ?",
      [
        {
            highestBid: userBid
        },
        {
            item: bidItem
        }
      ],
      function(err, res) {
        console.log(res.affectedRows + " music updated!\n");
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }