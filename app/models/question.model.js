const mongoose = require('mongoose');


const Questionschema = mongoose.Schema({
   answer:String,
    explanation:String,
    options:[mongoose.Schema.Types.Mixed],
    question:String,
    testid:String
});

module.exports = mongoose.model('Question', Questionschema);