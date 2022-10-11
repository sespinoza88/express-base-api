import { User } from "../interfaces/user.interface";
import { encrypt } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async (authUser: User) => {
    //Buscar si existe usuario
    // Si existe retornar que ya existe
    // Si no, crear;
    const passHash = encrypt(authUser.password);
    console.log(passHash);
    return authUser;
}

const loginUser = async () => {
    //Buscar si existe usuario
    //Si no existe devolver credenciales invalidas
    // comparar contraseña contra contraseña encriptada
    const token = await generateToken("sebastian");

    const data = {
        token,
        user: 'user'
    }

    return data;
}

export { registerNewUser, loginUser };