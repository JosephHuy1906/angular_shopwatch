const db = require('./database');

exports.getAll = (callback) => {
    let sql = 'SELECT * FROM oderdetail';
    db.query(sql, (err, data) => {
        if (err) throw err;
        callback(data);
    })
}
exports.getId = (id, callback) => {
    let sql = 'SELECT * FROM oderdetail WHERE oderId =?'
    db.query(sql, id, (err, d) => {
        if (err) throw err;
        callback(d);
    })
}

exports.CreateOderDetail = (data, callback) => {
    let sql = 'INSERT INTO oderdetail SET ?';
    db.query(sql, data, (err, data) => {
        if (err) throw err;
        callback(data)
    })
}