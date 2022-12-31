import { Request, Response } from 'express';
import expresss from 'express';
const AuthenticationInteractor = require('../AuthenticationInteractor');


const authentication = expresss.Router();

authentication.post('/world/api/v1/login', async (req: Request, res: Response) => {
    const {userName, password} = req.body;
    const authenticationInteractor = new AuthenticationInteractor();
    const user = await authenticationInteractor.login(userName, password);
   
    if (user === 404){
        res.status(404);
        res.send({ message: "User not Found, Please Try again !" });
    } else {
        res.status(200);
        res.send({ user: user });
    }
});

authentication.post('world/api/v1/signin', (_req: Request, _res: Response) => {

});

authentication.post('world/api/v1/logout', (_req: Request, _res: Response) => {

});

export default authentication;
