import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../services/auth.js';

export default function Landing() {
  if (isAuthenticated()) {
    return <Navigate to="/home" replace />;
  }
  return <Navigate to="/login" replace />;
}
