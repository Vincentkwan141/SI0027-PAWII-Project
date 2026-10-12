// Mini Project - Pertemuan 9-10: Model Mahasiswa
// TODO 1: lengkapi Schema di bawah ini.

const mongoose = require("mongoose");

const alamatSchema = new mongoose.Schema(
  {
    jalan: String,
    kota: String,
  },
  { _id: false }
);

// TODO: tambahkan field nama (String, required)
// TODO: tambahkan field nim (String, required, unique)
// TODO: tambahkan field alamat bertipe alamatSchema (embedding)
// TODO: tambahkan field prodiId yang mereferensi model 'Prodi' (referencing)
const mahasiswaSchema = new mongoose.Schema({
  nama: {type: String, required: true},
  nim: {type: String, required: true, unique: true},
  alamat: alamatSchema, //embedding
  prodiId: {type: mongoose.Schema.Types.ObjectId, ref: "Prodi"}, //referencing
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Mahasiswa", mahasiswaSchema);
