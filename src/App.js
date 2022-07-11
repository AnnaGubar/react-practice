import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeView from "./Views/HomeView/HomeView";
import Layout from "./Components/Layout/Layout";
import EventsView from "./Views/EventsView/EventsView";
import EventSubView from "./Views/EventSubView/EventSubView";
import { EventDetailsView } from "./Views/EventDetailsView/EventDetailsView";
import NotFoundView from "./Views/NotFoundView/NotFoundView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="events" element={<EventsView />}>
          <Route path=":eventId" element={<EventSubView />} />
        </Route>
        <Route path="events/:eventId/details" element={<EventDetailsView />} />
      <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
}

export default App;
