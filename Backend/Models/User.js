const {Schema, model} = require('../Connection')
const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
});
module.exports = model('user', userSchema)