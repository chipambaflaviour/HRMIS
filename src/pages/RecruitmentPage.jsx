import React from 'react';
import { Briefcase } from 'lucide-react';

const RecruitmentPage = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Recruitment & ATS</h1>
        <p className="text-gray-500 text-sm mt-1">Track applicants, interview schedules, and onboarding.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-12 flex flex-col items-center justify-center min-h-[40vh]">
        <Briefcase size={48} className="text-gray-300 mb-4" />
        <h2 className="text-lg font-bold text-gray-900">ATS Module Setup</h2>
      </div>
    </div>
  );
};

export default RecruitmentPage;
