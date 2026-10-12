const express = require('express');
const app = express();
const coffeeRoutes = require('./Routes/coffeeRoutes');

const PORT = process.env.PORT || 3000;

// Middleware parsing JSON
app.use(express.json());

// Main Route
app.use('/api/coffees', coffeeRoutes);

// Root Endpoint Check
app.get('/', (req, res) => {
  res.send('Welcome to Coffee Journal API!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});