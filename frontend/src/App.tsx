import React, { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
const Wellcome = lazy(() => import("./pages/WellcomePage/WellcomePage"));
const Register = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const Signin = lazy(() => import("./pages/SigninPage/SigninPage"));

function App() {
  return (
    <>
      <Suspense fallback={<div>LOADING</div>}>
        <Routes>
          <Route path="/" element={<Wellcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
