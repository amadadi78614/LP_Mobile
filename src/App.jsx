import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Layout from './components/Layout.jsx';
import Landing from './pages/Landing.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Fixtures from './pages/Fixtures.jsx';
import Live from './pages/Live.jsx';
import Standings from './pages/Standings.jsx';
import Stats from './pages/Stats.jsx';
import Streams from './pages/Streams.jsx';
import Profile from './pages/Profile.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/live" element={<Live />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/streams" element={<Streams />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
