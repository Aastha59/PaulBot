# import os
# import smtplib
# from email.mime.multipart import MIMEMultipart
# from email.mime.text import MIMEText
# from typing import List, Dict
# from datetime import datetime

# def format_conversation_for_email(messages: List[Dict[str, str]]) -> str:
#     email_content = "<h2>PaulBot Conversation Log</h2><ul>"
#     for msg in messages:
#         role = "🧑 Customer" if msg["role"] == "user" else "🤖 PaulBot"
#         time = (
#             msg["timestamp"].strftime("%Y-%m-%d %H:%M:%S")
#             if isinstance(msg["timestamp"], datetime)
#             else msg["timestamp"]
#         )
#         email_content += f"<li><b>{role} ({time})</b>: {msg['content']}</li>"
#     email_content += "</ul>"
#     return email_content

# def send_email(subject: str, html_content: str, recipient: str = "aastha@example.com"):
#     msg = MIMEMultipart()
#     msg["From"] = os.getenv("EMAIL_USER")
#     msg["To"] = recipient
#     msg["Subject"] = subject

#     msg.attach(MIMEText(html_content, "html"))

#     try:
#         server = smtplib.SMTP(os.getenv("EMAIL_HOST"), int(os.getenv("EMAIL_PORT")))
#         server.starttls()
#         server.login(os.getenv("EMAIL_USER"), os.getenv("EMAIL_PASS"))
#         server.send_message(msg)
#         server.quit()
#         print("✅ Email sent successfully.")
#     except Exception as e:
#         print("❌ Failed to send email:", e)



# import os
# import smtplib
# from email.mime.multipart import MIMEMultipart
# from email.mime.text import MIMEText
# from typing import List, Dict
# from datetime import datetime

# def format_conversation_for_email(messages: List[Dict[str, str]]) -> str:
#     email_content = "<h2>PaulBot Conversation Log</h2><ul>"
#     for msg in messages:
#         role = "🧑 Customer" if msg.get("role") == "user" else "🤖 PaulBot"
#         time = msg.get("timestamp", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
#         content = msg.get("content", "")
#         email_content += f"<li><b>{role} ({time})</b>: {content}</li>"
#     email_content += "</ul>"
#     return email_content

# def send_email(subject: str, html_content: str, recipient: str = "aastha@example.com"):
#     msg = MIMEMultipart()
#     msg["From"] = os.getenv("EMAIL_USER")
#     msg["To"] = recipient
#     msg["Subject"] = subject

#     msg.attach(MIMEText(html_content, "html"))

#     try:
#         server = smtplib.SMTP(os.getenv("EMAIL_HOST"), int(os.getenv("EMAIL_PORT")))
#         server.starttls()
#         server.login(os.getenv("EMAIL_USER"), os.getenv("EMAIL_PASS"))
#         server.send_message(msg)
#         server.quit()
#         print("✅ Email sent successfully.")
#     except Exception as e:
#         print("❌ Failed to send email:", e)







# import os
# import smtplib
# from email.mime.multipart import MIMEMultipart
# from email.mime.text import MIMEText
# from datetime import datetime
# from typing import List, Dict, Optional

# def format_interaction_for_email(event_type: str, metadata: Dict) -> str:
#     email_content = f"""
#     <h2>PaulBot Interaction Log</h2>
#     <table border="1" cellpadding="5" cellspacing="0">
#         <tr><th>Event Type</th><td>{event_type}</td></tr>
#         <tr><th>Timestamp</th><td>{datetime.now().strftime("%Y-%m-%d %H:%M:%S")}</td></tr>
#     """
#     for key, value in metadata.items():
#         email_content += f"<tr><th>{key}</th><td>{value}</td></tr>"
#     email_content += "</table>"
#     return email_content

# # def format_full_conversation_report(conversation_data: Dict) -> str:
# #     """Format complete conversation report with all interactions"""
# #     email_content = f"""
# #     <!DOCTYPE html>
# #     <html>
# #     <head>
# #         <style>
# #             body {{ font-family: Arial, sans-serif; line-height: 1.6; }}
# #             .report-container {{ max-width: 800px; margin: 0 auto; }}
# #             .section {{ margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px; }}
# #             table {{ width: 100%; border-collapse: collapse; margin-bottom: 20px; }}
# #             th, td {{ padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }}
# #             .user-message {{ color: #4a86e8; }}
# #             .bot-message {{ color: #6aa84f; }}
# #         </style>
# #     </head>
# #     <body>
# #     <div class="report-container">
# #         <h1>PaulBot Complete Conversation Report</h1>
        
