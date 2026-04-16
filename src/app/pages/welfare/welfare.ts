import { Component } from '@angular/core';

@Component({
  selector: 'app-welfare',
  standalone: true,
  template: `
    <div class="animate-fade-in space-y-6">
      <div class="mb-6 flex justify-between items-center">
        <div>
          <h1>Employee Welfare Programs</h1>
          <p>Health, wellness benefits, and employee support initiatives.</p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-6">
        <div class="card">
          <h3 class="mb-4">Active Initiatives</h3>
          <ul class="space-y-4">
            <li class="flex items-center gap-4 bg-gray-50 p-3 rounded" style="background: var(--background);">
              <div class="text-3xl">🏥</div>
              <div>
                <div class="font-bold">Regional Health Coverage</div>
                <div class="text-xs text-muted">Active in Zambia, Angola, DRC. Mozamique pending.</div>
              </div>
            </li>
            <li class="flex items-center gap-4 bg-gray-50 p-3 rounded" style="background: var(--background);">
              <div class="text-3xl">🧘‍♀️</div>
              <div>
                <div class="font-bold">Mental Health Fridays</div>
                <div class="text-xs text-muted">Weekly virtual check-ins and shortened hours.</div>
              </div>
            </li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="mb-4">Upcoming Birthdays & Milestones</h3>
          <ul class="space-y-4">
            <li class="flex items-center justify-between p-2 border-b" style="border-color: var(--border);">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-primary-light text-primary rounded-full flex items-center justify-center font-bold">SM</div>
                <div><div class="font-bold text-sm">Sarah Williams</div><div class="text-xs text-muted">IT (Angola)</div></div>
              </div>
              <div class="text-xs font-bold text-primary">🎉 Birthday Tomorrow</div>
            </li>
            <li class="flex items-center justify-between p-2 border-b" style="border-color: var(--border);">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-primary-light text-primary rounded-full flex items-center justify-center font-bold">JD</div>
                <div><div class="font-bold text-sm">John Doe</div><div class="text-xs text-muted">Executive (Zambia)</div></div>
              </div>
              <div class="text-xs font-bold text-success">🏆 5 Years Work Anniversary</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class WelfareComponent {}
