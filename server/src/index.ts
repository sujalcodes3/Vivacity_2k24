import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
      res.json({
            message: 'Vivacity_2k24 server - init',
      });
});

app.listen(3000);
