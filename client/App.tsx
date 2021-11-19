import React, { lazy, Suspense } from "react";
import { hot } from "react-hot-loader";
import { Route, Routes } from "react-router-dom";

const Header = lazy(() => import("@/components/Header"));
const Candidates = lazy(() => import("@/components/Candidates"));
const HandlePath = lazy(() => import("@/components/HandlePath"));

const App = () => {
  return (
    <Suspense fallback={<></>}>
      <Header />
      <Routes>
        <Route path="/:id" element={<HandlePath />} />
        <Route path="/" element={<Candidates filter="all"/>} />
      </Routes>
    </Suspense>
  );
};

export default hot(module)(App);
