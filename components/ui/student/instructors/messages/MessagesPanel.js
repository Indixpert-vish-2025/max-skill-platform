"use client";

import { useState } from "react";
import ContactList from "./ContactList";
import ChatWindow from "./ChatWindow";

export default function MessagesPanel({ contacts, activeChat }) {
  const [selectedId, setSelectedId] = useState(activeChat.contactId);
  const [message, setMessage] = useState("");

  const selectedContact = contacts.find((c) => c.id === selectedId);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setMessage("");
  };

  return (
    <div className="instructor-messages-page">
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />

      <ChatWindow
        contact={selectedContact}
        messages={activeChat.messages}
        message={message}
        onMessageChange={setMessage}
        onSend={handleSend}
      />
    </div>
  );
}
