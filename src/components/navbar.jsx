import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css'; // use CSS Module

export default function Navbar() {
  const navItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Wallet', path: '/wallet' },
    { label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className={styles.navbar}>
      {navItems.map(({ label, path }) => (
        <NavLink
          key={label}
          to={path}
          className={({ isActive }) =>
            isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
