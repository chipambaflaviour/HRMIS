import React from 'react';
import { Download, FileSpreadsheet, FileText, Search, Filter } from 'lucide-react';

const mockAttendanceLog = [
  { date: '2026-04-17', employee: 'John Banda', dept: 'Operations', status: 'Present', timeIn: '07:55 AM', remarks: 'On Time' },
  { date: '2026-04-17', employee: 'Mary Phiri', dept: 'Human Resources', status: 'Present', timeIn: '08:15 AM', remarks: 'Late' },
  { date: '2026-04-17', employee: 'James Mulenga', dept: 'IT Support', status: 'Absent', timeIn: '--:--', remarks: 'No Call No Show' },
  { date: '2026-04-17', employee: 'Paul Chanda', dept: 'Sales', status: 'On Leave', timeIn: '--:--', remarks: 'Approved Annual Leave' },
  { date: '2026-04-16', employee: 'John Banda', dept: 'Operations', status: 'Present', timeIn: '08:00 AM', remarks: 'On Time' },
];

const AttendancePage = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto antialiased">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Attendance Log</h1>
          <p className="text-gray-500 text-sm mt-1">Read-only Biometric integration logs (Present, Absent, Leave).</p>
        </div>
        
        {/* Export Utilities */}
        <div className="flex flex-wrap items-center gap-2">
          <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium shadow-sm transition-colors text-sm">
            <FileSpreadsheet size={16} className="text-green-600" />
            Export Excel
          </button>
          <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium shadow-sm transition-colors text-sm">
            <FileText size={16} className="text-red-500" />
            Export PDF
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
        {/* Filter Bar */}
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 justify-between bg-gray-50/50">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search employee logs..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 bg-white border border-gray-300 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-gray-900 transition-colors shadow-sm">
              <Filter size={16} /> Filters
            </button>
          </div>
        </div>

        {/* Attendance Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-gray-100/50 text-gray-600 text-xs uppercase tracking-wider font-semibold border-b border-gray-200">
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Biometric Status</th>
                <th className="px-6 py-4">Time In</th>
                <th className="px-6 py-4">Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {mockAttendanceLog.map((log, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4 text-sm text-gray-600 font-medium whitespace-nowrap">{log.date}</td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-gray-900">{log.employee}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{log.dept}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold border
                      ${log.status === 'Present' ? 'bg-green-50 text-green-700 border-green-200' : 
                        log.status === 'Absent' ? 'bg-red-50 text-red-700 border-red-200' : 
                        'bg-blue-50 text-blue-700 border-blue-200'}
                    `}>
                      {log.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-gray-600">{log.timeIn}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 italic">{log.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;
