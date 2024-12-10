const express = require('express');
const twilio = require('twilio');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));

require('dotenv').config();
// Twilio credentials (sign up at Twilio and get these from your account)
// Import dotenv

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilioClient = twilio(accountSid, authToken);

// WhatsApp sending function
const sendWhatsappMessage = async (to, message) => {
  try {
    const messageResponse = await twilioClient.messages.create({
      from: 'whatsapp:+14155238886', // Twilio sandbox WhatsApp number
      to: `whatsapp:${to}`,  // user's number in WhatsApp format
      body: message,
    });
    return messageResponse;
  } catch (error) {
    throw new Error('Failed to send WhatsApp message: ' + error.message);
  }
};

// POST route to send WhatsApp message
app.post('/send-whatsapp', async (req, res) => {
  const { phoneNumber, message } = req.body;

  try {
    const messageResponse = await sendWhatsappMessage(phoneNumber, message);
    res.status(200).json({ success: true, message: messageResponse });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
