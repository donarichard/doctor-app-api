import Appointment from '../database/models/appointment';
/**
 * Functionality used to book appointment
 * from the database
 * @param {*} appointment appointment data
 * @returns {Object} appointment
 */
export const addAppointment = async (appointment) => {
  try {
    const checkBookingExit = await Appointment.find({
      $and: [
        {
          bookingDate: { $eq: appointment.bookingDate },
        },
      ],
      $or: [
        {
          $and: [
            {
              startTime: {
                $lte: new Date(appointment.startTime),
              },
            },
            {
              endTime: {
                $gte: new Date(appointment.startTime),
              },
            },
          ],
        },
        {
          $and: [
            {
              startTime: {
                $lte: new Date(appointment.endTime),
              },
            },
            {
              endTime: {
                $gte: new Date(appointment.endTime),
              },
            },
          ],
        },
        {
          $and: [
            {
              startTime: {
                $gte: new Date(new Date(appointment.startTime)),
              },
            },
            {
              endTime: {
                $lte: new Date(new Date(appointment.endTime)),
              },
            },
          ],
        },
      ],
    });
    if (checkBookingExit.length > 0) {
      throw 'Sorry Already booked';
    }
    const appointments = new Appointment(appointment);
    const newAppointment = await appointments.save();
    return newAppointment;
  } catch (error) {
    throw error;
  }
};
/**
 * Functionality used to get appointment list
 * from the database
 * @returns {Object} appointment
 */
export const getAppointmentList = async () => {
  try {
    const appointments = await Appointment.find({}).lean();
    return appointments;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addAppointment,
  getAppointmentList,
};
