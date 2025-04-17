import express from 'express';
import { sendConfirmationEmail, sendLowInventoryAlert, sendInquiryEmail, sendFeedbackEmail } from "../Controllers/EmailController.js";

const router = express.Router();

router.post('/send-confirmation-email', sendConfirmationEmail);
router.post('/send-low-inventory-alert', sendLowInventoryAlert);
router.post('/send-inquiry-email', sendInquiryEmail);
router.post('/send-feedback-email', sendFeedbackEmail);

export default router;
