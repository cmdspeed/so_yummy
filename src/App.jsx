import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import { useAuth } from "./hooks/useAuth";
import { refreshUser } from "./redux/auth/authOperations";
import { useAppDispatch } from "./hooks/dispatch";
import { PrivateRoute } from "./components/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const Wellcome = lazy(() => import("./pages/WellcomePage/WellcomePage"));
const Register = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const Signin = lazy(() => import("./pages/SigninPage/SigninPage"));
const Main = lazy(() => import("./pages/MainPage/MainPage"));

function App() {
  const dispatch = useAppDispatch();
  const { isRefreshing } = useAuth();

  useEffect(
    function () {
      dispatch(refreshUser());
    },
    [dispatch]
  );

  if (isRefreshing) {
    return <div>LOADING</div>;
  }
  return (
    <Suspense fallback={<div>LOADING</div>}>
      <Routes>
        <Route
          path="Wellcome"
          element={
            <PublicRoute>
              <Wellcome />
            </PublicRoute>
          }
        />
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
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Navigate to="/main" />} />
          <Route
            index
            path="/main"
            element={<PrivateRoute component={<Main />} redirectTo="/main" />}
          />
          <Route
            path="search"
            element={<PrivateRoute component={<Main />} redirectTo="/search" />}
          />
          <Route
            path="add"
            element={<PrivateRoute component={<Main />} redirectTo="/add" />}
          />
          <Route
            path="my"
            element={<PrivateRoute component={<Main />} redirectTo="/my" />}
          />
          <Route
            path="favorite"
            element={
              <PrivateRoute component={<Main />} redirectTo="/favorite" />
            }
          />
          <Route
            path="shopping-list"
            element={
              <PrivateRoute component={<Main />} redirectTo="/shopping-list" />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/Wellcome" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
