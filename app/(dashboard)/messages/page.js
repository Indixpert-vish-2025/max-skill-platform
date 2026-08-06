import messagesData from "../../../data/instructor-messages.json";
import MessagesPanel from "../../../components/ui/student/instructors/messages/MessagesPanel";

export default function InstructorMessagesPage() {
  const { contacts, activeChat } = messagesData;

  return (
    <MessagesPanel
      contacts={contacts}
      activeChat={activeChat}
    />
  );
}
