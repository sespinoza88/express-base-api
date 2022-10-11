import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET: string = process.env.JWR_SECRET as string;

const generateToken = async (id: string) => {
    const jwt = await sign({id}, JWT_SECRET, {
        expiresIn: "2h"
    });
    return jwt;
}

const verifyToken = async (jwt: string) => {
    const isValid = await verify(jwt, JWT_SECRET);
    return isValid;
}

export { generateToken, verifyToken }