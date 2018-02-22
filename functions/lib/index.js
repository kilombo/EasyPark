"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
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
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);
const sendAdminEmail = (subject, text) => __awaiter(this, void 0, void 0, function* () {
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
});
/*
  Send email alert to admin when a contact message is received.
*/
exports.sendEmailContactAlert = functions.firestore.document("contactMessages/{messageId}").onCreate((event) => __awaiter(this, void 0, void 0, function* () {
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
        yield sendAdminEmail(emailSubject, emailText);
    }
    catch (error) {
        throw new Error(error);
    }
}));
/**
 * On user created
 * @type {CloudFunction<UserRecord>}
 */
exports.created = functions.auth.user().onCreate((event) => __awaiter(this, void 0, void 0, function* () {
    const user = event.data;
    const name = user.displayName ? user.displayName : null;
    const email = user.email ? user.email : null;
    const providerData = user.providerData ? user.providerData : null;
    const photoURL = user.photoURL ? user.photoURL : null;
    const emailSubject = 'EasyPark - Nuevo usuario registrado!';
    const emailText = `
  Se ha registrado un nuevo usuario!

  uid: ${user.uid}

  Datos del usuario:
  Nombre: ${name}
  Email: ${email}`;
    try {
        yield sendAdminEmail(emailSubject, emailText);
    }
    catch (error) {
        throw new Error(error);
    }
}));
//# sourceMappingURL=index.js.map