//Set up MySQL connection
const mysql = require('mysql');
//const connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'Maranatha269872',
        database: 'burgers_db'
    });
}


// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'Maranatha269872',
//     database: 'burgers_db'
// });

// connection.connect(err => {
//     if (err) {
//         console.error(`error connecting: ${err.stack}`);
//         return;
//     }
//     console.log(`connected as id ${connection.threadId}`);
// });

connection.connect();

//Export connection for our ORM to use
module.exports = connection;