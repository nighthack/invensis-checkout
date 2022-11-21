import React from "react";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";

import Home from "./App";
import Success from "./Success";
import Failed from "./Failure";

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/failed" element={<Failed />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}
