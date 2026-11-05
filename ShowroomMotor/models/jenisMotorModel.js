const mongoose = require('mongoose');

const motorSchema = new mongoose.Schema({
  motor: { type: String, required: [true, 'nama motor wajib diisi'], trim: true },
  merekMotor: { type: String, required: [true, 'mererk motor wajib diisi'], unique: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Mahasiswa', mahasiswaSchema);