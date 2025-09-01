import { Link } from "react-router-dom";
import events from "../events";

function EventsPage() {
  return (
    <>
      <h1>Event Page.</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h1>{event.title}</h1>
            <h2>{event.location}</h2>
            <Link to={`/events/${event.id}`}>see details.</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
