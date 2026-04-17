import React from 'react';
import { Bell } from 'lucide-react';

const NotificationsPage = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">System Notifications</h1>
        <p className="text-gray-500 text-sm mt-1">Alerts, Birthdays, and Upcoming Public Holidays.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden divide-y divide-gray-100">
        <div className="p-4 flex gap-4 hover:bg-gray-50 transition-colors">
          <div className="w-10 h-10 rounded-full bg-red-50 text-primary flex items-center justify-center shrink-0">
            🎂
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-sm text-gray-900">John Banda's Birthday</h3>
              <span className="text-xs text-gray-400">2 hours ago</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Don't forget to send wishes to John in the Zambia HQ.</p>
          </div>
        </div>

        <div className="p-4 flex gap-4 hover:bg-gray-50 transition-colors">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0 border border-gray-300">
             🎊
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-sm text-gray-900">Upcoming Holiday: Labour Day</h3>
              <span className="text-xs text-gray-400">Yesterday</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Labour day is arriving on May 1st for Zambia.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
