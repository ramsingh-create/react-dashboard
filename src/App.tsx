import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import {Login} from "./components/pages/Login";
import { ResendLogin } from "./components/pages/ResendLogin";
import Loader from "./components/pages/Loader";
import { RecoveryLinkSent } from "./components/pages/RecoveryLinkSent";
import {ResetPassword} from "./components/pages/ResetPassword";
import { ContentNotFound } from "./components/pages/ContentNotFound";
import { Error404 } from "./components/pages/Error404";

export default function App() {
  const mode = useSelector((state: any) => state.theme.mode);

  return (
    <div className={mode === "dark" ? "dark" : ""}>
      <Loader/>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route element={<Layout/>}>
            <Route path="/login" element={<Login/>} />
            <Route path="/resendLogin" element={<ResendLogin/>} />
            <Route path="/recoveryLinkSent" element={<RecoveryLinkSent/>} />
            <Route path="/resetPassword" element={<ResetPassword/>} />
            <Route path="/contentNotFound" element={<ContentNotFound/>} />
          <Route path="/*" element={<Error404/>} />
          </Route>
          
        </Routes>
      </Router>
    </div>
  );
}
