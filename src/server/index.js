import consola from 'consola';
import { database_connect } from '../database/connection';
let server;
// databse connection
database_connect(server);
const exitHandler = () => {
  if (server) {
    server.close(() => {
      consola.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
    consola.error(error);
    exitHandler();
  };
  
  process.on('uncaughtException', unexpectedErrorHandler);
  process.on('unhandledRejection', unexpectedErrorHandler);

  process.on('SIGTERM', () => {
    consola.info('SIGTERM received');
    if (server) {
      server.close();
    }
  });
  
