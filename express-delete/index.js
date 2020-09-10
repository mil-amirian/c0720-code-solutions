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

app.delete('/api/grades/:id', (req, res) => {
  const userRequestId = parseInt(req.params.id);
  const index = grades.findIndex(studentId => studentId.id === userRequestId);
  if (index === -1) {
    res.sendStatus(404);
  } else {
    grades.splice(index, 1);
    res.sendStatus(204);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server running on port 3000');
});
