import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { JobsPage } from './pages/JobsPage';
import { CompaniesPage } from './pages/CompaniesPage';
import { AboutPage } from './pages/AboutPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/companies" element={<CompaniesPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}