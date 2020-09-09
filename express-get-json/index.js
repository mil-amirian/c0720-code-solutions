
const express = require('express');
const path = require('path');
const app = express();

const students = [
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

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/grades', (req, res) => {
  res.json(students);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server running on port 3000');
});