# #         <div class="section">
# #             <h2>User Information</h2>
# #             <table>
# #                 <tr><th>Conversation ID</th><td>{conversation_data['conversation_id']}</td></tr>
# #                 <tr><th>User Name</th><td>{conversation_data['user_name']}</td></tr>
# #                 <tr><th>Selected Language</th><td>{conversation_data['selected_language']}</td></tr>
# #                 <tr><th>Selected Topic</th><td>{conversation_data['selected_topic']}</td></tr>
# #                 <tr><th>Completion Status</th><td>{'Completed' if conversation_data['completed'] else 'Incomplete'}</td></tr>
# #             </table>
# #         </div>
# #     """

# #     # Add conversation path
# #     email_content += """
# #     <div class="section">
# #         <h2>Conversation Path</h2>
# #         <table>
# #             <tr>
# #                 <th>Step</th>
# #                 <th>Type</th>
# #                 <th>Content</th>
# #                 <th>Timestamp</th>
# #             </tr>
# #     """
# #     for i, step in enumerate(conversation_data['conversation_path'], 1):
# #         email_content += f"""
# #             <tr>
# #                 <td>{i}</td>
# #                 <td>{step.get('type', 'interaction')}</td>
# #                 <td>{step.get('content', '')}</td>
# #                 <td>{step.get('timestamp', '')}</td>
# #             </tr>
# #         """
# #     email_content += "</table></div>"

# #     # Add closing
# #     email_content += """
# #     </div>
# #     </body>
# #     </html>
# #     """
# #     return email_content

# def format_full_conversation_report(conversation_data: dict) -> str:
#     """Format complete conversation report with all interactions"""
#     email_content = f"""
#     <!DOCTYPE html>
#     <html>
#     <head>
#         <style>
#             body {{ font-family: Arial, sans-serif; line-height: 1.6; }}
#             .report-container {{ max-width: 800px; margin: 0 auto; }}
#             .section {{ margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px; }}
#             table {{ width: 100%; border-collapse: collapse; margin-bottom: 20px; }}
#             th, td {{ padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }}
#             .user-message {{ color: #4a86e8; }}
#             .bot-message {{ color: #6aa84f; }}
#         </style>
#     </head>
#     <body>
#     <div class="report-container">
#         <h1>PaulBot Complete Conversation Report</h1>
        
#         <div class="section">
#             <h2>User Information</h2>
#             <table>
#                 <tr><th>Conversation ID</th><td>{conversation_data['conversation_id']}</td></tr>
#                 <tr><th>User Name</th><td>{conversation_data['user_name']}</td></tr>
#                 <tr><th>Selected Language</th><td>{conversation_data['selected_language']}</td></tr>
#                 <tr><th>Selected Topic</th><td>{conversation_data['selected_topic']}</td></tr>
#                 <tr><th>Completion Status</th><td>{'Completed' if conversation_data['completed'] else 'Incomplete'}</td></tr>
#             </table>
#         </div>
        
#         <div class="section">
#             <h2>Conversation Path</h2>
#             <table>
#                 <tr>
#                     <th>Step</th>
#                     <th>Type</th>
#                     <th>Content</th>
#                     <th>Timestamp</th>
#                 </tr>
#     """
    
#     for i, step in enumerate(conversation_data['conversation_path'], 1):
#         email_content += f"""
#                 <tr>
#                     <td>{i}</td>
#                     <td>{step.get('type', 'interaction')}</td>
#                     <td>{step.get('content', '')}</td>
#                     <td>{step.get('timestamp', '')}</td>
#                 </tr>
#         """
    
#     email_content += """
#             </table>
#         </div>
#     </div>
#     </body>
#     </html>
#     """
#     return email_content

# # Keep your existing send_email and other functions

