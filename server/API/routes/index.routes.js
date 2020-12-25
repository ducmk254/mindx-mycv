const indexControllers = require('../controllers/index.controllers');

module.exports = (app) => {
  app
    .route('/api/v0/products')
    .get(indexControllers.productController.getProductList);
};
