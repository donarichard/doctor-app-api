import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**
 * Appointment model design.
 * @returns {mongooseModel} it returns the schema model of user
 */
const appointment = new Schema({
    name:{
        type:String,
        required:true,
    },
    reason:{
        type:String,
        required:true
    },
    bookingDate:{
        type:Date,
        required:true
    },
    startTime:{
        type:Date,
        required:true
    },
    endTime:{
        type:Date,
        required:true
    },
    
}, { timestamps: true });

export default mongoose.model('Appointment', appointment);