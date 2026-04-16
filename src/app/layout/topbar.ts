import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  template: `
    <header class="topbar">
      <div>
        <h2 class="text-xl font-bold m-0 p-0 text-primary">HR Analytics & Governance</h2>
      </div>
      <div class="flex items-center gap-4">
        <div class="relative">
          <button class="btn btn-outline" style="border-radius: 9999px; width: 40px; height: 40px; padding: 0;">
            <span>🔔</span>
          </button>
          <span class="absolute" style="top: -5px; right: -5px; background: var(--danger); color: white; border-radius: 50%; width: 20px; height: 20px; font-size: 0.7rem; display: flex; align-items: center; justify-content: center; font-weight: bold;">
            3
          </span>
        </div>
        <div class="flex items-center gap-2">
          <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--primary-light); color: var(--primary); display: flex; align-items: center; justify-content: center; font-weight: bold; border: 2px solid var(--primary);">
            JD
          </div>
          <div>
            <div class="text-sm font-bold">John Doe</div>
            <div class="text-xs text-muted">Super Admin</div>
          </div>
        </div>
      </div>
    </header>
  `
})
export class TopbarComponent {}
