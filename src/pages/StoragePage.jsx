import React from 'react';
import { Folder, UploadCloud } from 'lucide-react';

const StoragePage = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">File Storage</h1>
          <p className="text-gray-500 text-sm mt-1">Centralized document repository for company policies.</p>
        </div>
        <button className="bg-primary hover:bg-black text-white px-4 py-2 flex items-center gap-2 rounded-lg font-medium shadow-sm transition-colors">
          <UploadCloud size={18} /> Upload Document
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <ul className="divide-y divide-gray-100">
          {['Employee Handbook V2', 'Onboarding Requirements', 'Regional Tax Guidelines'].map((doc, i) => (
            <li key={i} className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="p-2 bg-red-50 text-primary rounded border border-red-100">
                <Folder size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-gray-900">{doc}.pdf</h3>
                <p className="text-xs text-gray-500">Added {i+1} days ago by HR Admin</p>
              </div>
              <div className="text-sm text-gray-400">{(i*1.5 + 0.4).toFixed(1)} MB</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StoragePage;
