const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /welcome:
 *   get:
 *     summary: Route de bienvenue
 *     description: Retourne un message de bienvenue dans l'API.
 *     tags:
 *       - General
 *     responses:
 *       200:
 *         description: Message de bienvenue
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Bienvenue sur l'API Klystrr !
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 */
router.get('/welcome', (req, res) => {
  res.json({
    message: 'Bienvenue sur l\'API Klystrr !',
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
