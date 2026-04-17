import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useCalendarEvents } from '../../hooks/useCalendarEvents';

const CalendarView = () => {
  const { events, loading, error } = useCalendarEvents();

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center bg-gray-50 border border-gray-200 rounded-lg">
        <div className="text-gray-500 font-medium">Loading calendar events...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-600 border border-red-200 rounded-lg">
        <h3 className="font-bold">Error loading calendar</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="mb-6 flex gap-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-primary rounded"></div>
          <span className="text-sm font-medium">Birthdays</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-secondary rounded"></div>
          <span className="text-sm font-medium">Public Holidays</span>
        </div>
      </div>
      
      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek'
          }}
          height="auto"
          eventClick={(info) => {
            // Placeholder interaction
            console.log('Event clicked:', info.event.title);
          }}
        />
      </div>
    </div>
  );
};

export default CalendarView;
