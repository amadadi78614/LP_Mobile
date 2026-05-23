import { Outlet, useLocation } from 'react-router-dom';
import BottomNav from './BottomNav';
import './Layout.css';

export default function Layout() {
  const { pathname } = useLocation();
  const isStreams = pathname === '/streams';

  return (
    <div className={`app-shell${isStreams ? ' app-shell--streams' : ''}`}>
      <main className={`app-main${isStreams ? ' app-main--streams' : ''}`}>
        <Outlet />
      </main>
      <BottomNav dark={isStreams} />
    </div>
  );
}
