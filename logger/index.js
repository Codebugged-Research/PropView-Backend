const productionLogger = require("./production-logger");
let logger = null;

if (process.env.NODE_ENV === "production") {
  logger = productionLogger();
}

module.exports = logger;
