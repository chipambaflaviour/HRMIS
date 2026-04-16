import { Component } from '@angular/core';

@Component({
  selector: 'app-training',
  standalone: true,
  template: `
    <div class="animate-fade-in space-y-6">
      <div class="mb-6 flex justify-between items-center">
        <div>
          <h1>Training Calendar</h1>
          <p>Schedule and track staff upskilling and mandatory compliance training.</p>
        </div>
        <button class="btn btn-primary">Schedule Session</button>
      </div>

      <div class="card p-0 overflow-hidden mb-6">
        <div class="p-6 bg-gray-50 flex justify-between items-center" style="background: var(--background); border-bottom: 1px solid var(--border);">
          <div class="text-xl font-bold flex items-center gap-4">
            <button class="btn btn-outline p-2 h-auto text-sm">&#8592;</button>
            May 2024
            <button class="btn btn-outline p-2 h-auto text-sm">&#8594;</button>
          </div>
          <div class="flex gap-2">
            <span class="badge badge-primary">Company Wide</span>
            <span class="badge" style="background: #E0E7FF; color: #3730A3;">Departmental</span>
          </div>
        </div>

        <div class="p-4">
          <div class="grid grid-cols-7 gap-px text-center font-bold text-sm text-muted mb-2">
            <div class="py-2">Sun</div><div class="py-2">Mon</div><div class="py-2">Tue</div><div class="py-2">Wed</div><div class="py-2">Thu</div><div class="py-2">Fri</div><div class="py-2">Sat</div>
          </div>
          <div class="grid grid-cols-7 gap-2">
            <!-- Blank days for start of month offset -->
            <div class="h-28 rounded border p-2 text-muted bg-gray-50" style="border-color: var(--border); opacity: 0.5;">28</div>
            <div class="h-28 rounded border p-2 text-muted bg-gray-50" style="border-color: var(--border); opacity: 0.5;">29</div>
            <div class="h-28 rounded border p-2 text-muted bg-gray-50" style="border-color: var(--border); opacity: 0.5;">30</div>
            
            <div class="h-28 rounded border p-2 flex flex-col font-medium" style="border-color: var(--border);">1</div>
            <div class="h-28 rounded border p-2 flex flex-col font-medium" style="border-color: var(--border);">2</div>
            <div class="h-28 rounded border p-2 flex flex-col font-medium relative bg-primary-light border-primary transition-all hover:shadow-md cursor-pointer" style="border-color: var(--primary);">
              <span class="mb-1 text-primary">3</span>
              <div class="bg-primary text-white text-[11px] p-1 rounded font-bold leading-tight mt-auto shadow-sm">
                Leadership Workshop (14:00)
              </div>
            </div>
            <div class="h-28 rounded border p-2 flex flex-col font-medium" style="border-color: var(--border);">4</div>
            
            <!-- Week 2 -->
            <div class="h-28 rounded border p-2 flex flex-col font-medium" style="border-color: var(--border);">5</div>
            <div class="h-28 rounded border p-2 flex flex-col font-medium" style="border-color: var(--border);">6</div>
            <div class="h-28 rounded border p-2 flex flex-col font-medium relative transition-all hover:shadow-md cursor-pointer" style="border-color: #A5B4FC; background: #EEF2FF;">
              <span class="mb-1" style="color: #3730A3;">7</span>
              <div class="text-white text-[11px] p-1 rounded font-bold leading-tight mt-auto shadow-sm" style="background: #4F46E5;">
                IT Security (10:00)
              </div>
            </div>
            <div class="h-28 rounded border p-2 flex flex-col font-medium" style="border-color: var(--border);">8</div>
            <div class="h-28 rounded border p-2 flex flex-col font-medium" style="border-color: var(--border);">9</div>
            <div class="h-28 rounded border p-2 flex flex-col font-medium" style="border-color: var(--border);">10</div>
            <div class="h-28 rounded border p-2 flex flex-col font-medium" style="border-color: var(--border);">11</div>
            
            <!-- Week 3 (empty for brevity, just numbers to show layout) -->
            <div class="h-28 rounded border p-2 flex flex-col font-medium" style="border-color: var(--border);">12</div>
            <div class="h-28 rounded border p-2 flex flex-col font-medium" style="border-color: var(--border);">13</div>
            <div class="h-28 rounded border p-2 flex flex-col font-medium" style="border-color: var(--border);">14</div>
            <div class="h-28 rounded border p-2 flex flex-col font-medium" style="border-color: var(--border);">15</div>
            <div class="h-28 rounded border p-2 flex flex-col font-medium" style="border-color: var(--border);">16</div>
            <div class="h-28 rounded border p-2 flex flex-col font-medium" style="border-color: var(--border);">17</div>
            <div class="h-28 rounded border p-2 flex flex-col font-medium" style="border-color: var(--border);">18</div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-6">
        <div class="card relative shadow-md" style="border-left: 4px solid var(--primary);">
          <div class="absolute top-4 right-4 text-xs font-bold bg-primary text-white px-2 py-1 rounded">MAY 3</div>
          <h3 class="mb-2 text-lg">Leadership Alignment Workshop</h3>
          <div class="text-sm font-bold text-muted mb-4">Mandatory &middot; Virtual</div>
          <p class="text-sm mb-4">Focuses on cross-regional management synergy and implementation of the new organizational structure directives.</p>
          <div class="flex items-center justify-between mt-auto">
            <span class="text-xs font-bold">Requires Executive Board</span>
            <button class="btn btn-primary btn-sm text-xs py-1 px-3">View Attendees</button>
          </div>
        </div>

        <div class="card relative shadow-md" style="border-left: 4px solid #4F46E5;">
          <div class="absolute top-4 right-4 text-xs font-bold text-white px-2 py-1 rounded" style="background: #4F46E5;">MAY 7</div>
          <h3 class="mb-2 text-lg">IT Security & Data Handling</h3>
          <div class="text-sm font-bold text-muted mb-4" style="color: #4F46E5;">Compliance &middot; Meeting Room A</div>
          <p class="text-sm mb-4">Annual mandatory refresher on phishing, password management, and handling sensitive corporate data within the HR framework.</p>
          <div class="flex items-center justify-between mt-auto">
            <span class="text-xs font-bold text-muted">All Staff</span>
            <button class="btn btn-outline btn-sm text-xs py-1 px-3">View Attendees</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class TrainingComponent {}
