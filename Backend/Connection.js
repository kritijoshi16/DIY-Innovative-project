const mongoose = require('mongoose');
const url = "mongodb+srv://kritijoshi:kritz123@cluster0.0qayehl.mongodb.net/DIY?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)

.then((result) => {
    console.log('connected to the database');
}).catch((err) => {
    console.log(err)
});
module.exports = mongoose;