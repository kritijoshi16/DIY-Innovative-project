const {Schema, model}= require('../Connection')
const productSchema = new  Schema({
    name: String,
    category: String,
    price: Number,
    description: String,
    longdescription: String,
    image: String,
    video: String
});
module.exports = model('product', productSchema)