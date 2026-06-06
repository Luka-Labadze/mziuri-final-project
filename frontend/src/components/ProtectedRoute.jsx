import { Navigate } from "react-router-dom";

function ProtectedRoute({ loggedIn, element }) {
  return loggedIn ? element : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
