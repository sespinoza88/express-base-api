import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt.handle";


const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization;
        if(!jwtByUser) {
            res.status(400);
            res.send("SIN_TOKEN");
            return;
        }
        const jwt = jwtByUser?.split(' ').pop();

        console.log(typeof jwt);
        if(typeof jwt !== 'string') {
            res.status(400);
            res.send("TOKEN_NO_VALIDO");
            return;
        }

        const isValid = verifyToken(`${jwt}`);
        if(!isValid) {
            res.status(400);
            res.send("SESSION_NO_VALIDA");
            return;
        };

        next();
    } catch (error) {
        res.status(400);
        res.send('ERROR_SESSION_VALIDATE');
    }
}

export { checkJwt }