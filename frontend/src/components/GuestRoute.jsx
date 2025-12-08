import { Navigate } from "react-router-dom";
import { isLoggedIn } from "@/lib/auth";

export default function GuestRoute({ children }) {
  if (isLoggedIn()) {
    return <Navigate to="/" replace />;
  }

  return children;
}