# def send_email(subject: str, html_content: str, recipient: str = "aasthaarya2004@gmail.com"):
#     msg = MIMEMultipart()
#     msg["From"] = os.getenv("EMAIL_USER", "paulbot@paulmerchants.net")
#     msg["To"] = recipient
#     msg["Subject"] = subject
#     msg["Cc"] = "support@paulmerchants.net"  # Optional CC

#     msg.attach(MIMEText(html_content, "html"))

#     try:
#         with smtplib.SMTP(os.getenv("EMAIL_HOST", "smtp.gmail.com"), 
#                          int(os.getenv("EMAIL_PORT", 587))) as server:
#             server.starttls()
#             server.login(os.getenv("EMAIL_USER"), os.getenv("EMAIL_PASS"))
#             server.send_message(msg)
#         print("✅ Email sent successfully to", recipient)
#     except Exception as e:
#         print("❌ Failed to send email:", e)
#         # Consider adding retry logic here







# import os
# import smtplib
# from email.mime.multipart import MIMEMultipart
# from email.mime.text import MIMEText
# from typing import List, Dict
# from datetime import datetime


# def format_conversation_for_email(messages: List[Dict[str, str]]) -> str:
#     email_content = "<h2>PaulBot Conversation Log</h2><ul>"

#     for msg in messages:
#         role = "🧑 Customer" if msg.get("role") == "user" else "🤖 PaulBot"
#         time = msg.get("timestamp", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
#         content = msg.get("content", "").strip()

#         # Skip messages with empty content
#         if not content:
#             continue

#         email_content += f"<li><b>{role} ({time})</b>: {content}</li>"

#     email_content += "</ul>"
#     return email_content


# def send_email(subject: str, html_content: str, recipient: str = "aastha@example.com"):
#     msg = MIMEMultipart()
#     msg["From"] = os.getenv("EMAIL_USER")
#     msg["To"] = recipient
#     msg["Subject"] = subject

#     msg.attach(MIMEText(html_content, "html"))

#     try:
#         server = smtplib.SMTP(os.getenv("EMAIL_HOST"), int(os.getenv("EMAIL_PORT")))
#         server.starttls()
#         server.login(os.getenv("EMAIL_USER"), os.getenv("EMAIL_PASS"))
#         server.send_message(msg)
#         server.quit()
#         print("✅ Email sent successfully.")
#     except Exception as e:
#         print("❌ Failed to send email:", e)






# import os
# import smtplib
# from email.mime.multipart import MIMEMultipart
# from email.mime.text import MIMEText
# from typing import List, Dict
# from datetime import datetime


# # def format_conversation_for_email(messages: List[Dict[str, str]]) -> str:
# #     email_content = "<h2>PaulBot Interaction Summary</h2><ul>"

# #     for msg in messages:
# #         role = msg.get("role")
# #         event_type = msg.get("event_type")
# #         time = msg.get("timestamp", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

# #         # 🟢 Format interaction logs
# #         if msg.get("type") == "interaction":
# #             user = msg.get("user_name", "Unknown User")
# #             number = msg.get("mobile_number", "N/A")
# #             metadata_str = ", ".join(f"{k}: {v}" for k, v in msg.get("metadata", {}).items())
# #             # email_content += f"<li><b>🤖 Bot:</b> <i>{event_type}</i> by <b>{user}</b> at {time}<br>Metadata: {metadata_str}</li>"
# #             email_content += f"<li><b></b> <b> Name: {user }</b> <br> <b> Mobile: {number}</b> <br> {metadata_str}</li>"
# #             continue

# #         # 🟢 Format normal chat messages
# #         content = msg.get("content", "").strip()
# #         if not content:
# #             continue

# #         display_role = "🧑 Customer" if role == "user" else "🤖 PaulBot"
# #         email_content += f"<li><b>{display_role} ({time})</b>: {content}</li>"

# #     email_content += "</ul>"
# #     return email_content

# def format_conversation_for_email(messages: List[Dict[str, str]]) -> str:
#     email_content = "<h2>PaulBot Interaction Summary</h2><ul>"

#     seen_user_data = False  # To ensure name and mobile appear only once

#     for msg in messages:
#         role = msg.get("role")
#         time = msg.get("timestamp", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

