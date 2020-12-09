import { BAD_REQUEST, OK } from 'http-status';
import { addAppointment, getAppointmentList } from '../controllers/appointment';

export const bookAppointMent = async (req, res) => {
  try {
    const appointment = await addAppointment(req.body);
    res.status(OK).send(appointment);
  } catch (error) {
    res.status(BAD_REQUEST).send({
      error: error,
    });
  }
};
export const getAppointment = async (req, res) => {
  try {
    const appointment = await getAppointmentList();
    appointment.map(doc=>{
        doc.time = new Date(doc.startTime).toLocaleTimeString();
        doc.startTime = new Date(doc.startTime).toLocaleDateString();
        doc.endTime = new Date(doc.endTime);
        return doc;
    });
    if(appointment){
        res.status(OK).send({
            count:appointment.length,
            appointment:appointment
        });
    }
  } catch (error) {
    res.status(BAD_REQUEST).send({
      error: error,
    });
  }
};
