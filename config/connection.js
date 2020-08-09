var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "d8zkfy48pwmcu8vb",
        password: "ykd7eh7hw5lucp22",
        database: "ppheh43iaics6qe2"

    });
};
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;