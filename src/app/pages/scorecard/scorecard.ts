import { Component } from '@angular/core';

@Component({
  selector: 'app-scorecard',
  standalone: true,
  template: `
    <div class="animate-fade-in space-y-6">
      <div class="mb-6 flex justify-between items-center">
        <div>
          <h1>Balanced Scorecard</h1>
          <p>Track strategic performance metrics across four critical dimensions.</p>
        </div>
        <select class="form-input" style="width: 200px;">
          <option>Global View</option>
          <option>Zambia (HQ)</option>
          <option>Mozambique</option>
        </select>
      </div>

      <div class="grid grid-cols-2 gap-6">
        <div class="card" style="border-top: 4px solid #10B981;">
          <h3 class="mb-4">Financial Perspective</h3>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between text-sm font-medium mb-1"><span>Revenue Growth</span><span>93%</span></div>
              <div class="w-full bg-gray-100 h-2 rounded"><div class="bg-green-500 h-2 rounded" style="width: 93%;"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-sm font-medium mb-1"><span>Cost Efficiency</span><span>85%</span></div>
              <div class="w-full bg-gray-100 h-2 rounded"><div class="bg-green-500 h-2 rounded" style="width: 85%;"></div></div>
            </div>
          </div>
        </div>

        <div class="card" style="border-top: 4px solid #3B82F6;">
          <h3 class="mb-4">Customer Perspective</h3>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between text-sm font-medium mb-1"><span>Client Satisfaction</span><span>98%</span></div>
              <div class="w-full bg-gray-100 h-2 rounded"><div class="bg-blue-500 h-2 rounded" style="width: 98%;"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-sm font-medium mb-1"><span>Market Share Expansion</span><span>72%</span></div>
              <div class="w-full bg-gray-100 h-2 rounded"><div class="bg-blue-500 h-2 rounded" style="width: 72%;"></div></div>
            </div>
          </div>
        </div>

        <div class="card" style="border-top: 4px solid #F59E0B;">
          <h3 class="mb-4">Internal Processes</h3>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between text-sm font-medium mb-1"><span>Operational Efficiency</span><span>88%</span></div>
              <div class="w-full bg-gray-100 h-2 rounded"><div class="bg-yellow-500 h-2 rounded" style="width: 88%;"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-sm font-medium mb-1"><span>Quality Assurance (ISO)</span><span>91%</span></div>
              <div class="w-full bg-gray-100 h-2 rounded"><div class="bg-yellow-500 h-2 rounded" style="width: 91%;"></div></div>
            </div>
          </div>
        </div>

        <div class="card" style="border-top: 4px solid var(--primary);">
          <h3 class="mb-4">Learning & Growth</h3>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between text-sm font-medium mb-1"><span>Employee Retention</span><span>94%</span></div>
              <div class="w-full bg-gray-100 h-2 rounded"><div style="background: var(--primary); height: 100%; border-radius: 4px; width: 94%;"></div></div>
            </div>
            <div>
              <div class="flex justify-between text-sm font-medium mb-1"><span>Training Completion</span><span>65%</span></div>
              <div class="w-full bg-gray-100 h-2 rounded"><div style="background: var(--primary); height: 100%; border-radius: 4px; width: 65%;"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ScorecardComponent {}
