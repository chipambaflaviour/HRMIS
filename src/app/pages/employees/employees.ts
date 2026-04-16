import { Component, inject, computed, signal } from '@angular/core';
import { DataService, Employee } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="animate-fade-in space-y-6">
      <div class="mb-6 flex justify-between items-center">
        <div>
          <h1>Employees & Organogram</h1>
          <p>Manage the regional workforce and view the generated structure.</p>
        </div>
        <button class="btn btn-primary" (click)="toggleAdd()">+ Add Employee</button>
      </div>

      <div class="tabs">
        <div class="tab" [class.active]="view() === 'list'" (click)="view.set('list')">Employee Database</div>
        <div class="tab" [class.active]="view() === 'organogram'" (click)="view.set('organogram')">Dynamic Organogram</div>
      </div>

      <!-- Add Employee Form (Modal/Inline) -->
      @if (showAdd()) {
        <div class="card mb-6" style="border-top: 4px solid var(--primary);">
          <h3 class="mb-4">New Employee Entry</h3>
          <div class="grid grid-cols-3 gap-4">
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input type="text" class="form-input" placeholder="e.g. Alice Cooper" />
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" class="form-input" placeholder="alice@axis.com" />
            </div>
            <div class="form-group">
              <label class="form-label">Region</label>
              <select class="form-input">
                <option>Zambia</option><option>Mozambique</option><option>Angola</option><option>DRC</option><option>South Sudan</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Department</label>
              <select class="form-input">
                <option>Executive</option><option>Operations</option><option>IT</option><option>Human Resources</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Role</label>
              <input type="text" class="form-input" placeholder="e.g. Analyst" />
            </div>
            <div class="form-group">
              <label class="form-label">Reports To</label>
              <select class="form-input">
                <option value="">-- No Manager (Root) --</option>
                @for (emp of dataService.employees(); track emp.id) {
                  <option [value]="emp.id">{{ emp.name }} ({{ emp.role }})</option>
                }
              </select>
            </div>
          </div>
          <div class="flex gap-2 mt-4">
            <button class="btn btn-primary" (click)="toggleAdd()">Save Employee</button>
            <button class="btn btn-outline" (click)="toggleAdd()">Cancel</button>
          </div>
        </div>
      }

      @if (view() === 'list') {
        <div class="card p-0">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role & Dept</th>
                <th>Region</th>
                <th>Reports To</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              @for (emp of dataService.employees(); track emp.id) {
                <tr>
                  <td>
                    <div class="font-bold">{{ emp.name }}</div>
                    <div class="text-xs text-muted">{{ emp.email }}</div>
                  </td>
                  <td>
                    <div class="font-medium text-sm">{{ emp.role }}</div>
                    <div class="text-xs text-muted">{{ emp.department }}</div>
                  </td>
                  <td>{{ emp.region }}</td>
                  <td>{{ getManagerName(emp.reportsToId) }}</td>
                  <td><span class="badge badge-primary">{{ emp.status }}</span></td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      } @else {
        <div class="card bg-gray-50" style="min-height: 500px; display: flex; justify-content: center; padding: 3rem; background: var(--background); overflow-x: auto;">
          <div class="organogram-tree">
            <!-- Root Nodes -->
            @for (node of getHierarchy(); track node.id) {
              <ng-container *ngTemplateOutlet="orgNode; context: { $implicit: node }"></ng-container>
            }
          </div>
        </div>

        <ng-template #orgNode let-node>
          <div class="flex flex-col items-center">
            <div class="card text-center relative" style="width: 200px; padding: 1rem; margin: 0 1rem; border-top: 3px solid var(--primary);">
              <div class="font-bold text-sm">{{ node.name }}</div>
              <div class="text-xs text-muted">{{ node.role }}</div>
              <div class="text-xs font-bold text-primary mt-1">{{ node.region }}</div>
            </div>
            
            @if (node.children && node.children.length > 0) {
              <div style="width: 2px; height: 30px; background: var(--border);"></div>
              <div style="height: 2px; background: var(--border); width: calc(100% - 200px); min-width: 0;"></div>
              <div class="flex gap-4 pt-4 relative" [style.border-top]="node.children.length > 1 ? '2px solid var(--border)' : 'none'">
                @for (child of node.children; track child.id) {
                  <div class="relative pt-4">
                    <div *ngIf="node.children.length > 1" class="absolute top-0 left-1/2 w-0.5 h-4 bg-[var(--border)] -translate-x-1/2"></div>
                    <ng-container *ngTemplateOutlet="orgNode; context: { $implicit: child }"></ng-container>
                  </div>
                }
              </div>
            }
          </div>
        </ng-template>
      }
    </div>
  `
})
export class EmployeesComponent {
  dataService = inject(DataService);
  view = signal<'list' | 'organogram'>('list');
  showAdd = signal(false);

  toggleAdd() {
    this.showAdd.set(!this.showAdd());
  }

  getManagerName(managerId?: string | null): string {
    if (!managerId) return 'None';
    const mgr = this.dataService.employees().find(e => e.id === managerId);
    return mgr ? mgr.name : 'Unknown';
  }

  getHierarchy() {
    const emps = this.dataService.employees();
    type TreeNode = Employee & { children: TreeNode[] };
    const map = new Map<string, TreeNode>();
    const roots: TreeNode[] = [];

    emps.forEach(emp => {
      map.set(emp.id, { ...emp, children: [] });
    });

    emps.forEach(emp => {
      if (emp.reportsToId && map.has(emp.reportsToId)) {
        map.get(emp.reportsToId)!.children.push(map.get(emp.id)!);
      } else {
        roots.push(map.get(emp.id)!);
      }
    });

    return roots;
  }
}
