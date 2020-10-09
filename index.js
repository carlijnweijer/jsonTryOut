const express = require('express')
const app = express()
 
app.get('/json', function (req, res) {
    const days = {
        yesterday: "express",
        today: "json"
    }
  res.send(days)
})
 
app.listen(3000, function(){
    console.log("server started on port 3000");
})