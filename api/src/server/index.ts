import cors from 'cors';
import express, { Request, Response } from 'express';
import { useExpressServer } from 'routing-controllers';

import { setupSwagger } from '../config/swagger';

const app = express();

app.use(express.json());
app.use(cors());

setupSwagger(app);

useExpressServer(app, {
  controllers: [],
});

app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

export default app;
