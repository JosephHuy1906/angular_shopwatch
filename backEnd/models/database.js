var mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'angular_asm'
})
db.connect((err) => {
    if (err) throw err;
    console.log("Kết nối database thành công")

});

module.exports = db;