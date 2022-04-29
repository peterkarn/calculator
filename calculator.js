//express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Запуск сервера
app.listen(3000, () => {
  console.log('listening on port 3000');
});

//Обработка GET запроса и ответ сервера в виде страницы HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//Другой роут
app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmicalculator.html');
});

// Обработка POST запроса и ответ сервера
app.post('/', (req, res) => { 
  let numOne = +req.body.numberOne;
  let numTwo = +req.body.numberTwo;
  let sum = numOne + numTwo;
  // ответ
  res.send(`The sum of ${numOne} and ${numTwo} is ${sum}`);
});

app.post('/bmicalculator', (req, res) => {
  let weight = req.body.wght;
  let numheightTwo = req.body.hght;
  const bMindex = () => weight / (numheightTwo * numheightTwo);
  res.send(`Your BMI index is ${parseInt(bMindex())}`);
});