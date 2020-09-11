const express = require('express');
const app = express();
const fs = require('fs');
const useJson = express.json();
const jsonData = require('./data.json');

app.use(useJson);

const pushJsonIntoArray = () => {
  const resArr = [];
  const eachNoteArr = Object.entries(jsonData.notes);
  for (let i = 0; i < eachNoteArr.length; i++) {
    resArr.push(eachNoteArr[i][1]);
  }
  return resArr;
};

app.get('/api/notes', (req, res) => {
  res.status(200).send(pushJsonIntoArray());
});

app.get('/api/notes/:id', (req, res) => {
  const resArr = pushJsonIntoArray();

  const userRequestId = parseInt(req.params.id);
  if (userRequestId <= 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (userRequestId < jsonData.nextId) {
    for (let i = 0; i < resArr.length; i++) {
      if (resArr[i].id === userRequestId) {
        res.status(200).send(resArr[i]);
      }
    }
  } else if (!userRequestId) {
    res.status(400).send({ error: 'id must be a positive integer' });

  } else {
    res.status(404).send({ error: `cannot find note with id ${userRequestId}` });
  }
});

app.post('/api/notes', (req, res) => {
  const content = req.body;

  if (Object.keys(content).length === 0 || !('content' in req.body)) {
    res.status(400).send({ error: 'Content is a required field' });

  } else if ('content' in content) {
    jsonData.notes[jsonData.nextId] = content;
    jsonData.notes[jsonData.nextId].id = jsonData.nextId;
    jsonData.nextId++;
    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error occured' });

      }
    });
    const currentId = jsonData.nextId - 1;
    res.status(201).send(jsonData.notes[currentId]);
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const userRequestId = parseInt(req.params.id);
  if (userRequestId <= 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (userRequestId < jsonData.nextId && jsonData.notes[userRequestId] !== undefined) {
    delete jsonData.notes[userRequestId];
    res.sendStatus(204);
    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error occured' });
      }
    });
  } else if (!userRequestId) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else {
    res.status(404).send({ error: `cannot find note with id ${userRequestId}` });
  }
});

app.put('/api/notes/:id', (req, res) => {

  const userRequestId = parseInt(req.params.id);
  const requestBody = req.body;

  if (userRequestId <= 0 || Object.keys(requestBody).length === 0 || !('content' in req.body)) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!jsonData.notes[req.params.id] && requestBody) {
    res.status(404).send({ error: `cannot find note with id ${userRequestId}` });

  } else if (userRequestId > 0 && userRequestId < jsonData.nextId && requestBody) {
    jsonData.notes[userRequestId].content = requestBody.content;
    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error occured' });
        return;
      }
      res.status(200).send(jsonData.notes[userRequestId]);
    });

  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server running on port 3000');
});
