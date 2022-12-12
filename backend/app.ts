import * as express from 'express';
const port: number = 8080;

const app: express.Application = express();

app
  .get('/', (req: express.Request, res: express.Response) => {
    res.send('하이패스 서버');
  })
  .listen(port, (err?: ErrorCallback) => {
    if (err) throw err;
    console.log(`start Server ${port}`);
  });
