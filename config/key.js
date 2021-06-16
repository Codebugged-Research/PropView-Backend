if (process.env.NODE_ENV == "production") {
  console.log("prod-mode started")  
  module.exports = require("./prod");
} else {
  console.log("dev-mode started")  
  module.exports = require("./dev");
}
