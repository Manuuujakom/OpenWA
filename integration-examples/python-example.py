import requests

def send_whatsapp_message(to, message):
    openwa_url = "http://localhost:2785/api"
    session_id = "YOUR_SESSION_ID" # e.g. "my-app-session"
    api_key = "YOUR_API_KEY" # From the OpenWA Dashboard

    url = f"{openwa_url}/sessions/{session_id}/messages/send-text"
    headers = {
        "Content-Type": "application/json",
        "X-API-Key": api_key
    }
    payload = {
        "chatId": f"{to}@c.us", # Number with country code, e.g. 628123456789
        "text": message
    }

    response = requests.post(url, json=payload, headers=headers)
    print("Message sent:", response.json())

# Example usage
if __name__ == "__main__":
    send_whatsapp_message("1234567890", "Hello from my custom Python app!")
