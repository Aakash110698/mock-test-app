const Question = require('../models/question.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request


    // Create a Note
    console.log(req.body);
  
const question = new Question({
    answer: req.body.answer,
    question:req.body.question,
    options:[{
        index:"A",
        value:req.body.option_a
    },
{
    index:"B",
    value:req.body.option_b
},
{
    index:"C",
    value:req.body.option_c
},
{
    index:"D",
    value:req.body.option_d
},
{
    index:"E",
    value:req.body.option_e
}],
explanation:req.body.explanation,
testid:req.body.testid

});

    // Save Note in the database
    question.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Question.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};


