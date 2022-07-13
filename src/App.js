import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomeView } from './views/HomeView/HomeView';
import { AddContactView } from './views/AddContactView/AddContactView';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="phonebook" element={<AddContactView />} />
      </Route>
    </Routes>
  );
}
