const express = require('express');
const tourcontroller = require('../controllers/tourcontroller');

const router = express.Router();

// router.param('id', tourcontroller.checkid);
router
  .route('/top-5-cheap')
  .get(tourcontroller.aliastop5, tourcontroller.getalltours);
router.route('/tourstats').get(tourcontroller.getTourStats);
router.route('/monthly-plan/:year').get(tourcontroller.getMonthlyPlan);

router
  .route('/')
  .get(tourcontroller.getalltours)
  .post(tourcontroller.createtour);
router
  .route('/:id')
  .get(tourcontroller.gettour)
  .patch(tourcontroller.updatetour)
  .delete(tourcontroller.deletetour);

module.exports = router;
