const express = require("express");
const app = express();  

  

app.get("/api",( req, res ) => {   
    readJSONFile("./Italy.json",function (err, json) {
        if(err) { throw err; }
        res.send(json)
    })
})
app.get("/api:nome",( req, res ) => {   
    readJSONFile("./Italy.json",function (err, json) {
        if(err) { throw err; }
        res.send(json)
    })
})

var fs = require('fs');

function readJSONFile(filename, callback) {
  fs.readFile(filename, function (err, data) {
    if(err) {
      callback(err);
      return;
    }
    try {
      callback(null, JSON.parse(data));
    } catch(exception) {
      callback(exception);
    }
  });
}
 

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port 3000"))