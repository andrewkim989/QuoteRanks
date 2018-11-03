var authors = require("../controllers/quotes.js");
var path = require("path");

module.exports = function(app) {
    app.get("/authors", function(req, res) {
        authors.all(req, res);
    });
    
    app.get("/authors/:id", function(req, res) {
        authors.show(req, res);
    });
    
    app.post("/authors", function(req, res) {
        authors.create(req, res);
    });

    app.put("/authors/:id", function(req, res) {
        authors.update(req, res);
    });
    
    app.post("/authors/:id", function(req, res) {
        authors.addQuote(req, res);
    });

    app.get("/authors/:authid/:quoteid/:vote", function(req, res) {
        authors.voteQuote(req, res);
    });
    
    app.delete("/authors/:authid/:quoteid", function(req, res) {
        authors.deleteQuote(req, res);
    });

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./QuoteRanks/dist/QuoteRanks/index.html"));
    });
}