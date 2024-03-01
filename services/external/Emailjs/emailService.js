import emailjs from '@emailjs/browser';
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from './config';

/**
 * Sends an email using the emailjs library.
 *
 * @param {string} fromName - The name of the sender.
 * @param {string} toName - The name of the recipient.
 * @param {string} fromEmail - The email address of the sender.
 * @param {string} toEmail - The email address of the recipient.
 * @param {string} message - The content of the email message.
 * @returns {Promise} A promise that resolves when the email is sent successfully.
 */
export function sendEmail(fromName, toName, fromEmail, toEmail, message) {
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      from_name: fromName,
      to_name: toName,
      from_email: fromEmail,
      to_email: toEmail,
      message: message,
    },
    EMAILJS_PUBLIC_KEY
  );
}
