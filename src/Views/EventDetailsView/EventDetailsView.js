import { useLocation, useNavigate } from 'react-router-dom';
import { useFetchEvent } from '../../Hooks/useFetchEvent';

export const EventDetailsView = () => {
  const event = useFetchEvent();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  return (
    <>
      {!event && <h2>Loading ...</h2>}
      {event && (
        <>
          <button onClick={() => navigate(location?.state?.from ?? '/')}>
            Go Back
          </button>
          <h2>{event.name}</h2>
          <img src={event.images[1].url} alt={event.name} width="200"></img>
          <p>Genre: {event.classifications[0].genre.name}</p>
          <p>Subgenre: {event.classifications[0].subGenre.name}</p>
        </>
      )}
    </>
  );
};
