import { Request, Response } from 'express';
import express from 'express';
const jwt = require('jsonwebtoken');

const wall = express.Router();

function verifyToken(req:Request, res:Response, next: any) {
    const authHeader = req.headers["authorization"];
    if (authHeader == null) return res.sendStatus(403);
    jwt.verify(authHeader, req.session.token, (err: any, decode: any) => {
        console.log(decode);
        console.log(err);
       if (err) return res.sendStatus(404);
       next();
       return;
    });
    return;
 }

wall.get('/world/api/v1/post/list', verifyToken, (_req: Request, _res:Response) => {
    
});

wall.post('/world/api/v1/post', verifyToken, (_req: Request, _res: Response) => {

});
