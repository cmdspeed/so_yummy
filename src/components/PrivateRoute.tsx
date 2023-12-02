import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface PrivateRouteProps {
  children: ReactNode;
}

interface AuthProps {
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
}: PrivateRouteProps) => {
  const { isLoggedIn, isRefreshing }: AuthProps = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to="/Wellcome" /> : <>{children}</>;
};
