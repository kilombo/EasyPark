import * as functions from 'firebase-functions';
// import * as admin from "firebase-admin";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
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
