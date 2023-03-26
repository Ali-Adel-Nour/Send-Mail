const router = require('express').Router();

const { signup, getBill } = require('../controllers/appController.js');

router.post('/user/signup', signup);

router.post('/product/getbill', getBill);

module.exports = router;
