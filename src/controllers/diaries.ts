import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getDiaries = (_req: Request, res: Response) => {
    try {
        res.send('Fetching all diaries');
    } catch (error) {
        handleHttp(res, "ERROR_GET_ITEMS")
    }
}

const getDiary = (req: Request, res: Response) => {
    try {
        res.send(req.params.id);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM');
    }
}

const postDiaries = (req: Request, res: Response) => {
    try {
        const body = req.body;
        res.send(body);
    } catch (error) {
        handleHttp(res, 'ERROR_POST_ITEM');
    }
}

export { getDiaries, getDiary, postDiaries }