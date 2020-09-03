const express = require('express');
const router = express.Router();

module.exports = function () {
  router.use('/', (req, res) => {
    res.send('Home');
  });

  router.use('/nosotros', (req, res) => {
    res.send('Nosotros');
  });

  return router;
}