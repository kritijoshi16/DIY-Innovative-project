const {Schema, model} = require('../Connection')
const feedbackSchema = new Schema({
    fullname: String,
    email: String,
    message: String
});
module.exports = model('feedback', feedbackSchema)