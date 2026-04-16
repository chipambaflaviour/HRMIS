import { Component, inject, signal } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="animate-fade-in relative">
      
      <!-- View Task Detail Modal -->
      @if (activeTask()) {
        <div class="fixed inset-0 flex items-center justify-center z-50 animate-fade-in" style="background: rgba(0,0,0,0.4); backdrop-filter: blur(4px);">
          <div class="card w-[450px] max-w-full shadow-2xl relative bg-white border-0" style="border-radius: var(--radius-lg); transform: scale(0.95); animation: zoomIn 0.2s forwards;">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h2 class="text-xl m-0">{{ activeTask()?.title }}</h2>
                <div class="text-xs text-muted mt-1">{{ activeTask()?.subtitle }}</div>
              </div>
              <button class="text-muted hover:text-secondary p-1" (click)="closeTask()" style="background: none; border: none; font-size: 1.25rem; cursor: pointer;">✕</button>
            </div>
            
            <div class="py-4 border-y border-gray-100 my-4" style="border-color: var(--border);">
              <p class="text-sm text-secondary">{{ activeTask()?.description }}</p>
            </div>

            <div class="mt-6 flex justify-end gap-3">
              <button class="btn btn-outline" (click)="closeTask()">Dismiss</button>
              <button class="btn btn-primary" (click)="completeTask()">Mark as Complete</button>
            </div>
          </div>
        </div>
      }

      <!-- Add New Task Modal -->
      @if (showAddTaskModal()) {
        <div class="fixed inset-0 flex items-center justify-center z-50 animate-fade-in" style="background: rgba(0,0,0,0.4); backdrop-filter: blur(4px);">
          <div class="card w-[450px] max-w-full shadow-2xl relative bg-white border-0" style="border-radius: var(--radius-lg); transform: scale(0.95); animation: zoomIn 0.2s forwards;">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-xl m-0">Add New Task</h2>
              <button class="text-muted hover:text-secondary p-1" (click)="showAddTaskModal.set(false)" style="background: none; border: none; font-size: 1.25rem; cursor: pointer;">✕</button>
            </div>
            
            <div class="form-group">
              <label class="form-label">Task Title</label>
              <input type="text" class="form-input" (input)="newTaskTitle.set($any($event.target).value)" [value]="newTaskTitle()" placeholder="e.g. Call Regional Director" />
            </div>
            <div class="form-group">
              <label class="form-label">Subtitle / Due Date</label>
              <input type="text" class="form-input" (input)="newTaskSubtitle.set($any($event.target).value)" [value]="newTaskSubtitle()" placeholder="e.g. Due Tomorrow" />
            </div>
            <div class="form-group">
              <label class="form-label">Description</label>
              <textarea class="form-input" (input)="newTaskDesc.set($any($event.target).value)" [value]="newTaskDesc()" rows="3" placeholder="Additional details..."></textarea>
            </div>

            <div class="mt-6 flex justify-end gap-3">
              <button class="btn btn-outline" (click)="showAddTaskModal.set(false)">Cancel</button>
              <button class="btn btn-primary" (click)="saveTask()">Add Task</button>
            </div>
          </div>
        </div>
      }
      
      <style>
        @keyframes zoomIn {
          to { transform: scale(1); }
        }
      </style>

      <div class="mb-6 flex justify-between items-end">
        <div>
          <h1>Regional Executive Dashboard</h1>
          <p>Overview of HR Governance and Analytics across all 5 operating countries.</p>
        </div>
        <button class="btn btn-primary">Download Report</button>
      </div>

      <div class="grid grid-cols-4 gap-6 mb-6">
        <div class="card text-white shadow-md transition-all hover:shadow-lg" style="background: var(--primary);">
          <div class="text-sm text-white/80">Total Headcount</div>
          <div class="text-3xl font-bold mt-2">1,245</div>
        </div>
        <div class="card shadow-md transition-all hover:shadow-lg cursor-pointer">
          <div class="text-sm text-muted">Open Vacancies</div>
          <div class="text-3xl font-bold mt-2 text-secondary">42</div>
          <div class="text-xs text-primary mt-1 font-medium">across 3 regions</div>
        </div>
        <div class="card shadow-md transition-all hover:shadow-lg cursor-pointer">
          <div class="text-sm text-muted">Average Retention</div>
          <div class="text-3xl font-bold mt-2 text-secondary">94%</div>
          <div class="text-xs text-success mt-1 font-medium">+2% from last quarter</div>
        </div>
        <div class="card shadow-md transition-all hover:shadow-lg cursor-pointer">
          <div class="text-sm text-muted">ISO 9001 Compliance</div>
          <div class="text-3xl font-bold mt-2 text-secondary">88%</div>
          <div class="w-full bg-gray-200 mt-2 rounded-full h-1.5" style="background: var(--border);">
            <div class="h-1.5 rounded-full" style="width: 88%; background: var(--primary);"></div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-6">
        <div class="card shadow-sm" style="grid-column: span 1;">
          <div class="flex justify-between items-center mb-4">
            <h3 class="m-0 text-lg">Quick Tasks</h3>
            <button class="btn btn-outline btn-sm text-xs py-1 px-2" (click)="showAddTaskModal.set(true)">+ Add Task</button>
          </div>
          <p class="text-xs text-muted mb-4">Click any task to view details or action it.</p>
          <div class="flex flex-col gap-3">
            @for (task of pendingTasks(); track task.id) {
              <div 
                class="p-3 border rounded-lg cursor-pointer hover:border-primary transition-colors flex items-start gap-3 bg-white shadow-sm hover:shadow-md" 
                style="border-color: var(--border);"
                (click)="openTask(task)"
              >
                <div class="w-8 h-8 rounded bg-primary-light text-primary flex items-center justify-center text-lg mt-0.5">📋</div>
                <div>
                  <div class="font-bold text-sm text-secondary leading-tight" [class.line-through]="task.completed" [class.text-muted]="task.completed">{{ task.title }}</div>
                  <div class="text-xs text-muted mt-1">{{ task.subtitle }}</div>
                </div>
              </div>
            }
          </div>
        </div>

        <div class="card shadow-sm" style="grid-column: span 2;">
          <div class="flex justify-between items-center mb-4">
            <h3 class="m-0">Regional Distribution & Alerts</h3>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <table class="table">
              <thead>
                <tr>
                  <th>Region</th>
                  <th>Employees</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-gray-50">
                  <td class="font-medium text-sm">Zambia (HQ)</td>
                  <td class="text-sm">650</td>
                  <td><span class="badge badge-success px-2 py-0.5 text-[10px]">Optimal</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="font-medium text-sm">Mozambique</td>
                  <td class="text-sm">210</td>
                  <td><span class="badge badge-success px-2 py-0.5 text-[10px]">Optimal</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="font-medium text-sm">Angola</td>
                  <td class="text-sm">185</td>
                  <td><span class="badge badge-warning px-2 py-0.5 text-[10px]">Hiring</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="font-medium text-sm">DRC</td>
                  <td class="text-sm">120</td>
                  <td><span class="badge badge-warning px-2 py-0.5 text-[10px]">Hiring</span></td>
                </tr>
              </tbody>
            </table>
            
            <div class="flex flex-col gap-3">
              <div class="font-bold text-sm text-muted uppercase tracking-wider mb-1">Live Notifications</div>
              <div class="flex items-center gap-3 p-3 rounded-lg transition-colors bg-gray-50 border" style="border-color: var(--border);">
                <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shadow-sm" style="background: var(--warning);">!</div>
                <div>
                  <div class="font-bold text-sm text-secondary">Leave Requests (Angola)</div>
                  <div class="text-[11px] text-muted">A 15% spike detected for next month.</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 rounded-lg transition-colors bg-gray-50 border" style="border-color: var(--border);">
                <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shadow-sm" style="background: var(--success);">✓</div>
                <div>
                  <div class="font-bold text-sm text-secondary">Probation Complete</div>
                  <div class="text-[11px] text-muted">All Q1 evaluations finalized in Zambia.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent {
  dataService = inject(DataService);
  
  // Read tasks from DataService so it persists across routes
  get pendingTasks() {
    return this.dataService.tasks;
  }

  activeTask = signal<any | null>(null);
  showAddTaskModal = signal(false);

  // Form Signals
  newTaskTitle = signal('');
  newTaskSubtitle = signal('');
  newTaskDesc = signal('');

  openTask(task: any) {
    this.activeTask.set(task);
  }

  closeTask() {
    this.activeTask.set(null);
  }

  completeTask() {
    const task = this.activeTask();
    if (task) {
      this.dataService.toggleTaskCompletion(task.id);
      this.activeTask.set(null);
    }
  }

  saveTask() {
    if (!this.newTaskTitle()) return;
    this.dataService.addTask({
      title: this.newTaskTitle(),
      subtitle: this.newTaskSubtitle() || 'New Task',
      description: this.newTaskDesc(),
      completed: false
    });
    // Reset and close
    this.newTaskTitle.set('');
    this.newTaskSubtitle.set('');
    this.newTaskDesc.set('');
    this.showAddTaskModal.set(false);
  }
}
