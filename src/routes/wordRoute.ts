import express from 'express';
import wordController from '../controllers/word.js';

const router = express.Router();
//@ts-ignore
router.post("/findMeaning",wordController);

export default router;