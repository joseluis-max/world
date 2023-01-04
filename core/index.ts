import { Request, Response } from 'express';
import express from 'express';
import authentication from './Repository/Application/Routes/authentication';
import * as dotenv from 'dotenv';
import session from 'express-session';
import uuid4 from "uuid4";

const app = express();
dotenv.config();
const PORT: string | undefined = process.env.API_PORT;

app.use(express.json());
app.set('trust proxy', 1) // trust first proxy
app.use(session({  
  name: `session`,
  secret: uuid4(),
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false, // This will only work if you have https enabled!
    maxAge: 60000 // 1 min
  } 
}));


app.use('/', authentication);
app.get("/ping", (_req: Request, res: Response) => {
    res.send("Pong");
});

app.listen(PORT, () => {
    console.log(`Server running in port: ${PORT}`);
});
