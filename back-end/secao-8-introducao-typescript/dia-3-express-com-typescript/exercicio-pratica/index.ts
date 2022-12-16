import express, { Request, Response } from 'express';
import statusCodes from './statusCodes';
import 'express-async-errors';
import validateStatus from './middlewares/validateStatus';
import { userRouter } from './routes';

const app = express();

app.use(express.json());

const PORT = 8000;

app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});