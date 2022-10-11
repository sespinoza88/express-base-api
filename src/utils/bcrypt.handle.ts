import { hash, compare } from 'bcrypt'

const encrypt = async (pass: string) => {
    const passHash = await hash(pass, 8);
    return passHash;
}

const verificatePass = async (pass: string, passHash: string) => {
    const isCorrect = await compare(pass, passHash);
    return isCorrect;
}

export { encrypt, verificatePass }