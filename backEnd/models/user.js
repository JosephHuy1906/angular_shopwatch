var db = require('./database');

exports.getAll = (callback) => {
    let sql = 'SELECT * FROM users';
    db.query(sql, (err, d) => {
        if (err) throw err;
        callback(d);
    })
}

exports.getUS = (u, callback) => {
    let sql = "SELECT * FROM users WHERE username = ?";
    db.query(sql, u, (err, d) => {
        console.log("d=", d.length);
        data = d;
        callback(data);
    });
}
exports.getRole = (callback) => {
    let sql = "SELECT * FROM role"
    db.query(sql, (err, d) => {
        if (err) throw err;
        callback(d)
    })
}
exports.getId = (u, callback) => {
    let sql = "SELECT * FROM users WHERE userId = ?";
    db.query(sql, u, (err, d) => {
        if (err) throw err;
        callback(d);
    });
}
exports.getIdAdmin = (u, callback) => {
    let sql = "SELECT * FROM users WHERE username = ?";
    db.query(sql, u, (err, d) => {
        if (err) throw err;
        callback(d);
    });
}

exports.create = (data, callback) => {
    let sql = 'INSERT INTO users SET ?';
    db.query(sql, data, (err, d) => {
        if (err) throw err;
        callback(d);
    })
}

exports.updateRole = (id, data, callback) => {
    let sql = 'UPDATE users SET ? WHERE userId=?';
    db.query(sql, [data, id], (err, d) => {
        if (err) throw err;
        callback(d);
    })
}

