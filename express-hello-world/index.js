const express = require('./node_modules/express/index.js');

const app = express();

app.use(function (req, res, next) {
  res.send('Hello, World!');
  next();
});

app.listen(3000, () => {
  print('Server is running on port 3000');
});
