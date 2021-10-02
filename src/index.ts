import express from 'express';
import userRouter from './api/v1/routes/users';

const app = express();
const PORT = 8000;

app.use(express.json());

app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
