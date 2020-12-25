const indexModel = require('../models/index.model');
module.exports.getProductList = async (req, res) => {
  try {
    let listproduct = await indexModel.productModel.find();
    return res.status(200).json({
      status: 'success',
      result: listproduct.length,
      listproduct: listproduct
    });
  } catch (err) {
    return res.status(500).json({
      status: 'fail',
      message: "Server error: " + err,
      
    });
  }
};

module.exports.getProduct = async (req, res) => {
  try {
    let product = await indexModel.productModel.findById();
    return res.status(200).json({
      status: 'success',
      result: 1,
      data: {product: product},
    });
  } catch (e) {
    return res.status(200).json({
      status: 'faild',
      result: 1,
      data: {product: {error: e}},
    });
  }
};
