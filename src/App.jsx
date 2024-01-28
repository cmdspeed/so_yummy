import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import { refreshUser } from "./redux/auth/authOperations";
import { useAppDispatch } from "./hooks/dispatch";
import { PrivateRoute } from "./components/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { useAuth } from "./hooks/useAuth";

const Wellcome = lazy(() => import("./pages/WellcomePage/WellcomePage"));
const Register = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const Signin = lazy(() => import("./pages/SigninPage/SigninPage"));
const Main = lazy(() => import("./pages/MainPage/MainPage"));
const Search = lazy(() => import("./pages/SearchPage/SearchPage"));
const Cagtegory = lazy(() => import("./pages/CategoriesPage/CategoriesPage"));

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
    return <div>Refreshing user ...</div>;
  }

  return (
    <Suspense fallback={<div>LOADING</div>}>
      <Routes>
        <Route
          path="/wellcome"
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
          <Route index element={<PrivateRoute component={<Main />} />} />
          <Route
            path="/search"
            element={<PrivateRoute component={<Search />} />}
          />
          <Route path="/add" element={<PrivateRoute component={<Main />} />} />
          <Route path="/my" element={<PrivateRoute component={<Main />} />} />
          <Route
            path="/favorite"
            element={<PrivateRoute component={<Main />} />}
          />
          <Route
            path="/shopping-list"
            element={<PrivateRoute component={<Main />} />}
          />
          <Route
            path="/categories/:categoryName"
            element={<PrivateRoute component={<Cagtegory />} />}
          />
        </Route>

        <Route path="*" element={<Navigate to="/wellcome" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
