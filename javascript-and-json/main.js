/* eslint-disable no-console */
const books = [
  {
    isbn: '1234567890',
    title: 'To kill a mockingbird',
    author: 'Harper Lee'
  },
  {
    isbn: '1234567891',
    title: 'The Subtle Art',
    author: 'Mark Manson'
  },
  {
    isbn: '1234567892',
    title: 'Clean Code',
    author: 'Robert C Martin'
  }
];

const jsonFormatted = JSON.stringify(books);
console.log(jsonFormatted);
console.log('type of: ', typeof (jsonFormatted));

const student = '{"Number ID": "123456", "Name": "Roger Moore"}';
const jsonParsed = JSON.parse(student);
console.log(jsonParsed);
