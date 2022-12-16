import express, { Request, Response } from 'express';
import statusCodes from './statusCodes';
import validateStatus from './middlewares/validateStatus';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', validateStatus, (_req: Request, res: Response) => {
    res.status(statusCodes.OK).send('Express + TypeScript')
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});