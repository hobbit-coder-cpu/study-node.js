const productsController = require('../controllers/products.controller');

const express = require('express');
const productsRouter = express.Router();

productsRouter.post('/', productsController.createProduct);
productsRouter.get('/', productsController.getProducts);
productsRouter.get('/:productId', productsController.getProductById);
productsRouter.patch('/:productId', productsController.updateProduct);
productsRouter.delete('/:productId', productsController.deleteProduct);

module.exports = productsRouter;
