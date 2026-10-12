const coffeeModel = require('../models/coffeeModel');

// GET all coffees
exports.getAllCoffees = (req, res) => {
  const coffees = coffeeModel.getAll();
  res.status(200).json({
    status: 'success',
    data: coffees
  });
};

// GET coffee by ID
exports.getCoffeeById = (req, res) => {
  const id = parseInt(req.params.id);
  const coffee = coffeeModel.getById(id);

  if (!coffee) {
    return res.status(404).json({
      status: 'fail',
      message: 'Catatan kopi tidak ditemukan'
    });
  }

  res.status(200).json({
    status: 'success',
    data: coffee
  });
};

// POST new coffee
exports.createCoffee = (req, res) => {
  const { name, origin } = req.body;

  if (!name || !origin) {
    return res.status(400).json({
      status: 'fail',
      message: 'Nama dan Asal Kopi wajib diisi'
    });
  }

  const newCoffee = coffeeModel.create(req.body);
  res.status(201).json({
    status: 'success',
    message: 'Catatan kopi berhasil ditambahkan',
    data: newCoffee
  });
};

// PUT update coffee
exports.updateCoffee = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedCoffee = coffeeModel.update(id, req.body);

  if (!updatedCoffee) {
    return res.status(404).json({
      status: 'fail',
      message: 'Catatan kopi tidak ditemukan'
    });
  }

  res.status(200).json({
    status: 'success',
    message: 'Catatan kopi berhasil diperbarui',
    data: updatedCoffee
  });
};

// DELETE coffee
exports.deleteCoffee = (req, res) => {
  const id = parseInt(req.params.id);
  const deletedCoffee = coffeeModel.delete(id);

  if (!deletedCoffee) {
    return res.status(404).json({
      status: 'fail',
      message: 'Catatan kopi tidak ditemukan'
    });
  }

  res.status(200).json({
    status: 'success',
    message: 'Catatan kopi berhasil dihapus',
    data: deletedCoffee
  });
};