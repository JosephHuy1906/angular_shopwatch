var express = require('express');
var router = express.Router();
var model = require('../models/oderDetail');

router.get('', (req, res) => {
    model.getAll(list => { res.json(list) })
})
router.get('/:id', (req, res) => {
    let id = req.params.id
    model.getId(id, (d) => {
        res.json(d);
    })
})
router.post('/create', (req, res) => {
    let data = req.body;
    console.log(data);
    model.CreateOderDetail(data, (list) => { res.json(list) })
})


module.exports = router;