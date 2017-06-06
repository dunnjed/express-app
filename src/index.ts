import * as express from 'express';
import * as routes from './routes';
const app = express();

app.use('/api', routes.routes);

app.get('/', function (req, res) {
  let data = routes.parse(['hello', 'world', 'again']);
  res.send(`Hello ${data}!`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});