// src/router.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginForm';

import ForgotPasswordPage from './pages/forgotPassword';
import AdminDashboard from './pages/AdminDashboard';
import GenerateOtpPage from './pages/GenerateOtpPage';
import RefreshOtpPage from './pages/RefreshOtpPage';
import LoginOtpPage from './pages/LoginOtpPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
     
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/generate-otp" element={<GenerateOtpPage />} />
        <Route path="/refresh-otp" element={<RefreshOtpPage />} />
        <Route path="/login-otp" element={<LoginOtpPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
