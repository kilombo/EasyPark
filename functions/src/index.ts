import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const config = functions.config();
admin.initializeApp(config.firebase);

const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(
  `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

const sendAdminEmail = async (subject: string, text: string) => {
  const to_email = 'enrique.eqg@gmail.com';
  const mailOptions = {
    from: '"EasyPark" <nicoquve@gmail.com>',
    to: to_email,
    subject: subject,
    text: text
  };

  return mailTransport.sendMail(mailOptions).then(() => {
    console.log('sendAdminEmail sent to:', to_email);
  });

};


/*
  Send email alert to admin when a contact message is received.
*/
export const sendEmailContactAlert = functions.firestore.document("contactMessages/{messageId}").onCreate(async (event) => {
  const messageId = event.data.id;
  const messageData = event.data.data();
  const emailSubject = 'EasyPark - Nuevo mensaje de Contacto!';
  const emailText = `
  Has recibido un nuevo mensaje de Contacto!

  Id del mensaje: ${messageId}

  Datos del mensaje:
  Nombre: ${messageData.name}
  Email: ${messageData.email}
  Mensaje: ${messageData.comments}`;
  try {
    await sendAdminEmail(emailSubject, emailText);
  } catch (error) {
    throw new Error(error);
  }
});
