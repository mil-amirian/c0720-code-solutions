const express = require('express');
const userRequest = express.json();
const app = express();

const grades = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 9001
  },
  {
    id: 2,
    name: 'Smol Mario',
    course: 'Jumping',
    grade: 9004
  }
];

app.use(userRequest);

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.delete('/api/grades/:gradesIndex', (req, res) => {
  const requestedIndexValue = req.params.gradesIndex - 1;
  grades.splice(requestedIndexValue, requestedIndexValue + 1);
  res.status(204).json(grades);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server running on port 3000');
});
