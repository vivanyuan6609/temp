var express = require('express');
var router = express.Router();

var moment = require('moment');

var sqlite3=require('sqlite3').verbose();
var db=new sqlite3.Database('chat_record');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.serialize(function() {
    db.all("SELECT * FROM fse01", function(e, rows) {
      if (e){
      	res.send(e);
      } else {
  	  res.render('index', {title:"YuanYuan", 'rows': rows, 'user': req.session.username});
	  }
    });
  });
});

router.post('/', function(req, res, next){
  var msg = req.body.msg;
  var time = moment().format('MMMM Do YYYY, h:mm:ss a');
  var user = req.session.username;
  db.serialize(function() {
  	db.run("INSERT INTO fse01 (message, timestamp, author) VALUES (?,?,?)", [msg, time, user], function(e, row){
  		if (e) {
  			res.send(e);
  		} else {
  			res.redirect('/');
  		}
  	});
  });
});

router.post('/user', function(req, res, next){
  var user = req.body.user;
  req.session.username = user;
  res.redirect('/');
});

module.exports = router;
