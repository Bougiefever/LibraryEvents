var Queue = require('firebase-queue');
var admin = require('firebase-admin');

var serviceAccount = require("../../../browncountylibraryevents-firebase-adminsdk-ar0mr-71ef294f02.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://browncountylibraryevents.firebaseio.com"
});