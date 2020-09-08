const express = require('./node_modules/express/index.js');

const app = express();

app.use(function (req, res, next) {
  // eslint-disable-next-line no-console
  console.log(req.method);
  res.send('<h1>Hello, World!</h1>');
  next();
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 3000');
});
