import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-performance',
  standalone: true,
  template: `
    <div class="animate-fade-in space-y-6">
      <div class="mb-6 flex justify-between items-center">
        <div>
          <h1>Performance Management</h1>
          <p>Goal setting, KPIs tracking, and bi-annual appraisal workflows.</p>
        </div>
        <button class="btn btn-primary">Start New Review Cycle</button>
      </div>

      <div class="grid grid-cols-3 gap-6 mb-6">
        <div class="card bg-gray-50 p-4" style="background: var(--background);">
          <div class="text-3xl font-bold text-primary">Q1 2024</div>
          <div class="text-sm font-medium text-muted mt-2">Current Active Cycle</div>
        </div>
        <div class="card p-4">
          <div class="text-3xl font-bold text-success">85%</div>
          <div class="text-sm font-medium text-muted mt-2">Self-Evaluations Completed</div>
        </div>
        <div class="card p-4">
          <div class="text-3xl font-bold text-warning">42%</div>
          <div class="text-sm font-medium text-muted mt-2">Manager Reviews Completed</div>
        </div>
      </div>

      <div class="card">
        <h3 class="mb-4">Direct Reports Evaluations</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Role</th>
              <th>Self-Eval Score</th>
              <th>Manager Eval</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sarah Williams</td>
              <td>Software Engineer</td>
              <td>4.5 / 5.0</td>
              <td>-</td>
              <td><span class="badge badge-warning">Needs Manager Review</span></td>
              <td><button class="btn btn-primary text-xs">Review</button></td>
            </tr>
            <tr>
              <td>Mike Johnson</td>
              <td>HR Manager</td>
              <td>4.2 / 5.0</td>
              <td>4.8 / 5.0</td>
              <td><span class="badge badge-success">Completed</span></td>
              <td><button class="btn btn-outline text-xs">View Report</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class PerformanceComponent {}