#         # Show user metadata (name & mobile) only once
#         if msg.get("type") == "interaction":
#             if not seen_user_data:
#                 user = msg.get("user_name", "Unknown User")
#                 number = msg.get("mobile_number", "N/A")
#                 metadata_str = ", ".join(f"{k}: {v}" for k, v in msg.get("metadata", {}).items())
#                 email_content += f"<li><b>Name:</b> {user} <br><b>Mobile:</b> {number}<br> <b>{metadata_str}</b></li>"
#                 seen_user_data = True
#             else:
#                 # Show only metadata (like option, adventure etc.) but skip name and mobile again
#                 metadata = msg.get("metadata", {})
#                 filtered_metadata = {k: v for k, v in metadata.items() if k.lower() not in ["name", "mobile", "user_name", "mobile_number"]}
#                 metadata_str = ", ".join(f"{k}: {v}" for k, v in filtered_metadata.items())
#                 if metadata_str:
#                     email_content += f"<li><b>{metadata_str}</b></li>"
#             continue

#         # Format normal messages
#         content = msg.get("content", "").strip()
#         if not content:
#             continue

#         display_role = "🧑 Customer" if role == "user" else "🤖 PaulBot"
#         email_content += f"<li><b>{display_role} ({time})</b>: {content}</li>"

#     email_content += "</ul>"
#     return email_content



# def send_email(subject: str, html_content: str, recipient: str = "aastha@example.com"):
#     msg = MIMEMultipart()
#     msg["From"] = os.getenv("EMAIL_USER")
#     msg["To"] = recipient
#     msg["Subject"] = subject

#     msg.attach(MIMEText(html_content, "html"))

#     try:
#     #   if input.message.lower().strip() in ["done", "end", "thank you"]:
#         server = smtplib.SMTP(os.getenv("EMAIL_HOST"), int(os.getenv("EMAIL_PORT")))
#         server.starttls()
#         server.login(os.getenv("EMAIL_USER"), os.getenv("EMAIL_PASS"))
#         server.send_message(msg)
#         server.quit()
#         print("✅ Email sent successfully.")
#     except Exception as e:
        # print("❌ Failed to send email:", e)





# import os
# import smtplib
# from email.mime.multipart import MIMEMultipart
# from email.mime.text import MIMEText
# from typing import List, Dict
# from datetime import datetime

# # Specific PaulBot messages that trigger email
# PAULBOT_TRIGGERS = [
#     "If you don't see what you're looking for, click on your preferred choice and explore more options on our website: PML Holidays Website. Our team will connect with you shortly to curate the perfect trip for you!",
#     "Thank you! We will contact you shortly."
# ]

# def format_conversation_for_email(messages: List[Dict[str, str]]) -> str:
#     email_content = "<h2>PaulBot Interaction Summary</h2><ul>"
#     seen_user_data = False  # To ensure name and mobile appear only once

#     for msg in messages:
#         role = msg.get("role")
#         time = msg.get("timestamp", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

#         if msg.get("type") == "interaction":
#             if not seen_user_data:
#                 user = msg.get("user_name", "Unknown User")
#                 number = msg.get("mobile_number", "N/A")
#                 metadata_str = ", ".join(f"{k}: {v}" for k, v in msg.get("metadata", {}).items())
#                 email_content += f"<li><b>Name:</b> {user} <br><b>Mobile:</b> {number}<br> <b>{metadata_str}</b></li>"
#                 seen_user_data = True
#             else:
#                 metadata = msg.get("metadata", {})
#                 filtered_metadata = {k: v for k, v in metadata.items() if k.lower() not in ["name", "mobile", "user_name", "mobile_number"]}
#                 metadata_str = ", ".join(f"{k}: {v}" for k, v in filtered_metadata.items())
#                 if metadata_str:
#                     email_content += f"<li><b>{metadata_str}</b></li>"
#             continue

#         content = msg.get("content", "").strip()
#         if not content:
#             continue

#         display_role = "🧑 Customer" if role == "user" else "🤖 PaulBot"
#         email_content += f"<li><b>{display_role} ({time})</b>: {content}</li>"

#     email_content += "</ul>"
#     return email_content

# def should_send_email(messages: List[Dict[str, str]]) -> bool:
#     # Check if PaulBot sent any of the trigger messages
#     for msg in messages:
#         if msg.get("role") == "assistant":
#             if msg.get("content", "").strip() in PAULBOT_TRIGGERS:
#                 return True
#     return False

