import { Request, Response } from 'express';
import express from 'express';
import authentication from './Repository/Application/Routes/authentication';
import * as dotenv from 'dotenv';

const app = express();
dotenv.config();
const PORT: string | undefined = process.env.API_PORT;
app.use(express.json());

app.use('/', authentication);

app.get("/ping", (_req: Request, res: Response) => {
    res.send("Pong");
});

app.listen(PORT, () => {
    console.log(`Server running in port: ${PORT}`);
});
