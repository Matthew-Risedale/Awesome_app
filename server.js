var express = require('express');
var app = express();
const port = process.env.PORT || 3001;

app.get('/', function (req, res) {
   res.send('Hello World!')
})

app.listen(port, function () {
   console.log(`Server listening on port ${port}!`)
})