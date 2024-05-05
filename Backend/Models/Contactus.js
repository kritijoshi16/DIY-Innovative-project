const {Schema, model} = require('../Connection')
const contactusSchema = new Schema({
    fullname: String,
    email: String,
    phoneno: String,
    message: String
});
module.exports = model('contactus', contactusSchema)