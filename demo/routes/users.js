var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users.js')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login',usersController.login)
router.get('/categroylist',usersController.categroylist)
router.post('/add',usersController.add)
router.post('/update',usersController.update)

module.exports = router;
