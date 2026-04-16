import { Injectable, signal } from '@angular/core';

export interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  region: string;
  reportsToId?: string | null;
  status: 'Active' | 'On Leave' | 'Probation';
  joinDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  employees = signal<Employee[]>([
    { id: '1', name: 'John Doe', email: 'john@axis.com', role: 'CEO', department: 'Executive', region: 'Global', reportsToId: null, status: 'Active', joinDate: '2020-01-15' },
    { id: '2', name: 'Jane Smith', email: 'jane@axis.com', role: 'Regional Director', department: 'Operations', region: 'Zambia', reportsToId: '1', status: 'Active', joinDate: '2021-03-01' },
    { id: '3', name: 'Mike Johnson', email: 'mike@axis.com', role: 'HR Manager', department: 'Human Resources', region: 'Zambia', reportsToId: '2', status: 'Active', joinDate: '2022-06-10' },
    { id: '4', name: 'Sarah Williams', email: 'sarah@axis.com', role: 'Software Engineer', department: 'IT', region: 'Angola', reportsToId: '2', status: 'On Leave', joinDate: '2023-01-20' },
    { id: '5', name: 'David Brown', email: 'david@axis.com', role: 'Recruiter', department: 'Human Resources', region: 'Zambia', reportsToId: '3', status: 'Probation', joinDate: '2024-03-15' },
  ]);

  tasks = signal<any[]>([
    { id: 1, title: 'Finalize Q1 reports for Zambia', subtitle: 'Due Today, 14:00', description: 'The Q1 performance and operations report for the Zambia HQ needs to be finalized.', completed: false },
    { id: 2, title: 'Approve Mozambique Expansion Budget', subtitle: 'Executive Board review pending', description: 'Review the updated operational costs for the new Matola branch.', completed: false },
    { id: 3, title: 'Review C-Level Performance metrics', subtitle: 'Due in 3 days', description: 'The bi-annual 360-degree performance reviews for all regional directors are compiled.', completed: false }
  ]);

  addEmployee(employee: Employee) {
    this.employees.update(emps => [...emps, employee]);
  }

  addTask(task: any) {
    this.tasks.update(ts => [...ts, { ...task, id: Date.now() }]);
  }

  toggleTaskCompletion(taskId: number) {
    this.tasks.update(ts => ts.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t));
  }
}
