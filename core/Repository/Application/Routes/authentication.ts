import { Request, Response } from 'express';
import expresss from 'express';
import Database from '../../DatabaseRepository';
import AuthenticationInteractor from '../AuthenticationInteractor';
import SignInInteractor from '../SignInInteractor';
import uuid4 from "uuid4";
const jwt = require('jsonwebtoken');
const authentication = expresss.Router();

declare module 'express-session' {
    interface SessionData {
        token: String;
    }
}

authentication.post('/world/api/v1/login', async (req: Request, res: Response) => {
    const {email, password} = req.body;
    try {
        const authenticationInteractor = new AuthenticationInteractor();
        const user = await authenticationInteractor.login(new Database(), email, password);
        if (user === 404){
            res.status(404);
            res.send({ message: "User not Found, Please Try again !" });
        } else if (user === 500) {
            res.status(500);
            res.send();
        } else {
            const token = uuid4();
            req.session.token = token;
            jwt.sign({user: user.id.toString()}, token, { expiresIn: '1d' }, (err: any, jsonwebtoken: String) => {
                if (err) res.status(500).send();
                res.status(200).send({
                    user,
                    jsonwebtoken
                })
            });
        }
    } catch (error) {
        console.log("🚀 ~ file: authentication.ts:35 ~ authentication.post ~ error", error);   
    }
   
});

authentication.post('/world/api/v1/signin', async (req: Request, res: Response) => {
    const { userName, email, firstName, lastName, password, birthDate, gender, age } = req.body;
    const signInInteractor = new SignInInteractor(new Database());
    const response = await signInInteractor.singIn(userName, email, firstName, lastName, password, birthDate, gender, age);
    console.log(response);
    if (response === 409){
      res.status(409).send({msg: "Email already exists !"});
    } else if (response === 400) {
      res.status(400).send({ msg: "You are mising one or more fields, please fill and try again"});
    } else {
      res.status(200).send(response);
    }
});

authentication.get('/world/api/v1/logout', (req: Request, res: Response) => {
  const authHeader = req.headers["authorization"];
  jwt.sign(authHeader, "", { expiresIn: 1 } , (logout: any, err: any) => {
    if (err) res.status(500).send();
    if (logout) {
        res.send({msg : 'Has sido desconectado' });
    } else {
        res.send({msg:'Error'});
    }
  });
});

export default authentication;
