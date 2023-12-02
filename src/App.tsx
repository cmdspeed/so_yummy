import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Main } from "./components/Main/Main";

import { useAuth } from "./hooks/useAuth";
import { refreshUser } from "./redux/auth/authOperations";
import { useAppDispatch } from "./hooks/dispatch";
import { PrivateRoute } from "./components/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute";

const Wellcome = lazy(() => import("./pages/WellcomePage/WellcomePage"));
const Register = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const Signin = lazy(() => import("./pages/SigninPage/SigninPage"));

function App() {
  const dispatch = useAppDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>LOADING</div>;
  }
  return (
    <Suspense fallback={<div>LOADING</div>}>
      <Routes>
        <Route path="/Wellcome" element={<Wellcome />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <Signin />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/Wellcome" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
