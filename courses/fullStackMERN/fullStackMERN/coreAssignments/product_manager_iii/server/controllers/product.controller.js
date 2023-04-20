const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => {
            res.json({product:newProduct})
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(products => {
            console.log(products); 
            res.json(products);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then((updatedProduct) => {
        res.json({product: updatedProduct})
    })
    .catch((err) => {
        res.status(400).json(err)
    });
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then((result) => {
            res.json({result: result})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        });
}