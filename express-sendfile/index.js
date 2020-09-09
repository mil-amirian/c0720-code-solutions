const express = require('./node_modules/express/index');
const app = express();

app.use(function (req, res, next) {
  res.sendFile(req.originalUrl, { root: __dirname });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 3000');
});
