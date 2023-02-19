import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

import connectDB from './services/db';

import userRoutes from './routes/user.routes';

const app: Express = express();
const port = process.env.PORT;

connectDB();

app.use(express.json());

app.use(userRoutes);

app.get('/api/sanity', (req: Request, res: Response) => {
  res.send('sanity check, ts and express are working');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});