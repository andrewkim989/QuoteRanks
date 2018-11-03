const mongoose = require("mongoose");
var Author = mongoose.model("Author");
var Quote = mongoose.model("Quote");

module.exports = {
    all: function(req, res) {
        Author.find({}, function(err, authors) {
            if (err) {
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json({authors});
            }
        })
    },

    show: function(req, res) {
        Author.findOne({_id: req.params.id}, function(err, author){
            if (err){
               console.log("Returned error", err);
               res.json({message: "Error", error: err});
            }
            else {
               res.json({author});
            }
        })
    },

    create: function(req, res) {
        var name = req.body.name;
        var author = new Author({name: name});

        author.save(function(err){
            if(err){
                res.json({error: err.errors.name.message});
            }
            else {
                res.json({author});
            }
        });
    },

    update: function(req, res) {
        Author.findOne({_id: req.params.id}, function(err, author){
            if (err) {
                console.log("Error. Data not found");
                res.json({message: "Error", error: err});
            }
            else {
                var name = req.body.name;
                author.name = name;
                author.save(function(err){
                    if(err){
                        res.json({error: err.errors.name.message});
                    }
                    else {
                        res.json({author});
                    }
                });
            }
        });
    },

    addQuote: function(req, res) {
        Author.findOne({_id: req.params.id}, function(err, author){
            if (err) {
                console.log("Error. Data not found");
                res.json({message: "Error", error: err});
            }
            else {
                var quote = req.body.quote;
                var newquote = new Quote({quote: quote});

                newquote.save(function(err){
                    if(err){
                        res.json({error: err.errors.quote.message});
                    }
                    else {
                        author.quotes.push(newquote);
                        author.save();
                        res.json({author});
                    }
                });
            }
        });
    },

    voteQuote: function (req, res) {
        Author.findOne({_id: req.params.authid}, function(err, author){
            if (err) {
                console.log("Error. Data not found");
                res.json({message: "Error", error: err});
            }
            else {
                var quote = author.quotes[req.params.quoteid];
                var vote = req.params.vote;
                if (vote == "up") {
                    quote.rating = quote.rating + 1;
                    author.save();
                    res.json({message: "Quote upvoted"});
                }
                else {
                    quote.rating = quote.rating - 1;
                    author.save();
                    res.json({message: "Quote downvoted"});
                }
            }
        });
    },

    deleteQuote: function (req, res) {
        Author.findOne({_id: req.params.authid}, function(err, author){
            if (err) {
                console.log("Error. Data not found");
                res.json({message: "Error", error: err});
            }
            else {
                author.quotes.splice(req.params.quoteid, 1);
                author.save();
                res.json({message: "Success"});
            }
        });
    }
}