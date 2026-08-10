"use client";

import { useState } from "react";
import { Card, Form } from "react-bootstrap";

const EMPTY_EVENT = {
  time: "",
  category: "",
  title: "",
};

export default function UpcomingEventsList({ title, date, items = [] }) {
  const [events, setEvents] = useState(items);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState(EMPTY_EVENT);

  const handleAddEvent = (event) => {
    event.preventDefault();

    if (!newEvent.time.trim() || !newEvent.category.trim() || !newEvent.title.trim()) {
      return;
    }

    setEvents((currentEvents) => [...currentEvents, { ...newEvent }]);
    setNewEvent(EMPTY_EVENT);
    setShowForm(false);
  };

  return (
    <Card className="instructor-schedule-events border-0 shadow-sm">
      <Card.Body>
        <div className="instructor-schedule-events__header">
          <div>
            <h5>{title}</h5>
            <p>{date}</p>
          </div>
          <button
            type="button"
            className="instructor-schedule-add"
            aria-label="Add event"
            onClick={() => setShowForm((current) => !current)}
          >
            <i className="bi bi-plus-lg" />
          </button>
        </div>

        {showForm && (
          <Form className="instructor-schedule-add-form" onSubmit={handleAddEvent}>
            <Form.Control
              type="text"
              placeholder="08:00 AM"
              value={newEvent.time}
              onChange={(event) =>
                setNewEvent((current) => ({ ...current, time: event.target.value }))
              }
              size="sm"
            />
            <Form.Control
              type="text"
              placeholder="Category"
              value={newEvent.category}
              onChange={(event) =>
                setNewEvent((current) => ({
                  ...current,
                  category: event.target.value,
                }))
              }
              size="sm"
            />
            <Form.Control
              type="text"
              placeholder="Event title"
              value={newEvent.title}
              onChange={(event) =>
                setNewEvent((current) => ({ ...current, title: event.target.value }))
              }
              size="sm"
            />
            <button type="submit" className="instructor-schedule-add-submit">
              Add Event
            </button>
          </Form>
        )}

        <div className="instructor-schedule-events__list">
          {events.map((item, index) => (
            <div
              key={`${item.title}-${item.time}-${index}`}
              className="instructor-schedule-event"
            >
              <div className="instructor-schedule-event__time">{item.time}</div>
              <div className="instructor-schedule-event__content">
                <span className="instructor-schedule-event__category">{item.category}</span>
                <strong>{item.title}</strong>
              </div>
            </div>
          ))}
        </div>

        <button type="button" className="instructor-schedule-more">
          More Schedule
        </button>
      </Card.Body>
    </Card>
  );
}
