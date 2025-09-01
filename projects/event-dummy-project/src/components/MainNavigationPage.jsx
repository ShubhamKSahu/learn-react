import { NavLink } from "react-router-dom";
import styles from "./mainPageNavigation.module.css";

function MainNavigationPage() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                end
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Events
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/events/:eventId"
                end
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Event Details
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/events/new"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                New Event
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/events/:eventId/edit"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Edit Event
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigationPage;
