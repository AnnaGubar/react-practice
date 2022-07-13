import { Outlet } from 'react-router-dom';
import { Container } from '../Container/Container';
import { AppBar } from '../AppBar/AppBar';
// import s from './Layout.module.css'

export const Layout = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Outlet />
      </Container>
    </>
  );
};
