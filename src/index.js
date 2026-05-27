const express = require('express');
const setupSwagger = require('./swagger');

const welcomeRouter = require('./routes/welcome');
const testRouter = require('./routes/test');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Swagger
setupSwagger(app);

// Routes
app.use('/', welcomeRouter);
app.use('/', testRouter);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
  console.log(`📄 Documentation Swagger : http://localhost:${PORT}/docs`);
});

module.exports = app;
