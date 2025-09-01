import events from "../events";
import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  const event = events.find((evt) => evt.id === params.eventId);

  if (!event) {
    <h1>Event not found.</h1>;
  }
  return (
    <>
      <h1>Event detail page.</h1>
      <h3>Event ID: {params.eventId}</h3>
      <h3>Event Name: {event.title}</h3>
      <h3>Event Date: {event.date}</h3>
      <h3>Event Location: {event.location}</h3>
    </>
  );
}

export default EventDetailPage;
