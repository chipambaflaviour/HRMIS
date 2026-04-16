import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  standalone: true,
  template: `
    <div class="animate-fade-in space-y-6">
      <div class="mb-6 flex justify-between items-center">
        <div>
          <h1>Attendance & Time Tracking</h1>
          <p>Monitor daily presence, remote work, and shift variations across timezones.</p>
        </div>
        <button class="btn btn-primary">Check In (08:00 CAT)</button>
      </div>

      <div class="grid grid-cols-3 gap-6 mb-6">
        <div class="card p-4 text-center">
          <div class="text-3xl font-bold text-success">92%</div>
          <div class="text-sm font-medium text-muted mt-2">Present Today</div>
        </div>
        <div class="card p-4 text-center">
          <div class="text-3xl font-bold text-warning">5%</div>
          <div class="text-sm font-medium text-muted mt-2">Remote / Telework</div>
        </div>
        <div class="card p-4 text-center">
          <div class="text-3xl font-bold text-danger">3%</div>
          <div class="text-sm font-medium text-muted mt-2">Absent / On Leave</div>
        </div>
      </div>

      <div class="card">
        <h3 class="mb-4">Live Daily Log</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Region</th>
              <th>Clock In</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Mike Johnson</td><td>Zambia</td><td>07:45 AM</td><td><span class="badge badge-success">On-site</span></td></tr>
            <tr><td>Jane Smith</td><td>Mozambique</td><td>08:10 AM</td><td><span class="badge badge-success">On-site</span></td></tr>
            <tr><td>Sarah Williams</td><td>Angola</td><td>-</td><td><span class="badge badge-warning">Remote Work</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class AttendanceComponent {}
