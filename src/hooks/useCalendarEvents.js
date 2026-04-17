import { useState, useEffect } from 'react';
import { fetchMockEmployees, fetchMockHolidays } from '../services/calendarService';
import { formatBirthdayEvents } from '../components/calendar/BirthdayEvents';
import { formatHolidayEvents } from '../components/calendar/HolidayEvents';

export const useCalendarEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        // Fetch data
        const employees = await fetchMockEmployees();
        const holidays = await fetchMockHolidays();

        // Format to FullCalendar events
        const birthdayEvents = formatBirthdayEvents(employees);
        const holidayEvents = formatHolidayEvents(holidays);

        // Combine and set
        setEvents([...birthdayEvents, ...holidayEvents]);
      } catch (err) {
        setError(err.message || 'Failed to load events');
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  return { events, loading, error };
};
