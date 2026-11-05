const motor = require('../models/jenisMotorModel');
const { errorHttp } = require('../middlewares/errorHandler');

exports.create = async (req, res) => {
  try {
    const motor = await motor.create(req.body);
    res.status(201).json(motor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  const data = await motor.find();
  res.json(data);
};

exports.getById = async (req, res) => {
  const data = await motor.findById(req.params.id);
  if (!data) throw errorHttp(404, 'Data tidak ditemukan');
  res.json(data);
};