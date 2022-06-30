const express = require('express');
const router = express.Router();
const { Customer } = require('../model/customer');

router.post('/customer/add', (req, res) => {
    const cus = new Customer({
        name: req.body.name,
        surname: req.body.surname,
        nickname: req.body.nickname,
        nationality: req.body.nationality,
        height: req.body.height,
        weight: req.body.weight,
        birth: req.body.birth,
        email: req.body.email,
    });
    cus.save((err, data) => {
        res.status(200).json({ code:200, message: 'Customer Added',
        addCustomer:data })
    });
});

module.exports = router;