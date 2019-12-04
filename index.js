const express = require('express');

const { CorridaCavalo } = require('./app/models');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

CorridaCavalo.create({

  idSportinglife: 54654,
  data: new Date('2019-10-13'),
  hora: '20:00',
  name: 'Corrida teste',
  local: 'Campina grande',
  pista: 'Amigão',
  idade: '6546',
  qtdCorredores: 6,
  precisao: 'aqui nao sei',
  oddP1: 1.58,
  oddP2: 1.58,
  oddP3: 1.58,
  oddP4: 1.58,
  oddP5: 1.58,
  oddP6: 1.58,
  oddP7: 1.58,
  oddP8: 1.58,
  oddP9: 1.58,
  oddP10: 1.58,
  oddP11: 1.58,
  oddP12: 1.58,
  oddP1Dec: '5/7',
  oddP2Dec: '5/7',
  oddP3Dec: '5/7',
  oddP4Dec: '5/7',
  oddP5Dec: '5/7',
  oddP6Dec: '5/7',
  oddP7Dec: '5/7',
  oddP8Dec: '5/7',
  oddP9Dec: '5/7',
  oddP10Dec: '5/7',
  oddP11Dec: '5/7',
  oddP12Dec: '5/7',
  premioP1: '100050',
  premioP2: '100050',
  premioP3: '100050',
  premioP4: '100050',
  premioP5: '100050',
  premioP6: '100050',
  premioP7: '100050',
  premioP8: '100050',
  premioP9: '100050',
  premioP10: '100050',

});

app.listen(3000);