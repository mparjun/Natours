const express = require('express');
const usercontroller = require('../controllers/usercontroller');
const router = express.Router();

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
