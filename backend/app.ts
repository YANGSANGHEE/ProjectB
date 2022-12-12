import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port = 8080;

app
  .get('/', (req: Request, res: Response) => {
    res.end(`Server Start ${port} hipasspj`);
  })
  .listen(port, () => {
    console.log(`Server Start ${port} 하이패스 프로젝트`);
  });
