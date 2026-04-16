import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.DashboardComponent) },
  { path: 'employees', loadComponent: () => import('./pages/employees/employees').then(m => m.EmployeesComponent) },
  { path: 'leave', loadComponent: () => import('./pages/leave/leave').then(m => m.LeaveComponent) },
  { path: 'recruitment', loadComponent: () => import('./pages/recruitment/recruitment').then(m => m.RecruitmentComponent) },
  { path: 'attendance', loadComponent: () => import('./pages/attendance/attendance').then(m => m.AttendanceComponent) },
  { path: 'welfare', loadComponent: () => import('./pages/welfare/welfare').then(m => m.WelfareComponent) },
  { path: 'iso', loadComponent: () => import('./pages/iso/iso').then(m => m.IsoComponent) },
  { path: 'reports', loadComponent: () => import('./pages/reports/reports').then(m => m.ReportsComponent) },
  { path: 'planner', loadComponent: () => import('./pages/planner/planner').then(m => m.PlannerComponent) },
  { path: 'storage', loadComponent: () => import('./pages/storage/storage').then(m => m.StorageComponent) },
  { path: 'training', loadComponent: () => import('./pages/training/training').then(m => m.TrainingComponent) },
  { path: 'scorecard', loadComponent: () => import('./pages/scorecard/scorecard').then(m => m.ScorecardComponent) },
  { path: 'performance', loadComponent: () => import('./pages/performance/performance').then(m => m.PerformanceComponent) }
];
