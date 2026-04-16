import { Component, inject, signal } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-planner',
  standalone: true,
  template: `
    <div class="animate-fade-in space-y-6 relative">
      <div class="mb-6 flex justify-between items-center">
        <div>
          <h1>Executive Planner</h1>
          <p>Strategic scheduling and high-level regional mapping.</p>
        </div>
        <button class="btn btn-primary" (click)="showAddTaskModal.set(true)">+ Add Task</button>
      </div>

      <div class="grid grid-cols-2 gap-6">
        <div class="card">
          <h3 class="mb-4">Upcoming Executive Briefings</h3>
          <ul class="space-y-4">
            <li class="flex items-center gap-4 bg-gray-50 p-3 rounded" style="background: var(--background);">
              <div class="flex flex-col items-center justify-center bg-primary text-white p-2 rounded w-12 h-12">
                <span class="text-xs">APR</span>
                <span class="font-bold">20</span>
              </div>
              <div>
                <div class="font-bold">Q2 Strategy Alignment</div>
                <div class="text-xs text-muted">Virtual - All Regional Directors</div>
              </div>
            </li>
            <li class="flex items-center gap-4 bg-gray-50 p-3 rounded" style="background: var(--background);">
              <div class="flex flex-col items-center justify-center bg-primary text-white p-2 rounded w-12 h-12">
                <span class="text-xs">MAY</span>
                <span class="font-bold">05</span>
              </div>
              <div>
                <div class="font-bold">Angola Office Visit</div>
                <div class="text-xs text-muted">On-site - Executive Board</div>
              </div>
            </li>
          </ul>
        </div>
        
        <div class="card relative">
          <h3 class="mb-4 flex justify-between">
            Key Priorities 
          </h3>
          <div class="space-y-3">
            @for (task of tasks(); track task.id) {
              <div class="flex items-center justify-between p-2 hover:bg-gray-50 rounded group transition-all" style="hover:background: var(--background);">
                <div class="flex items-center gap-3">
                  <input type="checkbox" [checked]="task.completed" (change)="toggleTask(task.id)" />
                  <span class="text-sm font-medium" [class.line-through]="task.completed" [class.text-muted]="task.completed">
                    {{ task.title }}
                  </span>
                  @if (task.reminderTime) {
                    <span class="text-xs bg-primary-light text-primary px-2 py-0.5 rounded-full flex items-center gap-1">
                      🔔 {{ task.reminderTime }}
                    </span>
                  }
                </div>
                <!-- Pop Reminder Trigger -->
                <button 
                  class="opacity-0 group-hover:opacity-100 btn btn-outline btn-sm text-xs p-1 h-auto" 
                  title="Set pop reminder"
                  (click)="openReminderPopup(task)">
                  ⏰ Set Reminder
                </button>
              </div>
            }
          </div>
        </div>
      </div>

      <!-- Pop Reminder Modal -->
      @if (activeTaskForReminder()) {
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in" style="background: rgba(0,0,0,0.5);">
          <div class="card w-96 bg-white shadow-2xl relative">
            <h3 class="mb-2 text-primary flex items-center gap-2"><span>⏰</span> Set Task Reminder</h3>
            <p class="text-sm text-muted mb-4 font-medium">{{ activeTaskForReminder()?.title }}</p>
            
            <div class="form-group mb-4">
              <label class="form-label">Remind me at</label>
              <input type="datetime-local" class="form-input w-full" #reminderInput />
            </div>

            <div class="flex justify-end gap-2 mt-6">
              <button class="btn btn-outline" (click)="closeReminderPopup()">Cancel</button>
              <button class="btn btn-primary" (click)="saveReminder(reminderInput.value)">Save Pop Reminder</button>
            </div>
          </div>
        </div>
      }

      <!-- Simulated Floating Active Pop Reminder (Toast) -->
      @if (showToast()) {
        <div class="fixed bottom-6 right-6 bg-white border-l-4 border-primary p-4 shadow-lg rounded animate-fade-in z-50 flex items-start gap-3 w-80" style="border-left: 4px solid var(--primary);">
          <div class="text-2xl mt-1">🔔</div>
          <div class="flex-1">
            <div class="font-bold text-sm">Task Reminder!</div>
            <div class="text-xs text-muted mb-2">Finalize Q1 reports for Zambia is due soon.</div>
            <div class="flex gap-2">
              <button class="btn btn-primary text-xs py-1 px-2" (click)="showToast.set(false)">Acknowledge</button>
              <button class="btn btn-outline text-xs py-1 px-2" (click)="showToast.set(false)">Snooze</button>
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
              <button class="btn btn-primary" (click)="saveNewTask()">Add Task</button>
            </div>
          </div>
        </div>
      }
    </div>
  `
})
export class PlannerComponent {
  dataService = inject(DataService);
  
  get tasks() { return this.dataService.tasks; }

  activeTaskForReminder = signal<any | null>(null);
  showToast = signal(true);
  showAddTaskModal = signal(false);

  newTaskTitle = signal('');
  newTaskSubtitle = signal('');
  newTaskDesc = signal('');

  toggleTask(taskId: number) {
    this.dataService.toggleTaskCompletion(taskId);
  }

  openReminderPopup(task: any) {
    this.activeTaskForReminder.set(task);
  }

  closeReminderPopup() {
    this.activeTaskForReminder.set(null);
  }

  saveReminder(time: string) {
    const task = this.activeTaskForReminder();
    if (!task) return;
    
    const displayTime = time ? new Date(time).toLocaleString('en-US', { weekday: 'short', hour: '2-digit', minute:'2-digit' }) : 'Soon';
    
    // Updates global state for the task to include reminder info
    this.dataService.tasks.update(ts => ts.map(t => t.id === task.id ? { ...t, hasReminder: true, reminderTime: displayTime } : t));
    this.closeReminderPopup();
  }

  saveNewTask() {
    if (!this.newTaskTitle()) return;
    this.dataService.addTask({
      title: this.newTaskTitle(),
      subtitle: this.newTaskSubtitle() || 'New Task',
      description: this.newTaskDesc(),
      completed: false
    });
    this.newTaskTitle.set('');
    this.newTaskSubtitle.set('');
    this.newTaskDesc.set('');
    this.showAddTaskModal.set(false);
  }
}
