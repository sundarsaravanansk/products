const express = require('express');
const { getproducts } = require('../controller/Productscontroller');
const router = express.Router();

// router.route('/products').get(getproducts);
router.route('/products').get(getproducts);

module.exports = router;