var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var formidable = require('formidable')
const jwt = require('jsonwebtoken');
const fs = require('fs');
var modelUser = require('../models/user');

router.get('/', (req, res) => {
  modelUser.getAll((list) => {
    res.json(list)
  })
})
router.get('/:id', (req, res) => {
  let id = req.params.id;
  modelUser.getId(id, (list) => {
    res.json(list)
  })
})
router.get('/get/role', (req, res) =>{
  modelUser.getRole( (data) => {
    res.json(data)
  })
})

router.post("/create", function (req, res) {
  let user = req.body.username;
  let pass = req.body.password;
  let em = req.body.email;
  let name = req.body.fullName;
  let role = 2;

  let salt = bcrypt.genSaltSync(10);
  let pass_mahoa = bcrypt.hashSync(pass, salt);
  let user_info = {
    fullName: name,
    username: user,
    password: pass_mahoa,
    email: em,
    roleId: role
  };

  console.log(user_info);
  modelUser.create(user_info, function (data) {

    res.json({ thongbao: 'Đăng ký tài khoản thành công' })
  });

});

router.post("/createadmin", function (req, res) {
  let user = req.body.username;
  let pass = req.body.password;
  let role = req.body.roleId;

  let salt = bcrypt.genSaltSync(10);
  let pass_mahoa = bcrypt.hashSync(pass, salt);
  let user_info = {
    username: user,
    password: pass_mahoa,
    roleId: role
  };
  console.log(user_info);
  modelUser.create(user_info, function (data) {
    res.json({ thongbao: 'Đăng ký tài khoản thành công' })
  });

});

router.post("/login", async function (req, res) {
  let u = req.body.username;
  let p = req.body.password;
  console.log(u);
  modelUser.getUS(u, function (rows) {
    if (rows.length <= 0) {
      res.json({
        message: 'Thất bại',
        error: 'Tài khoản bạn không tồn tại'
      })
      return;
    }
    // console.log(rows);
    let user = rows[0];
    let id = rows[0].userId;
    // console.log(id);
    let pass_fromdb = user.password;
    let kq = bcrypt.compareSync(p, pass_fromdb);

    if (kq) {
      console.log("Thành công");
      let [data] = rows;
      let payload = {
        "name": data.fullName,
        "userId": data.userId,
        "username": data.username
      }
      const token = jwt.sign(payload, 'josephhuy19062002', { noTimestamp: true });
      console.log(token);
      return res.json({
        message: 'Thành công',
        token: token
      })
    } else {
      console.log("Thất bại");
      res.json({
        error: 'Mật khẩu bạn nhập sai',
        message: 'Thất bại',
      })
    }
  });
});
router.post("/loginAd", async function (req, res) {
  let u = req.body.username;
  let p = req.body.password;
  console.log(u);
  modelUser.getIdAdmin(u, function (rows) {
    if (rows.length <= 0) {
      res.json({
        message: 'Thất bại',
        errortk: 'Tài khoản không đúng'
      })
      return;
    }

    let user = rows[0];
    let role = rows[0].roleId;
    console.log(role);
    let pass_fromdb = user.password;
    let kq = bcrypt.compareSync(p, pass_fromdb);

    if (kq) {
      console.log('mk đúng');
      if(role === 1 || role === 3){
        let [item] = rows;
        let payload = {
          "userId": item.userId,
          "fullName": item.fullName,
          "role": item.roleId
        }
        const token = jwt.sign(payload, 'josephhuy19062002', { noTimestamp: true });
        console.log(token);
        return res.json({
          message: 'Thành công',
          token: token
        })
      }else{
        return res.json({
          message: 'Tài khoản không phải Admin',
          errortk: 'Tài khoản không phải Admin'
        })
      }
      

    } else {
      console.log('mk sai');
      console.log("Thất bại");
      res.json({
        message: 'Thất bại',
        errormk: 'Mật khẩu bạn không đúng'
      })
    }

  });
});
router.get('/loginad/:token',  (req, res) =>{
  let token = req.params.token;
  let kq =  jwt.verify(token, 'josephhuy19062002');
  if(kq){
    res.json(kq)
  }
})
router.get('/profile/:token', (req, res) => {
  try {
    let token = req.params.token
    let kq = jwt.verify(token, 'josephhuy19062002');
    if (kq) {
      res.json(kq)
    }
  } catch (err) {
    return res.json('Lỗi sever')
  }
})

router.put("/update/role/:id", async function (req, res) {
  const id = req.params.id
  const data = req.body;
  modelUser.updateRole(id, data , function (err, data) {
    res.json({message:'Update thành công'})
  });
}
);
router.put('/update/user/:id',(req, res) =>{
  const id = req.params.id
  const data = req.body;
  modelUser.updateRole(id, data , function (err, data) {
    res.json({message:'Update thành công'})
  });
})

module.exports = router;
