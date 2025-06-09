import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';

export default function MainLayout() {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      <Outlet />
      <Navbar />
    </div>
  );
}
