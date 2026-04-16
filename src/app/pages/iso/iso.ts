import { Component } from '@angular/core';

@Component({
  selector: 'app-iso',
  standalone: true,
  template: `
    <div class="animate-fade-in space-y-6">
      <div class="mb-6 flex justify-between items-center">
        <div>
          <h1>ISO 9001 Benchmark Tracking</h1>
          <p>Monitor progress on Quality Management Systems standard compliance.</p>
        </div>
        <button class="btn btn-outline">Export Audit Report</button>
      </div>

      <div class="card mb-6">
        <div class="flex justify-between items-end mb-2">
          <h3 class="text-lg">Overall Certification Readiness</h3>
          <span class="text-2xl font-bold text-primary">88%</span>
        </div>
        <div class="w-full bg-gray-200" style="height: 8px; background: var(--border); border-radius: 4px;">
          <div style="width: 88%; height: 100%; background: var(--primary); border-radius: 4px; transition: width 1s;"></div>
        </div>
      </div>

      <div class="grid gap-4">
        <div class="card p-4 flex items-center justify-between">
          <div>
            <div class="font-bold">Clause 4: Context of the Organization</div>
            <div class="text-xs text-muted">Internal/External issues definition and stakeholder needs.</div>
          </div>
          <span class="badge badge-success">100% Completed</span>
        </div>
        <div class="card p-4 flex items-center justify-between">
          <div>
            <div class="font-bold">Clause 5: Leadership</div>
            <div class="text-xs text-muted">Management commitment and policy formulation.</div>
          </div>
          <span class="badge badge-success">100% Completed</span>
        </div>
        <div class="card p-4 flex items-center justify-between" style="border-left: 4px solid var(--warning);">
          <div>
            <div class="font-bold">Clause 6: Planning</div>
            <div class="text-xs text-muted">Risks, opportunities, and HR objectives tracking.</div>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm font-bold">75%</span>
            <button class="btn btn-outline text-xs">Update Evidence</button>
          </div>
        </div>
        <div class="card p-4 flex items-center justify-between" style="border-left: 4px solid var(--danger);">
          <div>
            <div class="font-bold">Clause 9: Performance Evaluation</div>
            <div class="text-xs text-muted">Internal audits and management reviews.</div>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm font-bold text-danger">30% Action Required</span>
            <button class="btn btn-primary text-xs">Schedule Audit</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class IsoComponent {}
