const express = require('express');
const router = express.Router();
var modelOder = require('../models/oder');

router.get('', (req, res) =>{
    modelOder.getAll(list => res.json(list));
})
router.get('/oderId/:id', (req, res) => {
    let id = req.params.id
    modelOder.getOderId(id, list => { res.json(list) })
})
router.get('/:id', (req, res) => {
    let id = req.params.id
    modelOder.getId(id, list => { res.json(list) })
})
router.get('/status/:id', (req, res) =>{
    let id = req.params.id;
    modelOder.getStatus(id, list => res.json(list));
})

router.post('/', (req, res) => {
    let data = req.body;

    modelOder.createOder(data, (d) => {
        res.json(d)
    })
})

router.put('/edit/:id', (req, res) => {
    let id = req.params.id;
    let data = req.body;
    modelOder.updateOder(data, id, (list) => {
        res.json({ thongbao: 'Cập nhập thành công' })
    })
})

module.exports = router;