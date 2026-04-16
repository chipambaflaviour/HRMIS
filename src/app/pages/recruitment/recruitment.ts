import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-recruitment',
  standalone: true,
  template: `
    <div class="animate-fade-in space-y-6">
      <div class="mb-6 flex justify-between items-center">
        <div>
          <h1>Recruitment & Onboarding</h1>
          <p>Pipeline, interviews, onboarding workflows, and probation evaluations.</p>
        </div>
        <button class="btn btn-primary">+ New REQ</button>
      </div>

      <div class="tabs">
        <div class="tab" [class.active]="view() === 'pipeline'" (click)="view.set('pipeline')">Interview Pipeline</div>
        <div class="tab" [class.active]="view() === 'onboarding'" (click)="view.set('onboarding')">Onboarding Checklists</div>
        <div class="tab" [class.active]="view() === 'probation'" (click)="view.set('probation')">Probation Reports</div>
      </div>

      @if (view() === 'pipeline') {
        <div class="grid grid-cols-3 gap-6">
          <div class="card bg-gray-50 p-4" style="background: var(--background);">
            <h3 class="mb-4 flex justify-between">Screening <span class="badge badge-primary">2</span></h3>
            <div class="card mb-4">
              <div class="font-bold">Software Engineer (Angola)</div>
              <div class="text-xs text-muted mb-2">Candidate: Maria Silva</div>
              <button class="btn btn-outline w-full text-sm">Move to Interview</button>
            </div>
          </div>
          <div class="card bg-gray-50 p-4" style="background: var(--background);">
            <h3 class="mb-4 flex justify-between">First Interview <span class="badge badge-warning">1</span></h3>
            <div class="card mb-4" style="border-left: 4px solid var(--warning);">
              <div class="font-bold">Regional Director (DRC)</div>
              <div class="text-xs text-muted mb-2">Candidate: Jean Paul</div>
              <div class="text-xs font-bold text-warning mb-2">Scheduled: Tomorrow 10:00 AM</div>
              <button class="btn btn-primary w-full text-sm">Log Feedback</button>
            </div>
          </div>
          <div class="card bg-gray-50 p-4" style="background: var(--background);">
            <h3 class="mb-4 flex justify-between">Offer / Accepted <span class="badge badge-success">1</span></h3>
            <div class="card mb-4" style="border-left: 4px solid var(--success);">
              <div class="font-bold">HR Specialist (Zambia)</div>
              <div class="text-xs text-muted mb-2">Candidate: Clara Mwanza</div>
              <button class="btn btn-success w-full text-sm bg-green-600 text-white border-none py-2 rounded">Start Onboarding</button>
            </div>
          </div>
        </div>
      }

      @if (view() === 'onboarding') {
        <div class="card">
          <table class="table">
            <thead><tr><th>New Hire</th><th>Role</th><th>Progress</th><th>Action</th></tr></thead>
            <tbody>
              <tr>
                <td>Clara Mwanza</td>
                <td>HR Specialist</td>
                <td>
                  <div class="w-full bg-gray-200" style="height: 6px; background: var(--border); border-radius: 3px;">
                    <div style="width: 40%; height: 100%; background: var(--primary); border-radius: 3px;"></div>
                  </div>
                  <div class="text-xs mt-1">40% Complete (IT setup pending)</div>
                </td>
                <td><button class="btn btn-outline text-xs">View Checklist</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      }

      @if (view() === 'probation') {
        <div class="card">
          <table class="table">
            <thead><tr><th>Employee</th><th>Date Joined</th><th>Eval Due</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>
              <tr>
                <td>David Brown</td>
                <td>2024-03-15</td>
                <td>2024-06-15</td>
                <td><span class="badge badge-warning">Pending Review</span></td>
                <td><button class="btn btn-primary text-xs">Start Evaluation</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      }
    </div>
  `
})
export class RecruitmentComponent {
  view = signal<'pipeline'|'onboarding'|'probation'>('pipeline');
}
