import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-leave',
  standalone: true,
  template: `
    <div class="animate-fade-in space-y-6">
      <div class="mb-6 flex justify-between items-center">
        <div>
          <h1>Leave Management</h1>
          <p>Apply for, process, and track regional leave requests.</p>
        </div>
        <button class="btn btn-primary" (click)="toggleApply()">+ Apply for Leave</button>
      </div>

      <div class="grid grid-cols-4 gap-4 mb-6">
        <div class="card p-4">
          <div class="text-sm font-medium text-muted">My Leave Balance</div>
          <div class="text-2xl font-bold mt-1 text-primary">18 Days</div>
        </div>
        <div class="card p-4">
          <div class="text-sm font-medium text-muted">Pending Requests (Team)</div>
          <div class="text-2xl font-bold mt-1 text-warning">4</div>
        </div>
        <div class="card p-4">
          <div class="text-sm font-medium text-muted">Approved Next 30 Days</div>
          <div class="text-2xl font-bold mt-1 text-success">12</div>
        </div>
      </div>

      @if(showApply()) {
        <div class="card mb-6" style="border-left: 4px solid var(--primary);">
          <h3 class="mb-4">Leave Application Form</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group">
              <label class="form-label">Leave Type</label>
              <select class="form-input">
                <option>Annual Leave</option>
                <option>Sick Leave</option>
                <option>Maternity/Paternity</option>
                <option>Compassionate</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Duration</label>
              <div class="flex gap-2">
                <input type="date" class="form-input w-full" />
                <span class="flex items-center text-muted">to</span>
                <input type="date" class="form-input w-full" />
              </div>
            </div>
            <div class="form-group" style="grid-column: span 2;">
              <label class="form-label">Reason</label>
              <textarea class="form-input" rows="3"></textarea>
            </div>
          </div>
          <div class="flex gap-2 mt-4">
            <button class="btn btn-primary" (click)="toggleApply()">Submit Application</button>
            <button class="btn btn-outline" (click)="toggleApply()">Cancel</button>
          </div>
        </div>
      }

      <div class="card">
        <h3 class="mb-4">Request Queue</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Type</th>
              <th>Dates</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sarah Williams (IT)</td>
              <td>Annual Leave</td>
              <td>2024-05-10 - 2024-05-15</td>
              <td><span class="badge badge-warning">Pending</span></td>
              <td>
                <div class="flex gap-2">
                  <button class="btn btn-outline text-xs" style="color: var(--success); border-color: var(--success);">Approve</button>
                  <button class="btn btn-outline text-xs" style="color: var(--danger); border-color: var(--danger);">Reject</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Jane Smith (Operations)</td>
              <td>Compassionate Leave</td>
              <td>2024-04-20 - 2024-04-22</td>
              <td><span class="badge badge-success">Approved</span></td>
              <td><span class="text-xs text-muted">Processed by Exec</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class LeaveComponent {
  showApply = signal(false);
  toggleApply() { this.showApply.set(!this.showApply()); }
}
