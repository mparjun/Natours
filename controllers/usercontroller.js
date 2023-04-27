const User = require('../models/userModels');
const catchAsync = require('../utils/catchAsync');

exports.getallusers = catchAsync(async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    data: {
      users,
    },
  });
});
exports.createuser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'this route is not defined',
  });
};
exports.updateuser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'this route is not defined',
  });
};
exports.deleteuser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'this route is not defined',
  });
};
exports.getuser = (req, res) => {
  res.status(500).json({
    status: 'err',
    message: 'this route is not defined',
  });
};
