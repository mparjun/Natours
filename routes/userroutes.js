const express = require('express');

const router = express.Router();

const usercontroller = require('../controllers/usercontroller');
const authcontroller = require('../controllers/authController');

router.post('/signup', authcontroller.signup);
router.post('/login', authcontroller.login);
router
  .route('/')
  .get(usercontroller.getallusers)
  .post(usercontroller.createuser);
router
  .route('/:id')
  .get(usercontroller.getuser)
  .patch(usercontroller.updateuser)
  .delete(usercontroller.deleteuser);

module.exports = router;
