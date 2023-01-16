import { Request, Response } from 'express';
import express from 'express';
import fs from 'fs';
const jwt = require('jsonwebtoken');

const wall = express.Router();

function verifyToken(req:Request, res:Response, next: any) {
    const authHeader = req.headers["authorization"];
    if (authHeader == null) return res.sendStatus(403);
    const token = fs.readFileSync('./token.txt');
    jwt.verify(authHeader, token.toString(), (err: any, decode: any) => {
        console.log(decode);
        console.log(err);
       if (err) return res.sendStatus(404);
       next();
       return;
    });
    return;
 }

wall.get('/world/api/v1/publication/list', verifyToken, (_req: Request, _res:Response) => {
    
});

wall.post('/world/api/v1/publication/upload', verifyToken, (req: Request, res: Response) => {
    console.log(req.body.content);
    console.log(req.body.listImages.length)
    console.dir(req.body.listImages);
    res.send("Hola mundo");
});


export default wall;
