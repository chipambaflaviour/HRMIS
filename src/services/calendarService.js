// Mock data for Birthdays and Holidays since we are working on frontend first.

export const fetchMockEmployees = async () => {
  return [
    { id: '1', first_name: 'John', last_name: 'Banda', date_of_birth: '1990-05-15' },
    { id: '2', first_name: 'Mary', last_name: 'Phiri', date_of_birth: '1985-04-18' }, // Tomorrow/today ish
    { id: '3', first_name: 'David', last_name: 'Mulenga', date_of_birth: '1992-04-20' },
  ];
};

export const fetchMockHolidays = async () => {
  const currentYear = new Date().getFullYear();
  return [
    { id: '1', holiday_name: 'Labour Day', holiday_date: `${currentYear}-05-01`, country: 'Zambia', is_recurring: true },
    { id: '2', holiday_name: 'Africa Freedom Day', holiday_date: `${currentYear}-05-25`, country: 'Zambia', is_recurring: true },
    { id: '3', holiday_name: 'Independence Day', holiday_date: `${currentYear}-10-24`, country: 'Zambia', is_recurring: true },
  ];
};
