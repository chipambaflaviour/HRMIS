import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import { Dashboard } from "./pages/Dashboard"
import { ExecutivePlanner } from "./pages/ExecutivePlanner"
import { Organogram } from "./pages/Organogram"
import { LeaveManagement } from "./pages/LeaveManagement"
import { TrainingCalendar } from "./pages/TrainingCalendar"
import { FileStorage } from "./pages/FileStorage"
import { Notifications } from "./pages/Notifications"
import { BalancedScorecard } from "./pages/BalancedScorecard"
import { EmployeeDatabase } from "./pages/EmployeeDatabase"
import { PerformanceManagement } from "./pages/PerformanceManagement"

import { AppDataProvider } from "./context/AppDataContext"

function App() {
  return (
    <AppDataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="planner" element={<ExecutivePlanner />} />
            <Route path="organogram" element={<Organogram />} />
            <Route path="leave" element={<LeaveManagement />} />
            <Route path="training" element={<TrainingCalendar />} />
            <Route path="files" element={<FileStorage />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="scorecard" element={<BalancedScorecard />} />
            <Route path="employees" element={<EmployeeDatabase />} />
            <Route path="performance" element={<PerformanceManagement />} />
          </Route>
        </Routes>
      </Router>
    </AppDataProvider>
  )
}

export default App
