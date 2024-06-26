const productModel = require("../models/Productsmodels");

exports.getproducts = async (req, res, next) => {
  const products = await productModel.find({});

  res.json({
    success: true,
    products,
  });
};