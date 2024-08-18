// src/router.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginForm";
import ForgotPasswordPage from "./pages/forgotPassword";
import AdminDashboard from "./pages/AdminDashboard";
import GenerateOtpPage from "./pages/GenerateOtpPage";
import RefreshOtpPage from "./pages/RefreshOtpPage";
import LoginOtpPage from "./pages/LoginOtpPage";
import { AuthContextProvider } from "./context/auth/AuthContext";
import UserManagement from "./components/user managment/UserManagement"; // Corrected import
import RoleManagement from "./components/role managment/RoleManagement";
import Category from "./components/category/CategoryManegment";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/generate-otp" element={<GenerateOtpPage />} />
          <Route path="/refresh-otp" element={<RefreshOtpPage />} />
          <Route path="/login-otp" element={<LoginOtpPage />} />
          <Route path="/users" element={<UserManagement />} /> 
          <Route path="/roles" element={<RoleManagement />} />
          <Route path="/addCategory" element={<Category/>} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
};

export default AppRouter;
