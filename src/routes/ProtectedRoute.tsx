import { type JSX } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  isAuth: () => boolean;
  children: JSX.Element;
};

export default function ProtectedRoute({
  isAuth,
  children,
}: ProtectedRouteProps) {
  return isAuth() ? children : <Navigate to="/login" replace />;
}
