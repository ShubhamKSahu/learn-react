import { Link } from "react-router-dom";
import events from "../events";
function EventsNavigation() {
  return (
    <>
      <header>
        <nav>
          {events.map((evt) => (
            <ul>
              <li>
                <Link to={`/events/${evt.id}`}>{evt.title}</Link>
              </li>
            </ul>
          ))}
        </nav>
      </header>
    </>
  );
}
export default EventsNavigation;
