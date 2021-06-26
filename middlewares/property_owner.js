const redis = require("redis");
const client = redis.createClient(process.env.REDIS_PORT);

module.exports = {
  propertyOwnerCache: function (req, res, next) {
    client.get("propertyOwnerData", (err, data) => {
      if (err) {
        res.status(400).json({
          error: err,
        });
      }
      if (data != null) {
        data = JSON.parse(data);
        res.json({
          count: data.length,
          data,
        });
      } else {
        next();
      }
    });
  },
};
