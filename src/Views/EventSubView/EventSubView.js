import { Link, useLocation } from 'react-router-dom';
import { useFetchEvent } from '../../Hooks/useFetchEvent';

const EventSubView = () => {
  const event = useFetchEvent();
  const location = useLocation();

  return (
    <>
      {!event && <h2>Loading ...</h2>}
      {event && (
        <>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} width="400"></img>
          <Link to="details" state={location.state}>
            Details
          </Link>
        </>
      )}
    </> 
  );
};

export default EventSubView;
