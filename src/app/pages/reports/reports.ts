import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  standalone: true,
  template: `
    <div class="animate-fade-in space-y-6">
      <div class="mb-6 flex justify-between items-center">
        <div>
          <h1>Automated Reporting</h1>
          <p>System-compiled reports for executive review.</p>
        </div>
        <button class="btn btn-primary">Generate Custom Report</button>
      </div>

      <div class="grid grid-cols-2 gap-6">
        <div class="card cursor-pointer hover:border-primary transition-all">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-10 h-10 bg-primary-light text-primary rounded-full flex items-center justify-center font-bold">Q</div >
            <div>
              <h3 class="text-lg">Quarterly HR Governance Summary</h3>
              <div class="text-xs text-muted">Auto-compiled from all 5 regions</div>
            </div>
          </div>
          <p class="mb-4">Includes headcount changes, turnover rates, leave utilization, and ISO benchmark progression for Q2 2024.</p>
          <button class="btn btn-primary w-full">Download PDF</button>
        </div>

        <div class="card cursor-pointer hover:border-primary transition-all">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-10 h-10 bg-primary-light text-primary rounded-full flex items-center justify-center font-bold">M</div >
            <div>
              <h3 class="text-lg">Monthly Payroll Variance</h3>
              <div class="text-xs text-muted">Finance & HR Sync</div>
            </div>
          </div>
          <p class="mb-4">Details on new hires, terminations, probation adjustments, and overtime aggregates for cross-border payroll.</p>
          <button class="btn btn-primary w-full">Download Excel</button>
        </div>
      </div>
    </div>
  `
})
export class ReportsComponent {}
