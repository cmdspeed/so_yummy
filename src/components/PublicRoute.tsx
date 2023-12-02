import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import React, { ReactNode } from "react";

interface PublicRouteProps {
  children: ReactNode;
}

interface AuthProps {
  isLoggedIn: boolean;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({
  children,
}: PublicRouteProps) => {
  const { isLoggedIn }: AuthProps = useAuth();

  return !isLoggedIn ? <>{children} </> : <Navigate to={"/"} />;
};
