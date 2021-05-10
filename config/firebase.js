const admin = require("firebase-admin");

var serviceAccount = require("./propview-1fe6c-firebase-adminsdk-349cg-004f11e037.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
