/* eslint-disable no-console */
const users = [];
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      users.push(data[i]);
    }
  });

console.log(users);
