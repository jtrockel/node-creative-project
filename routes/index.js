var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
    res.sendFile('index.html', { root:  'public' });
});

router.get('/getAnimal',function(req, res, next) {
    console.log("In getAnimal route");
    var fs = require("fs");
    var contents = fs.readFileSync(__dirname + "/animals.json");
    var jsonContent = JSON.parse(contents);
    // console.log(jsonContent["00000"]);
    // console.log(req.query.q);
    res.status(200).json(jsonContent[req.query.q]);
});

router.get('/getSongs', function(req, res, next) {
   console.log("In getSong route");
   var fs = require("fs");
   var contents = fs.readFileSync(__dirname + "/songs.json");
    var jsonContent = JSON.parse(contents);
    // console.log(jsonContent["00000"]);
    // console.log(req.query.q);
    res.status(200).json(jsonContent);
});

module.exports = router;