# def send_email_if_triggered(messages: List[Dict[str, str]], recipient: str = "aastha@example.com"):
#     if should_send_email(messages):
#         subject = "PaulBot Interaction Summary"
#         html_content = format_conversation_for_email(messages)

#         msg = MIMEMultipart()
#         msg["From"] = os.getenv("EMAIL_USER")
#         msg["To"] = recipient
#         msg["Subject"] = subject
#         msg.attach(MIMEText(html_content, "html"))

#         try:
#             server = smtplib.SMTP(os.getenv("EMAIL_HOST"), int(os.getenv("EMAIL_PORT")))
#             server.starttls()
#             server.login(os.getenv("EMAIL_USER"), os.getenv("EMAIL_PASS"))
#             server.send_message(msg)
#             server.quit()
#             print("✅ Email sent successfully.")
#         except Exception as e:
#             print("❌ Failed to send email:", e)
#     else:
#         print("📭 Email not sent — no triggering message found.")










# import os
# import smtplib
# from email.mime.multipart import MIMEMultipart
# from email.mime.text import MIMEText
# from typing import List, Dict
# from datetime import datetime

# # Specific PaulBot messages that trigger email
# PAULBOT_TRIGGERS = [
#     "If you don't see what you're looking for, click on your preferred choice and explore more options on our website: PML Holidays Website. Our team will connect with you shortly to curate the perfect trip for you!",
#     "Thank you! We will contact you shortly."
# ]

# def should_trigger_email_from_bot(message: str) -> bool:
#     triggers = [
#         "If you don't see what you're looking for, click on your preferred choice and explore more options on our website",
#         "Thank you! We will contact you shortly."
#     ]
#     return any(trigger in message for trigger in triggers)


# # Track conversation IDs for which emails are already sent
# sent_conversations = set()

# def format_conversation_for_email(messages: List[Dict[str, str]]) -> str:
#     email_content = "<h2>PaulBot Interaction Summary</h2><ul>"
#     seen_user_data = False

#     for msg in messages:
#         role = msg.get("role")
#         time = msg.get("timestamp", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

#         if msg.get("type") == "interaction":
#             if not seen_user_data:
#                 user = msg.get("user_name", "Unknown User")
#                 number = msg.get("mobile_number", "N/A")
#                 metadata_str = ", ".join(f"{k}: {v}" for k, v in msg.get("metadata", {}).items())
#                 email_content += f"<li><b>Name:</b> {user} <br><b>Mobile:</b> {number}<br> <b>{metadata_str}</b></li>"
#                 seen_user_data = True
#             else:
#                 metadata = msg.get("metadata", {})
#                 filtered_metadata = {k: v for k, v in metadata.items() if k.lower() not in ["name", "mobile", "user_name", "mobile_number"]}
#                 metadata_str = ", ".join(f"{k}: {v}" for k, v in filtered_metadata.items())
#                 if metadata_str:
#                     email_content += f"<li><b>{metadata_str}</b></li>"
#             continue

#         content = msg.get("content", "").strip()
#         if not content:
#             continue

#         display_role = "🧑 Customer" if role == "user" else "🤖 PaulBot"
#         email_content += f"<li><b>{display_role} ({time})</b>: {content}</li>"

#     email_content += "</ul>"
#     return email_content

# def should_send_email(messages: List[Dict[str, str]]) -> bool:
#     for msg in messages:
#         if msg.get("role") == "assistant":
#             # if msg.get("content", "").strip() in PAULBOT_TRIGGERS:
#             if should_trigger_email_from_bot(msg.get("content", "")):
#                 return True
#     return False

# # def send_email(subject: str, html_content: str, recipient: str): 
# #     if conversation_id in sent_conversations:
# #         print(f"📭 Email already sent for conversation {conversation_id}, skipping.")
# #         return

# #     if should_send_email(messages):
# #         subject = "PaulBot Interaction Summary"
# #         html_content = format_conversation_for_email(messages)

# #         msg = MIMEMultipart()
# #         msg["From"] = os.getenv("EMAIL_USER")
# #         msg["To"] = recipient
# #         msg["Subject"] = subject
# #         msg.attach(MIMEText(html_content, "html"))

