/* eslint-disable no-console */

const fs = require('fs');
const dataJson = require('./data.json');
const notes = dataJson.notes;
const userRequest = process.argv[2];
const userNoteOne = process.argv[3];
const userNoteTwo = process.argv[4];
const nextId = dataJson.nextId;

const read = () => {
  for (const key in notes) {
    const eachItem = `${key}: ${notes[key]}`;
    console.log(eachItem);
  }
};

const create = () => {
  notes[nextId] = userNoteOne;
  dataJson.nextId += 1;
  fs.writeFile('data.json', JSON.stringify(dataJson, null, 2), err => {
    if (err) throw err;
  });
};

const update = () => {
  for (const key in notes) {
    if (userNoteOne === key) {
      notes[key] = userNoteTwo;
      fs.writeFile('data.json', JSON.stringify(dataJson, null, 2), err => {
        if (err) throw err;
      });
    }
  }
};

const itemDelete = () => {
  delete notes[userNoteOne];
  fs.writeFile('data.json', JSON.stringify(dataJson, null, 2), err => {
    if (err) throw err;
  });
};

switch (userRequest) {
  case 'read':
    read();
    break;
  case 'create':
    create();
    break;
  case 'update':
    update();
    break;
  case 'delete':
    itemDelete();
    break;
}
