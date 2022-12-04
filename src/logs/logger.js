import winston from 'winston';

function buildProdLogger() {
  const prodLogger = winston.createLogger({
    transports: [
      //new winston.transports.Console(),
      new winston.transports.File({ filename: "./src/logs/warn.log", level: "warn" }),
      new winston.transports.File({ filename: "./src/logs/error.log", level: "error" }),
    ],
  });
  return prodLogger;
}
function buildDevLogger() {
  const devLogger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: "./src/logs/warn.log", level: "warn" }),
      new winston.transports.File({ filename: "./src/logs/error.log", level: "error" }),
    ],
  });
  return devLogger;
}

let logger = null;

if (process.env.NODE_ENV === "PROD") {
  logger = buildProdLogger();
} else {
  logger = buildDevLogger();
}

const sendInfoLog = (req) => {
  logger.info(`Ruta ${req.originalUrl} - con metodo: ${req.method} - time: ${new Date().toLocaleString()}`)
}
const sendWarnLog = (req) => {
  logger.warn(`Ruta ${req.originalUrl} Inexistente - con metodo: ${req.method}`);
}

export { logger, sendInfoLog, sendWarnLog };