import React, { useState } from 'react';
import { FileText, Download, FileSpreadsheet, FileArchive, CheckCircle, Clock, Send, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReportsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('my_reports');

  // New Submission Form State
  const [reportType, setReportType] = useState('Weekly');
  const [reportTitle, setReportTitle] = useState('');
  const [reportSubmissions, setReportSubmissions] = useState([
    { id: 1, type: 'Weekly', title: 'WK3 Operations Sync', date: '2026-04-12', status: 'Approved' },
    { id: 2, type: 'Monthly', title: 'March Region Financials', date: '2026-04-01', status: 'Pending Review' }
  ]);

  // Team Review Queue Mock (Subordinates submissions)
  const [teamQueue, setTeamQueue] = useState([
    { id: 101, employee: 'Mary Phiri', role: 'HR Manager', type: 'Weekly', title: 'Staffing Status Update', date: 'Today' },
    { id: 102, employee: 'Paul Chanda', role: 'Sales Lead', type: 'Quarterly', title: 'Q1 DRC Revenue', date: 'Yesterday' }
  ]);

  const handleSubitReport = (e) => {
    e.preventDefault();
    if (!reportTitle.trim()) return;

    setReportSubmissions([
      { id: Date.now(), type: reportType, title: reportTitle, date: 'Today', status: 'Pending Review' },
      ...reportSubmissions
    ]);
    setReportTitle('');
  };

  const handleApproveEscalate = (id) => {
    setTeamQueue(teamQueue.filter(item => item.id !== id));
    alert('Report Approved and Escalated up the Hierarchy!');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto antialiased">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Reporting & Analytics Platform</h1>
        <p className="text-gray-500 text-sm mt-1">Submit reports, review team analytics, or generate global exports.</p>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-6 -mb-px">
          {['my_reports', 'team_reviews', 'exports'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab === 'my_reports' && 'My Submissions'}
              {tab === 'team_reviews' && 'Team Reviews (Manager)'}
              {tab === 'exports' && 'Global Export Hub'}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-6">
        {/* --- TAB: MY SUBMISSIONS --- */}
        {activeTab === 'my_reports' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 bg-white border border-gray-200 rounded-xl shadow-sm p-6 h-fit">
              <h2 className="text-lg font-bold text-gray-900 mb-4 border-l-4 border-primary pl-3">Submit New Report</h2>
              <form onSubmit={handleSubitReport} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Periodicity</label>
                  <select 
                    value={reportType}
                    onChange={(e) => setReportType(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none"
                  >
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Yearly</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Report Title</label>
                  <input 
                    type="text" 
                    required
                    value={reportTitle}
                    onChange={(e) => setReportTitle(e.target.value)}
                    placeholder="e.g. Q2 Operations Summary"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Attachment</label>
                  <input type="file" className="text-sm text-gray-500 w-full file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-primary hover:file:bg-red-100 transition-colors cursor-pointer border border-dashed border-gray-300 rounded-lg p-2" />
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-black text-white py-2 rounded-lg font-medium shadow-sm flex items-center justify-center gap-2 transition-colors">
                  <Send size={16} /> Route to Direct Supervisor
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
              <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                <h2 className="text-lg font-bold text-gray-900 border-l-4 border-gray-400 pl-3">History & Status</h2>
              </div>
              <ul className="divide-y divide-gray-100 flex-1">
                {reportSubmissions.map(rep => (
                  <li key={rep.id} className="p-5 flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] uppercase font-bold bg-gray-200 text-gray-700 px-2 py-0.5 rounded">{rep.type}</span>
                        <h3 className="font-bold text-gray-900 text-sm">{rep.title}</h3>
                      </div>
                      <p className="text-xs text-gray-500 flex items-center gap-1"><Clock size={12} /> Submitted: {rep.date}</p>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${
                      rep.status === 'Approved' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-orange-50 text-orange-700 border-orange-200'
                    }`}>
                      {rep.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* --- TAB: TEAM REVIEWS --- */}
        {activeTab === 'team_reviews' && (
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold text-gray-900 border-l-4 border-primary pl-3">Hierarchy Inbox</h2>
                <p className="text-sm text-gray-500 mt-1 pl-4">Review periodic reports submitted by your direct subordinates.</p>
              </div>
              <div className="bg-white border border-gray-300 text-xs font-bold px-3 py-1.5 rounded shadow-sm text-gray-600">
                Level: Regional Director
              </div>
            </div>
            
            <div className="p-0">
              {teamQueue.length === 0 ? (
                <div className="p-12 text-center text-gray-500">No pending reports to review from your subordinates.</div>
              ) : (
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-gray-50/50 text-gray-500 text-xs uppercase tracking-wider font-semibold border-b border-gray-200">
                      <th className="px-6 py-4">Subordinate</th>
                      <th className="px-6 py-4">Report Details</th>
                      <th className="px-6 py-4">Submission Date</th>
                      <th className="px-6 py-4 text-right">Approval Routing</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {teamQueue.map(item => (
                      <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <p className="text-sm font-bold text-gray-900">{item.employee}</p>
                          <p className="text-xs text-gray-500">{item.role}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] uppercase font-bold bg-primary/10 text-primary px-2 py-0.5 rounded border border-primary/20">{item.type}</span>
                            <span className="text-sm font-bold text-gray-800">{item.title}</span>
                          </div>
                          <button className="text-xs flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium">
                            <FileText size={12} /> View Attached Document
                          </button>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.date}</td>
                        <td className="px-6 py-4 text-right flex justify-end gap-2">
                          <button 
                            onClick={() => handleApproveEscalate(item.id)}
                            className="bg-green-50 text-green-700 hover:bg-green-100 border border-green-200 px-3 py-1.5 rounded text-xs font-bold transition-colors flex items-center gap-1"
                          >
                            <ShieldCheck size={14} /> Review & Escalate Out
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}

        {/* --- TAB: EXPORTS HUB --- */}
        {activeTab === 'exports' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Connection to Attendance Logic */}
            <div className="bg-white border-2 border-primary/20 rounded-xl p-5 flex items-start justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-bl-lg">Live Biometric Integration</div>
              <div className="flex gap-4 mt-2">
                <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center border border-green-100 shrink-0">
                  <FileSpreadsheet size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-900">Attendance Log Export</h3>
                  <p className="text-xs text-gray-500 mt-1">Export comprehensive biometric data including Present, Absent, and On Leave statuses directly into Excel.</p>
                  <div className="mt-4 flex gap-2">
                    <button className="text-xs font-semibold bg-green-50 text-green-700 hover:bg-green-100 px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 border border-green-200">
                      <Download size={14} /> Pull Excel (.xlsx)
                    </button>
                    <button 
                      onClick={() => navigate('/attendance')}
                      className="text-xs font-semibold bg-gray-50 text-gray-600 hover:bg-gray-100 px-3 py-1.5 rounded transition-colors border border-gray-200"
                    >
                      View Live Log
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Reports */}
            {[
              { title: "Employee List Directory", desc: "Full breakdown of active, leave, and probation staff.", icon: <FileText size={20} />, col: 'text-primary bg-red-50 border-red-100' },
              { title: "Birthday/Holiday Tracker", desc: "Monthly breakdown of upcoming staff birthdays and mapped regional holidays.", icon: <FileArchive size={20} />, col: 'text-gray-700 bg-gray-100 border-gray-200' },
              { title: "Department Metrics", desc: "Headcount and hierarchy mappings per region.", icon: <FileText size={20} />, col: 'text-primary bg-red-50 border-red-100' }
            ].map((report, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5 flex items-start justify-between shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center border shrink-0 ${report.col}`}>
                    {report.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-900">{report.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{report.desc}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-black p-2 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
                  <Download size={16} />
                </button>
              </div>
            ))}

          </div>
        )}
      </div>

    </div>
  );
};

export default ReportsPage;
