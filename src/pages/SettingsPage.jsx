import React from 'react';
import { Settings } from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Regional Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Configure multi-country logic, holidays, and app preferences.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 border-l-4 border-primary pl-3">Active Countries</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Zambia', 'Mozambique', 'South Sudan', 'Angola', 'DRC'].map(country => (
              <span key={country} className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium text-gray-700">
                {country}
              </span>
            ))}
            <button className="px-3 py-1 bg-white border border-dashed border-gray-300 rounded-full text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-colors">
              + Add Region
            </button>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-lg font-bold text-gray-900 border-l-4 border-primary pl-3 mb-4">Holiday Management</h2>
          <p className="text-sm text-gray-500 mb-4">You can set up public holidays in the Database (`PublicHolidays` table) using Supabase. These will dynamically pipe into the Calendar view per assigned region.</p>
          <button className="bg-primary hover:bg-black text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
            Manage Holiday Mappings
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
