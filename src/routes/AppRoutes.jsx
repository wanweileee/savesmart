// src/routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Onboarding from '../pages/onboarding/onboarding';
import Homepage from '../pages/homepage/homepage';
import Dashboard from '../pages/dashboard/dashboard';
import Wallet from '../pages/wallet/wallet';
import Profile from '../pages/profile/profile';
import Login from '../pages/login/login';
import AddExpense from '../pages/add-expense/add-expense';
import Camera from '../pages/camera/camera';



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/camera" element={<Camera />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
