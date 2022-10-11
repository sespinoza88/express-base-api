import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift();
    return file;
}

/**
 * Obtiene los nombres de los archivos en carpeta routes 
 * y arma las rutas de forma dinamica
 */

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if(cleanName !== 'index'){  
        import(`./${cleanName}`).then((routerModule) => {
            router.use(`/api/${cleanName}`, routerModule.router)
        })
    }
})

export { router };