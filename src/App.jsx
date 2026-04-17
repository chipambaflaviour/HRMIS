import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Layouts */
import MainLayout from './components/layout/MainLayout';

/* Pages */
import DashboardPage from './pages/DashboardPage';
import EmployeePage from './pages/EmployeePage';
import HierarchyPage from './pages/HierarchyPage';
import CalendarPage from './pages/CalendarPage';
import AttendancePage from './pages/AttendancePage';
import NotificationsPage from './pages/NotificationsPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';
import LeavePage from './pages/LeavePage';
import TrainingPage from './pages/TrainingPage';
import StoragePage from './pages/StoragePage';
import ScorecardPage from './pages/ScorecardPage';
import PerformancePage from './pages/PerformancePage';
import PlannerPage from './pages/PlannerPage';
import RecruitmentPage from './pages/RecruitmentPage';
import WelfarePage from './pages/WelfarePage';
import IsoPage from './pages/IsoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/employees" element={<EmployeePage />} />
          <Route path="/hierarchy" element={<HierarchyPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/recruitment" element={<RecruitmentPage />} />
          <Route path="/leave" element={<LeavePage />} />
          <Route path="/performance" element={<PerformancePage />} />
          <Route path="/scorecard" element={<ScorecardPage />} />
          <Route path="/planner" element={<PlannerPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/welfare" element={<WelfarePage />} />
          <Route path="/iso" element={<IsoPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
