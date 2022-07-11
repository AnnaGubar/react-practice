import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as eventsApi from "../services/eventsAPI";

export const useFetchEvent = () => {
  const [event, setEvent] = useState(null);
  const params = useParams();
  const eventId = params.eventId;

  useEffect(() => {
    eventsApi.fetchEventById(eventId).then(setEvent);
  }, [eventId]);

  return event;
};
