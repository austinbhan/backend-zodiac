const { Router } = require('express');
const { zodiac } = require('../../data/zodiac');
const router = Router();

router
  .get('/:id', (req, res) => {
    console.log('id param:', req.params.id);
    const singleZodiac = zodiac.find((singleZodiac) => singleZodiac.id === req.params.id);
    res.json(singleZodiac);
  })
  .get('/', (req, res) => {
    console.log(zodiac);
    const ids = zodiac.map((singleZodiac) => ({ id: singleZodiac.id, name: singleZodiac.name }));
    console.log(ids);
    res.json(ids);
  });

module.exports = router;
