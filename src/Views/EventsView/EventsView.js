import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import * as eventsApi from "../../services/eventsAPI";
import { useLocation } from "react-router-dom";

const EventsView = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const location = useLocation();

  useEffect(() => {
    eventsApi.fetchEvents().then(setEvents);
  }, []);

  return (
    <>
      <h1>Events</h1>

      {/* {isLoading && <div>Loading...</div>} */}
      {events.length > 0 && (
        <ul>
          {events.map(({ id, name }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location.pathname }}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </>
  );
};

export default EventsView;
