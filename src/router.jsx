import React from "react";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";

import Home from "./App";
import Payment from './Payment'

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}
