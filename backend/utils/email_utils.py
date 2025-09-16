import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from typing import List, Dict
from datetime import datetime

def format_conversation_for_email(messages: List[Dict[str, any]]) -> str:
    """
    Formats a list of messages from the conversation into an HTML email body.
    :param messages: List of message dicts containing role, content, timestamp, etc.
    :return: HTML string of formatted conversation.
    """
    email_content = "<h2>PaulBot Interaction Summary</h2><ul>"

    seen_user_data = False  # To ensure name and mobile appear only once

    for msg in messages:
        role = msg.get("role")
        time_obj = msg.get("timestamp")

        # Format timestamp nicely if it's a datetime object
        if isinstance(time_obj, datetime):
            time_str = time_obj.strftime("%Y-%m-%d %H:%M:%S")
        else:
            time_str = str(time_obj) if time_obj else datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        # Handle interaction metadata message
        if msg.get("type") == "interaction":
            if not seen_user_data:
                user = msg.get("user_name", "Unknown User")
                number = msg.get("mobile_number", "N/A")
                metadata = msg.get("metadata", {})
                metadata_str = ", ".join(f"{k}: {v}" for k, v in metadata.items())
                email_content += (
                    f"<li><b>Name:</b> {user} <br><b>Mobile:</b> {number}<br>"
                    f"<b>Metadata:</b> {metadata_str}</li>"
                )
                seen_user_data = True
            else:
                # Show only metadata except name/mobile for other interaction logs
                metadata = msg.get("metadata", {})
                filtered_metadata = {
                    k: v for k, v in metadata.items()
                    if k.lower() not in ["name", "mobile", "user_name", "mobile_number"]
                }
                if filtered_metadata:
                    metadata_str = ", ".join(f"{k}: {v}" for k, v in filtered_metadata.items())
                    email_content += f"<li><b>{metadata_str}</b></li>"
            continue

        # Format normal conversation messages
        content = (msg.get("content") or "").strip()
        if not content:
            continue

        display_role = "🧑 Customer" if role == "user" else "🤖 PaulBot"
        email_content += f"<li><b>{display_role} ({time_str})</b>: {content}</li>"

    email_content += "</ul>"
    return email_content


def send_email(subject: str, html_content: str, recipient: str):
    """
    Sends an email with the specified subject and HTML content to the recipient using SMTP.
    Reads SMTP config from environment variables:
    - EMAIL_HOST (default: smtp.gmail.com)
    - EMAIL_PORT (default: 587)
    - EMAIL_USER
    - EMAIL_PASS

    :param subject: Email subject line.
    :param html_content: Email body in HTML format.
    :param recipient: Recipient email address.
    """
    SMTP_HOST = os.getenv("EMAIL_HOST", "smtp.gmail.com")
    SMTP_PORT = int(os.getenv("EMAIL_PORT", 587))
    SMTP_USER = os.getenv("EMAIL_USER")
    SMTP_PASS = os.getenv("EMAIL_PASS")

    if not (SMTP_USER and SMTP_PASS):
        print("❌ Missing SMTP credentials in environment variables (EMAIL_USER/EMAIL_PASS)")
        return

    msg = MIMEMultipart()
    msg["From"] = SMTP_USER
    msg["To"] = recipient
    msg["Subject"] = subject
    msg.attach(MIMEText(html_content, "html"))

    server = None
    try:
        server = smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=10)
        server.set_debuglevel(1)  # Enable debug output like Spring's mail.debug=true
        server.ehlo()
        server.starttls()
        server.ehlo()
        server.login(SMTP_USER, SMTP_PASS)
        server.send_message(msg)
        print(f"✅ Email sent successfully to {recipient}.")
    except Exception as e:

        print(f"❌ Failed to send email: {e}")
    finally:
        if server:
            try:
                server.quit()
            except Exception:
                pass

        print("❌ Failed to send email:", e)

