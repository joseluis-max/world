import express from 'express';
import authentication from './Repository/Application/Routes/authentication';
import wall from './Repository/Application/Routes/wall';
import * as dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();
const PORT: string | undefined = process.env.API_PORT;

app.use(express.json({limit: '50mb'}));
app.use(cors());

app.use('/', authentication);
app.use('/', wall);

app.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
});
