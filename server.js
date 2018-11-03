var express = require("express");
var app = express();
app.use(express.static(__dirname + "/QuoteRanks/dist/QuoteRanks"));

var bodyParser = require("body-parser");
app.use(bodyParser.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8098, function() {
    console.log("Listening on port 8098");
});