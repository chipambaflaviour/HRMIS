import { Component } from '@angular/core';

@Component({
  selector: 'app-storage',
  standalone: true,
  template: `
    <div class="animate-fade-in space-y-6">
      <div class="mb-6 flex justify-between items-center">
        <div>
          <h1>Document & File Storage</h1>
          <p>Centralized repository for HR policies, contracts, and templates.</p>
        </div>
        <button class="btn btn-primary">Upload File</button>
      </div>

      <div class="grid grid-cols-4 gap-6 mb-6">
        <div class="card cursor-pointer hover:border-primary transition-all">
          <div class="text-3xl mb-2">📁</div>
          <div class="font-bold">Company Policies</div>
          <div class="text-xs text-muted">12 Files &middot; 4.2 MB</div>
        </div>
        <div class="card cursor-pointer hover:border-primary transition-all">
          <div class="text-3xl mb-2">📄</div>
          <div class="font-bold">Employment Contracts</div>
          <div class="text-xs text-muted">1,245 Files &middot; 2.1 GB</div>
        </div>
        <div class="card cursor-pointer hover:border-primary transition-all">
          <div class="text-3xl mb-2">📊</div>
          <div class="font-bold">ISO Documentation</div>
          <div class="text-xs text-muted">45 Files &middot; 15 MB</div>
        </div>
        <div class="card cursor-pointer hover:border-primary transition-all">
          <div class="text-3xl mb-2">📝</div>
          <div class="font-bold">Onboarding Templates</div>
          <div class="text-xs text-muted">8 Files &middot; 2.5 MB</div>
        </div>
      </div>

      <div class="card">
        <h3 class="mb-4">Recent Files</h3>
        <table class="table">
          <thead><tr><th>Name</th><th>Date Modified</th><th>Size</th><th>Actions</th></tr></thead>
          <tbody>
            <tr>
              <td class="font-medium text-sm">Zambia_Employee_Handbook_2024.pdf</td>
              <td>Today, 10:45 AM</td>
              <td>1.2 MB</td>
              <td><button class="btn btn-outline text-xs">Download</button></td>
            </tr>
            <tr>
              <td class="font-medium text-sm">Q1_Performance_Review_Template.docx</td>
              <td>Yesterday, 14:20 PM</td>
              <td>450 KB</td>
              <td><button class="btn btn-outline text-xs">Download</button></td>
            </tr>
            <tr>
              <td class="font-medium text-sm">ISO9001_Audit_Checklist.xlsx</td>
              <td>Apr 12, 2024</td>
              <td>85 KB</td>
              <td><button class="btn btn-outline text-xs">Download</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class StorageComponent {}