# #         try:
# #             server = smtplib.SMTP(os.getenv("EMAIL_HOST"), int(os.getenv("EMAIL_PORT")))
# #             server.starttls()
# #             server.login(os.getenv("EMAIL_USER"), os.getenv("EMAIL_PASS"))
# #             server.send_message(msg)
# #             server.quit()
# #             print(f"✅ Email sent for conversation {conversation_id}.")
# #             sent_conversations.add(conversation_id)
# #         except Exception as e:
# #             print("❌ Failed to send email:", e)
# #     else:
# #         print("📭 Email not sent — no triggering message found.")



# def send_email_if_triggered(messages: List[Dict[str, str]], conversation_id: str, recipient: str = "aasthaarya2004@gmail.com"):
#     if conversation_id in sent_conversations:
#         print(f"📭 Email already sent for conversation {conversation_id}, skipping.")
#         return

#     if should_send_email(messages):
#         subject = "PaulBot Interaction Summary"
#         html_content = format_conversation_for_email(messages)

#         msg = MIMEMultipart()
#         msg["From"] = os.getenv("EMAIL_USER")
#         msg["To"] = recipient
#         msg["Subject"] = subject
#         msg.attach(MIMEText(html_content, "html"))

#         try:
#             server = smtplib.SMTP(os.getenv("EMAIL_HOST"), int(os.getenv("EMAIL_PORT")))
#             server.starttls()
#             server.login(os.getenv("EMAIL_USER"), os.getenv("EMAIL_PASS"))
#             server.send_message(msg)
#             server.quit()
#             print(f"✅ Email sent for conversation {conversation_id}.")
#             sent_conversations.add(conversation_id)
#         except Exception as e:
#             print("❌ Failed to send email:", e)
#     else:
#         print("📭 Email not sent — no triggering message found.")








# import smtplib
# from email.mime.multipart import MIMEMultipart
# from email.mime.text import MIMEText
# from typing import List, Dict
# from datetime import datetime

# # Your email credentials (for testing only; use env vars or secrets in production)
# EMAIL_USER = "aasthaarya2004@gmail.com"
# EMAIL_PASS = "euswuzkluxxzrdak"
# EMAIL_HOST = "smtp.gmail.com"
# EMAIL_PORT = 587

# # Specific PaulBot messages that trigger email
# PAULBOT_TRIGGERS = [
#     "If you don't see what you're looking for, click on your preferred choice and explore more options on our website: PML Holidays Website. Our team will connect with you shortly to curate the perfect trip for you!",
#     "Thank you! We will contact you shortly."
# ]

# def should_trigger_email_from_bot(message: str) -> bool:
#     triggers = [
#         "If you don't see what you're looking for, click on your preferred choice and explore more options on our website",
#         "Thank you! We will contact you shortly."
#     ]
#     return any(trigger in message for trigger in triggers)

# # Track conversation IDs for which emails are already sent
# sent_conversations = set()

# def format_conversation_for_email(messages: List[Dict[str, str]]) -> str:
#     email_content = "<h2>PaulBot Interaction Summary</h2><ul>"
#     seen_user_data = False

#     for msg in messages:
#         role = msg.get("role")
#         time = msg.get("timestamp", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

#         if msg.get("type") == "interaction":
#             if not seen_user_data:
#                 user = msg.get("user_name", "Unknown User")
#                 number = msg.get("mobile_number", "N/A")
#                 metadata_str = ", ".join(f"{k}: {v}" for k, v in msg.get("metadata", {}).items())
#                 email_content += f"<li><b>Name:</b> {user} <br><b>Mobile:</b> {number}<br> <b>{metadata_str}</b></li>"
#                 seen_user_data = True
#             else:
#                 metadata = msg.get("metadata", {})
#                 filtered_metadata = {k: v for k, v in metadata.items() if k.lower() not in ["name", "mobile", "user_name", "mobile_number"]}
#                 metadata_str = ", ".join(f"{k}: {v}" for k, v in filtered_metadata.items())
#                 if metadata_str:
#                     email_content += f"<li><b>{metadata_str}</b></li>"
#             continue

#         content = msg.get("content", "").strip()
#         if not content:
#             continue

#         display_role = "🧑 Customer" if role == "user" else "🤖 PaulBot"
#         email_content += f"<li><b>{display_role} ({time})</b>: {content}</li>"

