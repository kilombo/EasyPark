"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// import * as admin from "firebase-admin";
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
// const config = functions.config();
// admin.initializeApp(config.firebase);
/*
  Send email alert to admin when a contact message is sent.
*/
// export const sendEmailContactAlert = functions.firestore.document("contactMessages/{messageId}").onCreate(async (event) => {
//   try {
//     //await updateSummary(event, "activities");
//     console.log('sending email contact alert');
//   } catch (error) {
//     throw new Error(error);
//   }
// });
//# sourceMappingURL=index.js.map