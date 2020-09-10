const grades = [];
let nextId = 1;

const express = require('express');
const app = express();

const parseJson = express.json();

app.use(parseJson);

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  const reqBody = req.body;
  req.body.id = nextId;
  nextId++;
  grades.push(reqBody);
  const currentEntry = grades[grades.length - 1];
  res.json(currentEntry);

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server running on port 3000');
});
