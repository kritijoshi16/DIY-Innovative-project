const {Schema, model}= require('../Connection')
const productSchema = new  Schema({
    name: String,
    category: String,
    price: Number,
    description: String,
    image: String
});
module.exports = model('product', productSchema)