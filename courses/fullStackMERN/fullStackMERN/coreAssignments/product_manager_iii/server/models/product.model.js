const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minLength: [3, 'The title must be 3 or more characters'],
        maxLength: [50, 'The title is too long']
    },
    price: {
        type: Number,
        min: [.01, 'Price must be greater than 0']
    },
    description: {
        type: String,
        minLength: [3, 'The description must be 3 or more characters']
    }
}, {timestamps: true});

module.exports = mongoose.model('Product', ProductSchema);