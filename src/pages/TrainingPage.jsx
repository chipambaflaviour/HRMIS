import React from 'react';
import { GraduationCap } from 'lucide-react';

const TrainingPage = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Training Calendar</h1>
        <p className="text-gray-500 text-sm mt-1">Track employee compliance and upskilling programs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                <GraduationCap size={20} />
              </div>
              <span className="bg-yellow-50 text-yellow-700 text-xs px-2 py-1 rounded font-medium border border-yellow-200">Scheduled</span>
            </div>
            <h3 className="font-bold text-gray-900">Cybersecurity Q{i}</h3>
            <p className="text-sm text-gray-500 mt-1">Mandatory compliance training for all regional staff.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingPage;
