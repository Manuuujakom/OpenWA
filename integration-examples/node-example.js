async function sendWhatsAppMessage(to, message) {
  const openwaUrl = 'http://localhost:2785/api';
  const sessionId = 'YOUR_SESSION_ID'; // e.g. "my-app-session"
  const apiKey = 'YOUR_API_KEY'; // From the OpenWA Dashboard

  const response = await fetch(`${openwaUrl}/sessions/${sessionId}/messages/send-text`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': apiKey
    },
    body: JSON.stringify({
      chatId: `${to}@c.us`, // Number with country code, e.g. 628123456789
      text: message
    })
  });

  const data = await response.json();
  console.log('Message sent:', data);
}

// Example usage
sendWhatsAppMessage('1234567890', 'Hello from my custom app!');
