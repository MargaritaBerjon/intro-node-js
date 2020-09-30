const express = require('express');
const router = express.Router();

module.exports = function () {
  router.get('/', (req, res) => {
    res.render('index');
  });

  router.get('/nosotros', (req, res) => {
    res.render('nosotros', {
      page: 'Sobre Nosotros'
    });
  });

  router.get('/viajes', (req, res) => {
    res.render('viajes', {
      page: 'Próximos viajes'
    });
  });

  return router;
}