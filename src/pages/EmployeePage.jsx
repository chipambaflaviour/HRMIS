import React from 'react';
import { Search, Plus, MoreVertical } from 'lucide-react';

const mockEmployees = [
  { id: 'EMP-001', name: 'John Banda', role: 'Regional Director', dept: 'Operations', country: 'Zambia', status: 'Active' },
  { id: 'EMP-002', name: 'Mary Phiri', role: 'HR Manager', dept: 'Human Resources', country: 'Zambia', status: 'Active' },
  { id: 'EMP-003', name: 'James Mulenga', role: 'IT Support', dept: 'Information Tech', country: 'Angola', status: 'On Leave' },
  { id: 'EMP-004', name: 'Sarah Musonda', role: 'Accountant', dept: 'Finance', country: 'Mozambique', status: 'Active' },
  { id: 'EMP-005', name: 'Paul Chanda', role: 'Sales Lead', dept: 'Sales', country: 'DRC', status: 'Probation' },
];

const EmployeePage = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto antialiased">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Employee Management</h1>
          <p className="text-gray-500 text-sm mt-1">Directly manage company staff and roles.</p>
        </div>
        <button className="bg-primary hover:bg-black text-white px-4 py-2 flex items-center gap-2 rounded-lg font-medium transition-colors shadow-sm">
          <Plus size={18} />
          Add Employee
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 justify-between bg-gray-50/50">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search employees..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 text-sm focus:outline-none">
              <option>All Regions</option>
              <option>Zambia</option>
              <option>Mozambique</option>
              <option>Angola</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider font-semibold border-b border-gray-200">
                <th className="px-6 py-4">Employee ID</th>
                <th className="px-6 py-4">Name & Role</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Country</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {mockEmployees.map((emp) => (
                <tr key={emp.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{emp.id}</td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-gray-900">{emp.name}</p>
                    <p className="text-xs text-gray-500">{emp.role}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{emp.dept}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${emp.country === 'Zambia' ? 'bg-primary' : 'bg-gray-400'}`}></span>
                      {emp.country}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                      ${emp.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200' : 
                        emp.status === 'On Leave' ? 'bg-orange-50 text-orange-700 border-orange-200' : 
                        'bg-blue-50 text-blue-700 border-blue-200'}
                    `}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-primary transition-colors p-1 rounded-md hover:bg-red-50 opacity-0 group-hover:opacity-100">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
