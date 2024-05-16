const {Schema, model} = require('../Connection')
const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: {type: String, require:true, unique: true},
    password: String,
    role: {type: String, default:"user"}
});
module.exports = model('user', userSchema)