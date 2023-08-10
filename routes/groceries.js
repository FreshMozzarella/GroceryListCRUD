var express = require('express');
var router = express.Router();
var groceryCtrl = require('../controllers/groceries')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.redirect('/index');
// });
router.get('/', groceryCtrl.index)
/* GET movies/new view - /movies/new */
router.get("/new", groceryCtrl.new);
router.post('/', groceryCtrl.create);
// GET movies index view - /movies
// router.get("/", groceryCtrl.index);

module.exports = router;
