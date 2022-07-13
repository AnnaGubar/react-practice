import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';

export const AppBar = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li>
          {' '}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? s['activeLink'] : s['link']
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink
            to="phonebook"
            className={({ isActive }) =>
              isActive ? s['activeLink'] : s['link']
            }
          >
            Phonebook
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
