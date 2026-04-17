/**
 * Responsibilities:
 * - Format holiday data into FullCalendar events
 * - Return events array
 */
export const formatHolidayEvents = (holidays) => {
  const currentYear = new Date().getFullYear();
  const events = [];

  holidays.forEach(holiday => {
    if (!holiday.holiday_date) return;

    // For recurring holidays, use the month and day to project into other years
    if (holiday.is_recurring) {
      const dateParts = holiday.holiday_date.split('-');
      if (dateParts.length === 3) {
        const month = dateParts[1];
        const day = dateParts[2];
        
        for (let offset = -1; offset <= 2; offset++) {
          const eventYear = currentYear + offset;
          events.push({
            id: `hol-${holiday.id}-${eventYear}`,
            title: `🎊 ${holiday.holiday_name} (${holiday.country})`,
            date: `${eventYear}-${month}-${day}`,
            allDay: true,
            display: 'block',
            backgroundColor: '#000000', // Axis Secondary (Black)
            textColor: '#FFFFFF',
            borderColor: '#000000',
          });
        }
      }
    } else {
      events.push({
        id: `hol-${holiday.id}`,
        title: `🎊 ${holiday.holiday_name} (${holiday.country})`,
        date: holiday.holiday_date,
        allDay: true,
        display: 'block',
        backgroundColor: '#000000',
        textColor: '#FFFFFF',
        borderColor: '#000000',
      });
    }
  });

  return events;
};
