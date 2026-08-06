"use client";

import { Form } from "react-bootstrap";

export default function ContactList({ contacts, selectedId, onSelect }) {
  return (
    <div className="instructor-contacts-panel">
      <div className="instructor-contacts-header">
        <h5>Messages</h5>
        <Form className="instructor-contacts-search">
          <i className="bi bi-search" />
          <Form.Control type="text" placeholder="Search..." />
        </Form>
      </div>

      <div className="instructor-contacts-list">
        {contacts.map((contact) => (
          <button
            key={contact.id}
            type="button"
            className={`instructor-contact-item ${selectedId === contact.id ? "active" : ""}`}
            onClick={() => onSelect(contact.id)}
          >
            <div className="instructor-contact-avatar">
              <img src={contact.avatar} alt={contact.name} />
              {contact.online && <span className="online-dot" />}
            </div>

            <div className="instructor-contact-info">
              <div className="instructor-contact-top">
                <strong>{contact.name}</strong>
                <span>{contact.time}</span>
              </div>
              <p>{contact.lastMessage}</p>
            </div>

            {contact.unread > 0 && (
              <span className="instructor-contact-unread">{contact.unread}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
