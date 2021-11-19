import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import "./style.scss";

const CandidateProvider = lazy(() => import("@/CandidateProvider"));

render(
  <Suspense fallback={<></>}>
    <Router>
      <CandidateProvider>
        <App />
      </CandidateProvider>
    </Router>
  </Suspense>,
  document.getElementById("root")
);
