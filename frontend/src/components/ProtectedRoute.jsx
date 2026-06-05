
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isLoggedIn, element }) {
  return isLoggedIn ? element : <Navigate to="/login" replace />;
}

export default ProtectedRoute;