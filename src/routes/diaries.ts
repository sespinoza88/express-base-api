import express from 'express'
import { getDiaries, getDiary, postDiaries } from '../controllers/diaries'
import { checkJwt } from '../middleware/session';

/**
 * Solo pueden ingresar quienes tengan un jwt válido
 */

const router = express.Router()

router.get('/', checkJwt, getDiaries);
router.get('/:id', getDiary);
router.post('/', postDiaries);

export { router };