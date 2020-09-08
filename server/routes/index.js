const express = require('express');
const router = express.Router();

module.exports = function () {
  router.get('/', (req, res) => {
    res.render('index', {
      page: 'Home'
    });
  });

  router.get('/nosotros', (req, res) => {
    res.render('nosotros', {
      page: 'Sobre Nosotros'
    });
  });

  return router;
}