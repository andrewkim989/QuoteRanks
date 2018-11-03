var mongoose = require("mongoose");

var QuoteSchema = new mongoose.Schema({
    quote: {type: String, required: [true, "Please type in a quote"],
    minlength: [3, "Quote must be at least three characters long"]},
    rating: {type: Number, default: 0}
}, {timestamps: true });
var AuthorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Please enter in the author's name"],
    minlength: [3, "Author name must be at least three characters long"]},
    quotes: [QuoteSchema]
}, {timestamps: true });

mongoose.model("Author", AuthorSchema);
mongoose.model("Quote", QuoteSchema);