#     email_content += "</ul>"
#     return email_content

# def should_send_email(messages: List[Dict[str, str]]) -> bool:
#     for msg in messages:
#         if msg.get("role") == "assistant":
#             if msg.get("content", "").strip() in PAULBOT_TRIGGERS:
#                 return True
#     return False

# def send_email_if_triggered(messages: List[Dict[str, str]], conversation_id: str, recipient: str = "aasthaarya2004@gmail.com"):
#     if conversation_id in sent_conversations:
#         print(f"📭 Email already sent for conversation {conversation_id}, skipping.")
#         return

#     if should_send_email(messages):
#         subject = "PaulBot Interaction Summary"
#         html_content = format_conversation_for_email(messages)

#         msg = MIMEMultipart()
#         msg["From"] = EMAIL_USER
#         msg["To"] = recipient
#         msg["Subject"] = subject
#         msg.attach(MIMEText(html_content, "html"))

#         try:
#             server = smtplib.SMTP(EMAIL_HOST, EMAIL_PORT)
#             server.starttls()
#             server.login(EMAIL_USER, EMAIL_PASS)
#             server.send_message(msg)
#             server.quit()
#             print(f"✅ Email sent for conversation {conversation_id}.")
#             sent_conversations.add(conversation_id)
#         except Exception as e:
#             print("❌ Failed to send email:", e)
#     else:
#         print("📭 Email not sent — no triggering message found.")









# import os
# import smtplib
# from email.mime.multipart import MIMEMultipart
# from email.mime.text import MIMEText
# from typing import List, Dict
# from datetime import datetime

# def format_conversation_for_email(messages: List[Dict[str, str]]) -> str:
#     email_content = "<h2>PaulBot Interaction Summary</h2><ul>"

#     seen_user_data = False  # To ensure name and mobile appear only once

#     for msg in messages:
#         role = msg.get("role")
#         time = msg.get("timestamp", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

#         # Show user metadata (name & mobile) only once
#         if msg.get("type") == "interaction":
#             if not seen_user_data:
#                 user = msg.get("user_name", "Unknown User")
#                 number = msg.get("mobile_number", "N/A")
#                 metadata_str = ", ".join(f"{k}: {v}" for k, v in msg.get("metadata", {}).items())
#                  # email_content += f"<li><b>🤖 Bot:</b> <i>{event_type}</i> by <b>{user}</b> at {time}<br>Metadata: {metadata_str}</li>"
#                 email_content += f"<li><b>Name:</b> {user} <br><b>Mobile:</b> {number}<br> <b>{metadata_str}</b></li>"
#                 seen_user_data = True
#             else:
#                 # Show only metadata (like option, adventure etc.) but skip name and mobile again
#                 metadata = msg.get("metadata", {})
#                 filtered_metadata = {k: v for k, v in metadata.items() if k.lower() not in ["name", "mobile", "user_name", "mobile_number"]}
#                 metadata_str = ", ".join(f"{k}: {v}" for k, v in filtered_metadata.items())
#                 if metadata_str:
#                     email_content += f"<li><b>{metadata_str}</b></li>"
#             continue

#         # Format normal messages
#         content = msg.get("content", "").strip()
#         if not content:
#             continue

#         display_role = "🧑 Customer" if role == "user" else "🤖 PaulBot"
#         email_content += f"<li><b>{display_role} ({time})</b>: {content}</li>"

#     email_content += "</ul>"
#     return email_content

# def send_email(subject: str, html_content: str, recipient: str = "aasthaarya2004@gmail.com"):
    
#     msg = MIMEMultipart()
#     msg["From"] = os.getenv("EMAIL_USER")
#     msg["To"] = recipient
#     msg["Subject"] = subject

#     msg.attach(MIMEText(html_content, "html"))

#     try:
#     #   if input.message.lower().strip() in ["done", "end", "thank you"]:
#         server = smtplib.SMTP(os.getenv("EMAIL_HOST"), int(os.getenv("EMAIL_PORT")))
#         server.starttls()
#         server.login(os.getenv("EMAIL_USER"), os.getenv("EMAIL_PASS"))
#         server.send_message(msg)
#         server.quit()
#         print("✅ Email sent successfully.")
#     except Exception as e:
#         print("❌ Failed to send email:", e)









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
