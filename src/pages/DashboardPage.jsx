import React, { useState, useEffect } from 'react';
import { Users, FileText, Bell, MapPin, CheckCircle, Plus, X, Calendar as CalendarIcon, Clock, Trash2, AlertCircle, Gift, PartyPopper } from 'lucide-react';

const initializeMockTasks = () => [
  { id: 1, title: 'Approve Leave Request - Mary Phiri', due: '2026-04-20', priority: 'High', status: 'Pending' },
  { id: 2, title: 'Review Q1 Regional Compliance', due: '2026-04-22', priority: 'Medium', status: 'Not Started' },
  { id: 3, title: 'Onboard New Angola Sales Lead', due: '2026-04-18', priority: 'High', status: 'Completed' }
];

const DashboardPage = () => {
  const [tasks, setTasks] = useState(initializeMockTasks());
  
  // Modals state
  const [isTaskManagerOpen, setIsTaskManagerOpen] = useState(false);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [isReminderOpen, setIsReminderOpen] = useState(false); // New Reminder State
  
  // New Task Form State
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDue, setNewTaskDue] = useState('');

  // Auto-trigger reminder on mount if there are pending tasks
  useEffect(() => {
    const pendingTasks = tasks.filter(t => t.status === 'Pending' || t.status === 'Not Started');
    if (pendingTasks.length > 0) {
      // Simulate slightly delayed load for UX
      const timer = setTimeout(() => {
        setIsReminderOpen(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim() || !newTaskDue) return;
    
    setTasks([
      { 
        id: Date.now(), 
        title: newTaskTitle, 
        due: newTaskDue, 
        priority: 'Medium', 
        status: 'Not Started' 
      },
      ...tasks
    ]);
    
    // Reset form and close add modal, return to manager
    setNewTaskTitle('');
    setNewTaskDue('');
    setIsAddTaskOpen(false);
  };

  const handleStatusChange = (id, newStatus) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  // Derived metrics for Dashboard UI
  const pendingCount = tasks.filter(t => t.status !== 'Completed').length;
  const recentTasks = tasks.slice(0, 3); // Preview top 3 on dashboard
  const reminderTasks = tasks.filter(t => t.status !== 'Completed'); 

  return (
    <div className="space-y-6 max-w-7xl mx-auto relative antialiased">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Regional Executive Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Overview of HR Governance across all 5 operating countries.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Headcount', value: '1,245', icon: <Users size={24} className="text-white" />, textBase: 'text-white', bg: 'bg-primary' },
          { label: 'Open Vacancies', value: '42', icon: <FileText size={24} className="text-primary" />, textBase: 'text-gray-900', bg: 'bg-white border border-gray-200' },
          { label: 'Active Regions', value: '5', icon: <MapPin size={24} className="text-primary" />, textBase: 'text-gray-900', bg: 'bg-white border border-gray-200' },
          { label: 'Pending Tasks', value: pendingCount.toString(), icon: <Bell size={24} className="text-primary" />, textBase: 'text-gray-900', bg: 'bg-white border border-gray-200' },
        ].map((kpi, idx) => (
          <div key={idx} className={`${kpi.bg} p-6 rounded-xl shadow-sm flex items-center justify-between`}>
            <div>
              <p className={`text-sm font-medium ${kpi.textBase === 'text-white' ? 'text-white/80' : 'text-gray-500'}`}>{kpi.label}</p>
              <p className={`text-3xl font-bold mt-1 ${kpi.textBase}`}>{kpi.value}</p>
            </div>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${kpi.textBase === 'text-white' ? 'bg-black/20' : 'bg-red-50'}`}>
              {kpi.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Quick Task Overview Card */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col h-full">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 rounded-t-xl">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <CheckCircle className="text-primary" size={20} />
              Task Overview
            </h2>
            <button 
              onClick={() => setIsTaskManagerOpen(true)}
              className="text-sm bg-primary text-white hover:bg-black px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-sm"
            >
              Open Task Manager
            </button>
          </div>
          
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-4">Previewing most recent tracking tasks. Open the Task Manager to change statuses, clear completed items, or add due dates.</p>
            <ul className="space-y-3">
              {recentTasks.map(task => (
                <li key={task.id} className="p-4 border border-gray-100 rounded-lg flex justify-between items-center bg-gray-50">
                  <div>
                    <h3 className={`font-bold text-sm ${task.status === 'Completed' ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                      {task.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <Clock size={12} /> Due: {task.due}
                    </p>
                  </div>
                  <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${
                    task.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-200' :
                    task.status === 'Pending' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                    'bg-gray-100 text-gray-600 border-gray-200'
                  }`}>
                    {task.status}
                  </span>
                </li>
              ))}
              {tasks.length === 0 && (
                <div className="text-center p-4 text-sm text-gray-400 border border-dashed border-gray-200 rounded-lg">
                  No active tasks.
                </div>
              )}
            </ul>
          </div>
        </div>

        {/* Highlights Sidebar */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 h-full">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
            <CalendarIcon className="text-primary" size={20} />
            Today's Highlights
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg border border-red-100 flex items-start gap-4 transition-transform hover:scale-[1.01] cursor-pointer">
              <div className="bg-white p-2 rounded-lg shadow-sm border border-red-100 shrink-0">
                <Gift size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">John Banda's Birthday</p>
                <p className="text-xs text-gray-500 mt-1">Send your wishes (Zambia HQ)</p>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-4 transition-transform hover:scale-[1.01] cursor-pointer">
              <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200 shrink-0">
                <PartyPopper size={20} className="text-gray-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Upcoming: Labour Day</p>
                <p className="text-xs text-gray-500 mt-1">Starts May 1st across 3 regions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- TASK REMINDER NOTIFICATION POPUP --- */}
      {isReminderOpen && (
        <div className="fixed inset-0 bg-black/50 z-[70] flex items-center justify-center p-4 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all border-t-4 border-primary">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-50 text-primary rounded-full flex items-center justify-center">
                    <AlertCircle size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Task List Reminder</h3>
                    <p className="text-sm font-medium text-primary">Please finish up the pending tasks close to their due dates.</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsReminderOpen(false)}
                  className="text-gray-400 hover:text-gray-900 transition-colors bg-gray-50 hover:bg-gray-100 p-1.5 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="mt-6 bg-gray-50 rounded-lg border border-gray-100 p-1">
                <ul className="divide-y divide-gray-100">
                  {reminderTasks.map(task => (
                    <li key={task.id} className="p-3 flex justify-between items-center bg-white rounded flex-col sm:flex-row gap-2">
                       <span className="font-bold text-sm text-gray-800">{task.title}</span>
                       <span className="text-xs bg-red-50 text-primary font-bold px-2 py-1 rounded border border-red-100 flex items-center gap-1 shrink-0">
                         <Clock size={12} /> Due: {task.due}
                       </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
              <button 
                onClick={() => {
                  setIsReminderOpen(false);
                  setIsTaskManagerOpen(true);
                }}
                className="bg-primary hover:bg-black text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
              >
                Go to Task Manager
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- ALL TASKS MANAGER MODAL --- */}
      {isTaskManagerOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col transform transition-all">
            
            <div className="flex justify-between items-center p-5 border-b border-gray-100 bg-gray-50/80 shrink-0">
              <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                <CheckCircle className="text-primary" size={20} /> Tasks Manager
              </h3>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsAddTaskOpen(true)}
                  className="text-sm bg-primary hover:bg-black text-white px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1 shadow-sm"
                >
                  <Plus size={16} /> Add Task
                </button>
                <button 
                  onClick={() => setIsTaskManagerOpen(false)}
                  className="text-gray-400 hover:text-gray-900 transition-colors p-1"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="p-0 overflow-y-auto flex-1 bg-gray-50/30">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-100 sticky top-0 shadow-sm z-10">
                  <tr>
                    <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Task Details</th>
                    <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider w-32">Due Date</th>
                    <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider w-40">Status</th>
                    <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider w-20 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {tasks.map(task => (
                    <tr key={task.id} className={`hover:bg-white transition-colors ${task.status === 'Completed' ? 'opacity-70 bg-gray-50' : 'bg-white'}`}>
                      <td className="px-6 py-4">
                        <p className={`text-sm font-bold ${task.status === 'Completed' ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                          {task.title}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 flex items-center gap-1">
                        {task.due}
                      </td>
                      <td className="px-6 py-4">
                        <select 
                          value={task.status}
                          onChange={(e) => handleStatusChange(task.id, e.target.value)}
                          className={`text-sm font-medium border rounded-lg px-2 py-1 outline-none cursor-pointer ${
                            task.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-200 focus:ring-green-500' :
                            task.status === 'Pending' ? 'bg-orange-50 text-orange-700 border-orange-200 focus:ring-orange-500' :
                            'bg-gray-100 text-gray-700 border-gray-300 focus:ring-gray-500'
                          }`}
                        >
                          <option value="Not Started">Not Started</option>
                          <option value="Pending">Pending</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={() => removeTask(task.id)}
                          className="text-gray-400 hover:text-primary transition-colors p-1.5 rounded-md hover:bg-red-50"
                          title="Remove Task"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {tasks.length === 0 && (
                    <tr>
                      <td colSpan="4" className="px-6 py-12 text-center text-gray-500 text-sm">
                        You have no tasks in the queue.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      )}

      {/* --- ADD NEW TASK OVERLAY/MODAL --- */}
      {isAddTaskOpen && (
        <div className="fixed inset-0 bg-black/40 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all border border-gray-200">
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-900 text-md">Add Workspace Task</h3>
              <button 
                onClick={() => setIsAddTaskOpen(false)}
                className="text-gray-400 hover:text-gray-900 transition-colors"
                type="button"
              >
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleAddTask} className="p-5">
              <div className="space-y-4">
                <div>
                  <label htmlFor="taskName" className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">Description</label>
                  <input
                    id="taskName"
                    type="text"
                    autoFocus
                    required
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder="e.g. Prepare Q2 Report..."
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                  />
                </div>
                <div>
                  <label htmlFor="taskDue" className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">Due Date</label>
                  <input
                    id="taskDue"
                    type="date"
                    required
                    value={newTaskDue}
                    onChange={(e) => setNewTaskDue(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow text-gray-700"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
                >
                  Insert Task into Manager
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default DashboardPage;
