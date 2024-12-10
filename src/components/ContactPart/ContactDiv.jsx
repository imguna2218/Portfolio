import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function ContactDiv() {
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [whatsappMessage, setWhatsappMessage] = useState('');
  const [gmailUsername, setGmailUsername] = useState('');
  const [gmailMessage, setGmailMessage] = useState('');

  const handleWhatsappSend = async () => {
    const whatsappData = {
      phoneNumber: whatsappNumber,
      message: whatsappMessage,
    };

    try {
      const response = await fetch('http://localhost:5000/send-whatsapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(whatsappData),
      });
      const result = await response.json();
      if (result.success) {
        alert('WhatsApp message sent successfully!');
      } else {
        alert('Error sending WhatsApp message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending WhatsApp message.');
    }
  };

  const handleGmailSend = async () => {
    const emailData = {
      email: gmailUsername,
      message: gmailMessage,
    };

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });
      const result = await response.json();
      if (result.success) {
        alert('Email sent successfully!');
      } else {
        alert('Error sending email.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending email.');
    }
  };

  return (
    <div id="contactpart" className="relative h-screen w-screen bg-cover bg-center flex flex-col items-center mt-20">
      <h1 className="text-center text-4xl font-bold mb-8">
        Contact <span className="text-red-500">Me</span>
      </h1>
      <div className="contact-options flex flex-col sm:flex-row items-center justify-center gap-8">
        <div className="w-full max-w-[600px] flex flex-col items-center justify-center mb-8 sm:mb-0 sm:mr-8">
          <div className="w-[150px] h-[150px] bg-gradient-to-r from-red-500 to-black rounded-full flex items-center justify-center mb-6">
            <FaWhatsapp className="text-white text-6xl" />
          </div>
          <input
            type="text"
            placeholder="Enter your phone number with country code (e.g., +91 8885522517)"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg mb-4 w-full max-w-[400px]"
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg mb-4 w-full max-w-[400px] h-32 resize-none"
            value={whatsappMessage}
            onChange={(e) => setWhatsappMessage(e.target.value)}
          />
          <button
            className="bg-gradient-to-r from-red-500 to-black text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:from-red-800 hover:to-black"
            onClick={handleWhatsappSend}
          >
            Send Message
          </button>
        </div>
        <div className="w-full max-w-[600px] flex flex-col items-center justify-center sm:ml-8">
          <div className="w-[150px] h-[150px] bg-gradient-to-r from-red-500 to-black rounded-full flex items-center justify-center mb-6">
            <FaEnvelope className="text-white text-6xl" />
          </div>
          <input
            type="text"
            placeholder="Your Email"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg mb-4 w-full max-w-[400px]"
            value={gmailUsername}
            onChange={(e) => setGmailUsername(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg mb-4 w-full max-w-[400px] h-32 resize-none"
            value={gmailMessage}
            onChange={(e) => setGmailMessage(e.target.value)}
          />
          <button
            className="bg-gradient-to-r from-red-500 to-black text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:from-red-800 hover:to-black"
            onClick={handleGmailSend}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactDiv;
