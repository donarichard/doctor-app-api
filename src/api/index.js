import {Router} from 'express';
import appointment from './routes/appointment';


const router = Router();

appointment(router);



export default router;