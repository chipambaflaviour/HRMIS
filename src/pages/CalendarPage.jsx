import React from 'react';
import CalendarView from '../components/calendar/CalendarView';

const CalendarPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8 border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-secondary mb-2">Corporate Calendar</h1>
        <p className="text-gray-500">Track regional public holidays and employee birthdays.</p>
      </div>
      
      <CalendarView />
    </div>
  );
};

export default CalendarPage;
