var express = require('express');
var router = express.Router();
var groceryCtrl = require('../controllers/groceries')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET movies/new view - /movies/new */
router.get("/new", groceryCtrl.new);

// GET movies index view - /movies
//router.get("/", groceryCtrl.index);

module.exports = router;
