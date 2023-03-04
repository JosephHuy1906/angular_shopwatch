const db = require('./database');

exports.getAll = (callback) => {
    let sql = 'SELECT * FROM oder ';
    db.query(sql, (err, data) => {
        if (err) throw err;
        callback(data)
    })
}
exports.getOderId = (id, callback) => {
    let sql = 'SELECT * FROM oder Where oderId = ?';
    db.query(sql,id, (err, data) => {
        if (err) throw err;
        callback(data)
    })
}
exports.getId = (id, callback) => {
    let sql = 'SELECT * FROM oder Where userId = ?';
    db.query(sql,id, (err, data) => {
        if (err) throw err;
        callback(data)
    })
}
exports.getStatus = (id, callback) =>{
    let sql = 'SELECT * FROM status WHERE statusId = ?'
    db.query(sql,id, (err, data) =>{
        if(err) throw err;
        callback(data);
    })
}

exports.createOder = (data, callback) => {
    let sql = "INSERT INTO oder SET ?";
    db.query(sql, data, (err,d) => {
        if(err) throw err;
        callback(d);
    })
}

exports.updateOder = (callback, data, id) => {
    let sql = 'UPDATE oder SET ? WHERE oderId = ?'
    db.query(sql, data, id, (err, data) => {
        if (err) throw err;
        callback(data);
    })
}