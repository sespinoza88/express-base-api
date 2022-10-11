import { Request, Response } from "express"
import { registerNewUser, loginUser } from "../services/auth"

const registerController = async ({body}: Request, res: Response) => {
    const responseUser = await registerNewUser(body);
    console.log(responseUser);
    res.send('Registrado con éxito')
}

const loginController = async (req: Request, res: Response) => {
    console.log(req.body);
    const loginUserResponse = await loginUser();
    res.send(loginUserResponse)
}

export {  registerController, loginController }