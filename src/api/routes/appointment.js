import {Router} from 'express';
import {Joi, celebrate, Segments, errors} from 'celebrate';
import { bookAppointMent, getAppointment } from '../../services/appointment';

/**
 * This router to appointment
 */
export default (app) =>{
    const router = Router();
    app.use('/appointment', router);
    router.route('/').get(getAppointment);
    router.route('/').post(
        celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            reason: Joi.string().required(),
            bookingDate: Joi.date().required(),
            startTime: Joi.date().required(),
            endTime: Joi.date().required(),
        })
    }),bookAppointMent);
    app.use(errors());
};