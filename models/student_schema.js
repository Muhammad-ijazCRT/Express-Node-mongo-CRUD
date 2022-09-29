// mongo connection
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/todos", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));


// schema define the structure of a document
var personSchema = new mongoose.Schema({
    name: { type: String, default: "anonymous" },
    email: { type: String },
    phone: { type: String }
});


// interference between schema and database
var personModel = mongoose.model('Person', personSchema);


module.exports = personModel