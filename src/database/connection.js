import app from '../bin';
import mongoose from 'mongoose';
import config from '../config';
export const database_connect = async(server)=>{
   await mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
        consola.success('Connected to MongoDB');
        server = app.listen(config.port, () => {
          consola.success(`Listening to port ${config.port}`);
        });
      });
};