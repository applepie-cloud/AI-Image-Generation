import express from 'express';
import { genImage } from '../controllers/imageController.js';
import userAuth from '../middlewares/auth.js';

const imageRouter = express.Router();

imageRouter.post('/generate',userAuth,genImage);

export default imageRouter;