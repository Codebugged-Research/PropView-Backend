const winston = require("winston");

const productionLogger = () => {
  return winston.createLogger({
    level: "silly",
    format: winston.format.json(),
    transports: [ 
      new winston.transports.File({ filename: "error.log", level: "error" }),
      new winston.transports.File({ filename: "combined.log" }),
    ],
  });
};

module.exports = productionLogger;
