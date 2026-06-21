const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /test:
 *   get:
 *     summary: Route de test
 *     description: Vérifie que l'API est opérationnelle et retourne le statut du serveur.
 *     tags:
 *       - General
 *     responses:
 *       200:
 *         description: Statut du serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 uptime:
 *                   type: number
 *                   description: Temps de fonctionnement du serveur en secondes
 *                   example: 42.3
 *                 environment:
 *                   type: string
 *                   example: development
 */
router.get('/test', (req, res) => {
  res.json({
    status: 'OKKK',
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
  });
});

module.exports = router;
