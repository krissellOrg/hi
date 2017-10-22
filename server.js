var express = require("express"),
    app = express();

var port = process.env.PORT || 8070;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('Hey, you made it. Hello!')
})

app.listen(port);
console.log("Listening on port  ", port);
