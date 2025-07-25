import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from typing import List, Dict
from datetime import datetime

def format_conversation_for_email(messages: List[Dict[str, str]]) -> str:
    email_content = "<h2>PaulBot Interaction Summary</h2><ul>"

    seen_user_data = False  # To ensure name and mobile appear only once

    for msg in messages:
        role = msg.get("role")
        time = msg.get("timestamp", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

        # Show user metadata (name & mobile) only once
        if msg.get("type") == "interaction":
            if not seen_user_data:
                user = msg.get("user_name", "Unknown User")
                number = msg.get("mobile_number", "N/A")
                metadata_str = ", ".join(f"{k}: {v}" for k, v in msg.get("metadata", {}).items())
                 # email_content += f"<li><b>🤖 Bot:</b> <i>{event_type}</i> by <b>{user}</b> at {time}<br>Metadata: {metadata_str}</li>"
                email_content += f"<li><b>Name:</b> {user} <br><b>Mobile:</b> {number}<br> <b>{metadata_str}</b></li>"
                seen_user_data = True
            else:
                # Show only metadata (like option, adventure etc.) but skip name and mobile again
                metadata = msg.get("metadata", {})
                filtered_metadata = {k: v for k, v in metadata.items() if k.lower() not in ["name", "mobile", "user_name", "mobile_number"]}
                metadata_str = ", ".join(f"{k}: {v}" for k, v in filtered_metadata.items())
                if metadata_str:
                    email_content += f"<li><b>{metadata_str}</b></li>"
            continue

        # Format normal messages
        content = msg.get("content", "").strip()
        if not content:
            continue

        display_role = "🧑 Customer" if role == "user" else "🤖 PaulBot"
        email_content += f"<li><b>{display_role} ({time})</b>: {content}</li>"

    email_content += "</ul>"
    return email_content

def send_email(subject: str, html_content: str, recipient: str = "aasthaarya2004@gmail.com"):
    
    msg = MIMEMultipart()
    msg["From"] = os.getenv("EMAIL_USER")
    msg["To"] = recipient
    msg["Subject"] = subject

    msg.attach(MIMEText(html_content, "html"))

    try:
    #   if input.message.lower().strip() in ["done", "end", "thank you"]:
        server = smtplib.SMTP(os.getenv("EMAIL_HOST"), int(os.getenv("EMAIL_PORT")))
        server.starttls()
        server.login(os.getenv("EMAIL_USER"), os.getenv("EMAIL_PASS"))
        server.send_message(msg)
        server.quit()
        print("✅ Email sent successfully.")
    except Exception as e:
        print("❌ Failed to send email:", e)
