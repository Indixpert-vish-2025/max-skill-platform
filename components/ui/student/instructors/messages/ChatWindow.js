"use client";

import { Form } from "react-bootstrap";

export default function ChatWindow({ contact, messages, message, onMessageChange, onSend }) {
  if (!contact) return null;

  return (
    <div className="instructor-chat-panel">
      <div className="instructor-chat-header">
        <div className="instructor-chat-user">
          <img src={contact.avatar} alt={contact.name} />
          <div>
            <strong>{contact.name}</strong>
            <span>{contact.online ? "Online" : "Offline"}</span>
          </div>
        </div>

        <div className="instructor-chat-actions">
          <button type="button" className="instructor-action-btn">
            <i className="bi bi-telephone" />
          </button>
          <button type="button" className="instructor-action-btn">
            <i className="bi bi-camera-video" />
          </button>
          <button type="button" className="instructor-action-btn">
            <i className="bi bi-three-dots" />
          </button>
        </div>
      </div>

      <div className="instructor-chat-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`instructor-chat-bubble ${msg.sender}`}
          >
            <p>{msg.text}</p>
            <span>{msg.time}</span>
          </div>
        ))}
      </div>

      <Form className="instructor-chat-input" onSubmit={onSend}>
        <button type="button" className="instructor-action-btn">
          <i className="bi bi-paperclip" />
        </button>
        <Form.Control
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => onMessageChange(e.target.value)}
        />
        <button type="submit" className="instructor-send-btn">
          <i className="bi bi-send-fill" />
        </button>
      </Form>
    </div>
  );
}
