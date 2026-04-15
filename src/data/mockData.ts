export const employees = [
  { id: 1, name: "Alice Johnson", position: "Regional Manager", department: "Management", email: "alice.j@example.com", status: "Active" },
  { id: 2, name: "Robert Smith", position: "Country Manager", department: "Management", email: "robert.s@example.com", status: "Active" },
  { id: 3, name: "Emily Chen", position: "HR Director", department: "Human Resources", email: "emily.c@example.com", status: "Active" },
  { id: 4, name: "Michael Chang", position: "Finance Head", department: "Finance", email: "michael.c@example.com", status: "On Leave" },
  { id: 5, name: "Sarah Williams", position: "IT Manager", department: "IT", email: "sarah.w@example.com", status: "Active" },
  { id: 6, name: "David Brown", position: "Operations Manager", department: "Operations", email: "david.b@example.com", status: "Active" },
  { id: 7, name: "Jessica Davis", position: "HR Specialist", department: "Human Resources", email: "jessica.d@example.com", status: "Active" },
  { id: 8, name: "Daniel Miller", position: "Software Engineer", department: "IT", email: "daniel.m@example.com", status: "Active" },
  { id: 9, name: "Laura Wilson", position: "Financial Analyst", department: "Finance", email: "laura.w@example.com", status: "Active" },
  { id: 10, name: "James Taylor", position: "Operations Coordinator", department: "Operations", email: "james.t@example.com", status: "Terminated" },
  { id: 11, name: "Sophia Anderson", position: "Recruiter", department: "Human Resources", email: "sophia.a@example.com", status: "Active" },
  { id: 12, name: "Matthew Thomas", position: "Systems Admin", department: "IT", email: "matthew.t@example.com", status: "Active" },
  { id: 13, name: "Olivia Martinez", position: "Accountant", department: "Finance", email: "olivia.m@example.com", status: "Active" },
  { id: 14, name: "Kevin Jackson", position: "Logistics Lead", department: "Operations", email: "kevin.j@example.com", status: "On Leave" },
  { id: 15, name: "Emma White", position: "HR Assistant", department: "Human Resources", email: "emma.w@example.com", status: "Active" },
  { id: 16, name: "Joshua Harris", position: "Frontend Developer", department: "IT", email: "joshua.h@example.com", status: "Active" },
  { id: 17, name: "Grace Martin", position: "Payroll Specialist", department: "Finance", email: "grace.m@example.com", status: "Active" },
  { id: 18, name: "William Thompson", position: "Facility Manager", department: "Operations", email: "william.t@example.com", status: "Active" },
  { id: 19, name: "Chloe Garcia", position: "Training Coordinator", department: "Human Resources", email: "chloe.g@example.com", status: "Active" },
  { id: 20, name: "Christopher Lee", position: "Data Analyst", department: "IT", email: "chris.l@example.com", status: "Active" }
];

export const leaveRequests = [
  { id: 1, employee: "Michael Chang", type: "Annual Leave", start: "2026-04-10", end: "2026-04-15", status: "Pending" },
  { id: 2, employee: "Kevin Jackson", type: "Sick Leave", start: "2026-04-08", end: "2026-04-10", status: "Approved" },
  { id: 3, employee: "Jessica Davis", type: "Maternity Leave", start: "2026-05-01", end: "2026-08-01", status: "Pending" },
  { id: 4, employee: "Daniel Miller", type: "Annual Leave", start: "2026-06-15", end: "2026-06-20", status: "Approved" },
  { id: 5, employee: "Sarah Williams", type: "Unpaid Leave", start: "2026-04-20", end: "2026-04-22", status: "Rejected" },
  { id: 6, employee: "Laura Wilson", type: "Personal Leave", start: "2026-05-10", end: "2026-05-12", status: "Pending" },
  { id: 7, employee: "James Taylor", type: "Sick Leave", start: "2026-03-01", end: "2026-03-05", status: "Approved" },
  { id: 8, employee: "Sophia Anderson", type: "Annual Leave", start: "2026-07-01", end: "2026-07-14", status: "Pending" },
  { id: 9, employee: "Emma White", type: "Study Leave", start: "2026-08-10", end: "2026-08-20", status: "Approved" },
  { id: 10, employee: "Matthew Thomas", type: "Annual Leave", start: "2026-09-05", end: "2026-09-10", status: "Pending" }
];

export const trainingSessions = [
  { id: 1, title: "Q2 Leadership Workshop", date: "2026-04-25", participants: 15, status: "Upcoming", type: "Soft Skills" },
  { id: 2, title: "Cybersecurity Awareness", date: "2026-05-05", participants: 120, status: "Upcoming", type: "Mandatory" },
  { id: 3, title: "New Employee Onboarding", date: "2026-04-12", participants: 8, status: "In Progress", type: "Orientation" },
  { id: 4, title: "Advanced React Patterns", date: "2026-06-10", participants: 25, status: "Upcoming", type: "Technical" },
  { id: 5, title: "Financial Compliance 2026", date: "2026-03-20", participants: 40, status: "Completed", type: "Compliance" }
];

export const notifications = [
  { id: 1, title: "Submit Monthly HR Report", time: "2 hours ago", type: "Reminder", priority: "High" },
  { id: 2, title: "Alice Johnson approved leave for Kevin Jackson", time: "4 hours ago", type: "System", priority: "Normal" },
  { id: 3, title: "System Maintenance Scheduled", time: "1 day ago", type: "Announcement", priority: "Normal" },
  { id: 4, title: "New Training Session Available: Agile Methodologies", time: "2 days ago", type: "Announcement", priority: "Low" },
  { id: 5, title: "Performance Reviews Due Next Week", time: "3 days ago", type: "Reminder", priority: "High" }
];

export const performanceRecords = [
  { id: 1, name: "Alice Johnson", score: 95, lastReview: "2026-01-15", status: "Excellent" },
  { id: 2, name: "Emily Chen", score: 88, lastReview: "2026-01-20", status: "Good" },
  { id: 3, name: "David Brown", score: 76, lastReview: "2026-02-10", status: "Average" },
  { id: 4, name: "Joshua Harris", score: 92, lastReview: "2026-01-25", status: "Excellent" },
  { id: 5, name: "Grace Martin", score: 85, lastReview: "2026-02-05", status: "Good" },
  { id: 6, name: "Chloe Garcia", score: 68, lastReview: "2026-03-15", status: "Needs Improvement" },
  { id: 7, name: "Robert Smith", score: 90, lastReview: "2026-01-18", status: "Excellent" },
  { id: 8, name: "Michael Chang", score: 82, lastReview: "2026-01-22", status: "Good" },
  { id: 9, name: "Sarah Williams", score: 89, lastReview: "2026-02-01", status: "Good" },
  { id: 10, name: "Daniel Miller", score: 79, lastReview: "2026-02-20", status: "Average" }
];

export const tasks = [
  { id: 1, title: "Review Q1 Performance Reports", status: "Pending", due: "2026-04-10" },
  { id: 2, title: "Approve pending leave requests", status: "In Progress", due: "2026-04-09" },
  { id: 3, title: "Update Employee Handbook", status: "Completed", due: "2026-04-05" },
  { id: 4, title: "Prepare for Board Meeting", status: "Pending", due: "2026-04-15" }
];
