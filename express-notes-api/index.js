const express = require('express');
const app = express();
// const path = require('path');
const useJson = express.json();
const jsonData = require('./data.json');
const notes = jsonData.notes;
const notesContent = Object.keys(notes);
const notesArr = [];
const putEachNoteObjectIntoArray = () => {
  notesContent.forEach(keyInsideJson => {
    notesArr.push(notes[keyInsideJson]);
  });
};

app.use(useJson);

app.get('/api/notes', (req, res) => {
  res.status(200).send(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  const userRequestId = parseInt(req.params.id);
  if (userRequestId <= 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (userRequestId < notesArr.length) {
    for (let i = 0; i < notesArr.length; i++) {
      if (notesArr[i].id === userRequestId) {
        res.status(200).send(notesArr[i]);
      }
    }
  } else {
    res.status(404).send({ error: `cannot find note with id ${userRequestId}` });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server running on port 3000');
});

putEachNoteObjectIntoArray();
