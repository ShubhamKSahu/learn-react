import { Link } from "react-router-dom";
import events from "../events";
function EventsNavigation() {
  return (
    <>
      <header>
        <nav>
          <ul>
            {events.map((evt) => (
            
              <li>
                <Link to={`/events/${evt.id}`}>{evt.title}</Link>
              </li>
            
          ))}
          </ul>
          
        </nav>
      </header>
    </>
  );
}
export default EventsNavigation;
