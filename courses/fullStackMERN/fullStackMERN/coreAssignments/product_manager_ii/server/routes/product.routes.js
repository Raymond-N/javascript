const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/allProducts', ProductController.findAllProducts);
    app.get('/api/oneProduct/:id', ProductController.findOneProduct);
    app.post('/api/newProduct', ProductController.createProduct);
}