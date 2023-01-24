import { Request, Response } from 'express';
import WallInteracator from '../WallInteractor';
import Database from '../../DatabaseRepository';
import express from 'express';
import fs from 'fs';
const jwt = require('jsonwebtoken');
const wall = express.Router();

wall.use(
    (req:Request, res:Response, next: any) => {
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
)

wall.get('/world/api/v1/publication/list', async (_req: Request, res:Response) => {
    const wallInteractor = new WallInteracator(new Database());
    const response = await wallInteractor.listPublication();
    for (let pub of response) {
        let images_utf8 = [];
        let videos_utf8 = [];
        for(let image of pub.images) {
            images_utf8.push(Buffer.from(image.bytea).toString('utf-8'));
        }
        for(let video of pub.videos) {
            videos_utf8.push(Buffer.from(video.bytea).toString('utf-8'));
        }
        pub.images = images_utf8;
        pub.videos = videos_utf8;
    }
    res.send(response);
});

wall.post('/world/api/v1/publication/upload', (req: Request, res: Response) => {
    const { content, user, date, listImages, listVideos } = req.body;
    const wallInteractor = new WallInteracator(new Database());
    const response = wallInteractor.uploadPublication(content, date, user, listImages, listVideos);
    res.send(response);
});


export default wall;
