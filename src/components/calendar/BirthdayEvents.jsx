import { parseISO, getMonth, getDate } from 'date-fns';

/**
 * Responsibilities:
 * - Format birthday data into FullCalendar events
 * - Return events array
 */
export const formatBirthdayEvents = (employees) => {
  const currentYear = new Date().getFullYear();
  const events = [];

  employees.forEach(emp => {
    if (!emp.date_of_birth) return;

    try {
      const birthDate = parseISO(emp.date_of_birth);
      const month = String(getMonth(birthDate) + 1).padStart(2, '0');
      const day = String(getDate(birthDate)).padStart(2, '0');
      
      // Generate recurring yearly event by spanning a few years
      for (let offset = -1; offset <= 2; offset++) {
        const eventYear = currentYear + offset;
        events.push({
          id: `bday-${emp.id}-${eventYear}`,
          title: `🎂 ${emp.first_name} ${emp.last_name} Birthday`,
          date: `${eventYear}-${month}-${day}`,
          allDay: true,
          display: 'block',
          backgroundColor: '#DC2626', // Axis Red
          textColor: '#FFFFFF',       // Axis White
          borderColor: '#DC2626',
        });
      }
    } catch (e) {
      console.error('Invalid date for employee', emp.id);
    }
  });

  return events;
};
