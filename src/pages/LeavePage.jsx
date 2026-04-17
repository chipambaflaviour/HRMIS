import React from 'react';
import { Plane } from 'lucide-react';

const LeavePage = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leave Management</h1>
          <p className="text-gray-500 text-sm mt-1">Review pending leave applications and balances.</p>
        </div>
        <button className="bg-primary hover:bg-black text-white px-4 py-2 rounded-lg font-medium shadow-sm transition-colors">
          Apply for Leave
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-12 flex flex-col items-center justify-center min-h-[40vh]">
        <div className="w-16 h-16 bg-red-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-100">
          <Plane size={32} />
        </div>
        <h2 className="text-lg font-bold text-gray-900">Module Pending Supabase Auth</h2>
        <p className="text-gray-500 text-center max-w-md mt-2">Leave logs and approval workflows require specific User IDs and Role-Based Access Controls to be established.</p>
      </div>
    </div>
  );
};

export default LeavePage;
