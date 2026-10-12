// Array data sementara untuk menyimpan catatan kopi
let coffees = [
  {
    id: 1,
    name: "Kopi Gayo",
    origin: "Aceh Gayo",
    bean_type: "Arabica",
    roast_level: "Medium",
    brew_method: "V60",
    price: 35000,
    rating: 5,
    notes: "Memiliki rasa fruity dan sedikit asam",
    date_tried: "2026-10-01"
  },
  {
    id: 2,
    name: "Kopi Toraja",
    origin: "Toraja, Sulawesi",
    bean_type: "Arabica",
    roast_level: "Dark",
    brew_method: "Espresso",
    price: 40000,
    rating: 4,
    notes: "Nutty, earthy, body tebal",
    date_tried: "2026-10-05"
  }
];

module.exports = {
  getAll: () => coffees,
  
  getById: (id) => coffees.find(c => c.id === id),
  
  create: (data) => {
    const newCoffee = {
      id: coffees.length ? coffees[coffees.length - 1].id + 1 : 1,
      name: data.name,
      origin: data.origin,
      bean_type: data.bean_type || "-",
      roast_level: data.roast_level || "-",
      brew_method: data.brew_method || "-",
      price: data.price || 0,
      rating: data.rating || 0,
      notes: data.notes || "-",
      date_tried: data.date_tried || new Date().toISOString().split('T')[0]
    };
    coffees.push(newCoffee);
    return newCoffee;
  },

  update: (id, data) => {
    const index = coffees.findIndex(c => c.id === id);
    if (index === -1) return null;

    coffees[index] = {
      ...coffees[index],
      ...data,
      id: id
    };
    return coffees[index];
  },

  delete: (id) => {
    const index = coffees.findIndex(c => c.id === id);
    if (index === -1) return null;

    const deleted = coffees.splice(index, 1);
    return deleted[0];
  }
};