import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <aside class="sidebar h-full flex flex-col">
      <div class="sidebar-header">
        <div class="sidebar-logo-icon">A</div>
        <div class="sidebar-logo-text">Axis Solution</div>
      </div>
      <div class="sidebar-nav">
        <a routerLink="/dashboard" routerLinkActive="active" class="nav-item">Dashboard</a>
        <a routerLink="/planner" routerLinkActive="active" class="nav-item">Executive Planner</a>
        <a routerLink="/employees" routerLinkActive="active" class="nav-item">Employees & Organogram</a>
        <a routerLink="/recruitment" routerLinkActive="active" class="nav-item">Recruitment</a>
        <a routerLink="/attendance" routerLinkActive="active" class="nav-item">Attendance</a>
        <a routerLink="/leave" routerLinkActive="active" class="nav-item">Leave Management</a>
        <a routerLink="/performance" routerLinkActive="active" class="nav-item">Performance Management</a>
        <a routerLink="/training" routerLinkActive="active" class="nav-item">Training Calendar</a>
        <a routerLink="/scorecard" routerLinkActive="active" class="nav-item">Balanced Scorecard</a>
        <a routerLink="/welfare" routerLinkActive="active" class="nav-item">Employee Welfare</a>
        <a routerLink="/iso" routerLinkActive="active" class="nav-item">ISO 9001 Plan</a>
        <a routerLink="/storage" routerLinkActive="active" class="nav-item">File Storage</a>
        <a routerLink="/reports" routerLinkActive="active" class="nav-item">Reports</a>
      </div>
    </aside>
  `
})
export class SidebarComponent {}
