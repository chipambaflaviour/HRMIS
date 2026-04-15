import React, { createContext, useContext, useState, ReactNode } from 'react';
import { 
  employees as initialEmployees, 
  leaveRequests as initialLeaves,
  trainingSessions as initialTrainings,
  notifications as initialNotifications,
  tasks as initialTasks,
  performanceRecords as initialPerformance
} from '../data/mockData';

type AppContextType = {
  employees: any[];
  leaves: any[];
  trainings: any[];
  notifications: any[];
  tasks: any[];
  performanceRecords: any[];
  addEmployee: (emp: any) => void;
  deleteEmployee: (id: number) => void;
  addLeaveRequest: (leave: any) => void;
  updateLeaveStatus: (id: number, status: string) => void;
  addTraining: (training: any) => void;
  addTask: (task: any) => void;
  updateTaskStatus: (id: number, status: string) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppDataProvider({ children }: { children: ReactNode }) {
  const [employees, setEmployees] = useState(initialEmployees);
  const [leaves, setLeaves] = useState(initialLeaves);
  const [trainings, setTrainings] = useState(initialTrainings);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [tasks, setTasks] = useState(initialTasks);
  const [performanceRecords, setPerformanceRecords] = useState(initialPerformance);

  const addEmployee = (emp: any) => {
    setEmployees([{ ...emp, id: Math.max(...employees.map(e => e.id)) + 1 }, ...employees]);
  };

  const deleteEmployee = (id: number) => {
    setEmployees(employees.filter(e => e.id !== id));
  };

  const addLeaveRequest = (leave: any) => {
    setLeaves([{ ...leave, id: Math.max(...leaves.map(l => l.id)) + 1 }, ...leaves]);
  };

  const updateLeaveStatus = (id: number, status: string) => {
    setLeaves(leaves.map(l => l.id === id ? { ...l, status } : l));
  };

  const addTraining = (training: any) => {
    setTrainings([{ ...training, id: Math.max(...trainings.map(t => t.id)) + 1 }, ...trainings]);
  };

  const addTask = (task: any) => {
    setTasks([{ ...task, id: Math.max(0, ...tasks.map(t => t.id)) + 1 }, ...tasks]);
  };

  const updateTaskStatus = (id: number, status: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status } : t));
  };

  return (
    <AppContext.Provider value={{
      employees, leaves, trainings, notifications, tasks, performanceRecords,
      addEmployee, deleteEmployee, addLeaveRequest, updateLeaveStatus, addTraining, addTask, updateTaskStatus
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppData() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppData must be used within an AppDataProvider');
  }
  return context;
}
