// Mock data for all dashboards
export const adminData = {
  kpis: {
    totalActiveBuses: 125,
    onTimePercentage: 87.5,
    delayedTrips: 23,
    totalDrivers: 180,
    activeDrivers: 145,
    licenseExpiringSoon: 12
  },
  busLocations: [
    { id: 1, lat: 37.7749, lng: -122.4194, status: 'on-time', route: 'Route A' },
    { id: 2, lat: 37.7849, lng: -122.4094, status: 'delayed', route: 'Route B' },
    { id: 3, lat: 37.7649, lng: -122.4294, status: 'on-time', route: 'Route C' },
    { id: 4, lat: 37.7549, lng: -122.4394, status: 'maintenance', route: 'Route D' }
  ],
  fleet: [
    { plateNo: 'ABC-123', condition: 'Excellent', lastMaintenance: '2024-01-15', wifi: true, ac: true, rating: 4.8 },
    { plateNo: 'DEF-456', condition: 'Good', lastMaintenance: '2024-01-10', wifi: true, ac: false, rating: 4.2 },
    { plateNo: 'GHI-789', condition: 'Fair', lastMaintenance: '2024-01-05', wifi: false, ac: true, rating: 3.9 },
    { plateNo: 'JKL-012', condition: 'Poor', lastMaintenance: '2023-12-20', wifi: false, ac: false, rating: 3.1 }
  ],
  complaints: [
    { type: 'Safety', count: 15, percentage: 35 },
    { type: 'Delay', count: 20, percentage: 47 },
    { type: 'Cleanliness', count: 8, percentage: 18 }
  ],
  routes: [
    { id: 1, name: 'Downtown Express', distance: '15.2 km', fare: '$3.50', status: 'Active' },
    { id: 2, name: 'University Loop', distance: '8.7 km', fare: '$2.25', status: 'Active' },
    { id: 3, name: 'Airport Shuttle', distance: '22.1 km', fare: '$5.00', status: 'Active' }
  ],
  alerts: [
    { id: 1, message: 'Bus ABC-123 requires immediate maintenance', severity: 'high', timestamp: '2024-01-20 10:30' },
    { id: 2, message: 'Route B experiencing delays due to traffic', severity: 'medium', timestamp: '2024-01-20 11:15' },
    { id: 3, message: 'Driver license renewal reminder for 5 drivers', severity: 'low', timestamp: '2024-01-20 09:45' }
  ]
};

export const usersData = {
  kpis: {
    totalUsers: 25847,
    newSignups: 342,
    activeUsers: 18234,
    visuallyImpairedPercentage: 12.3
  },
  languagePreferences: [
    { language: 'English', count: 15420, percentage: 60 },
    { language: 'Spanish', count: 6461, percentage: 25 },
    { language: 'French', count: 2585, percentage: 10 },
    { language: 'Other', count: 1293, percentage: 5 }
  ],
  topRoutes: [
    { route: 'Downtown Express', usage: 8934, avgFare: 3.25 },
    { route: 'University Loop', usage: 6721, avgFare: 2.15 },
    { route: 'Airport Shuttle', usage: 4567, avgFare: 4.85 },
    { route: 'Business District', usage: 3892, avgFare: 2.95 },
    { route: 'Shopping Mall', usage: 2845, avgFare: 2.50 }
  ],
  leaderboard: [
    { rank: 1, username: 'EcoRider23', points: 2847, badge: 'Carbon Champion' },
    { rank: 2, username: 'GreenCommuter', points: 2653, badge: 'Sustainability Star' },
    { rank: 3, username: 'PublicTransitPro', points: 2341, badge: 'Route Master' },
    { rank: 4, username: 'CleanAirAdvocate', points: 2156, badge: 'Green Guardian' },
    { rank: 5, username: 'BusEnthusiast', points: 1987, badge: 'Eco Warrior' }
  ],
  ratings: [
    { category: 'Punctuality', avgRating: 4.2 },
    { category: 'Cleanliness', avgRating: 3.8 },
    { category: 'Driver', avgRating: 4.5 },
    { category: 'Conductor', avgRating: 4.1 }
  ],
  recentFeedback: [
    { user: 'User123', comment: 'Great service, very punctual!', rating: 5, date: '2024-01-20' },
    { user: 'Commuter456', comment: 'Bus was clean but slightly delayed', rating: 4, date: '2024-01-19' },
    { user: 'DailyRider', comment: 'Excellent driver, smooth journey', rating: 5, date: '2024-01-19' }
  ]
};

export const staffData = {
  kpis: {
    totalDrivers: 180,
    totalConductors: 165,
    activeStaff: 298,
    avgExperience: 7.2
  },
  licenseExpiry: [
    { name: 'John Smith', role: 'Driver', license: 'DL-2024-001', expiryDate: '2024-02-15', daysLeft: 26 },
    { name: 'Maria Garcia', role: 'Driver', license: 'DL-2024-002', expiryDate: '2024-02-28', daysLeft: 39 },
    { name: 'Robert Johnson', role: 'Driver', license: 'DL-2024-003', expiryDate: '2024-03-10', daysLeft: 50 }
  ],
  performanceData: [
    { month: 'Aug', drivers: 4.3, conductors: 4.1 },
    { month: 'Sep', drivers: 4.2, conductors: 4.2 },
    { month: 'Oct', drivers: 4.4, conductors: 4.0 },
    { month: 'Nov', drivers: 4.3, conductors: 4.3 },
    { month: 'Dec', drivers: 4.5, conductors: 4.2 },
    { month: 'Jan', drivers: 4.4, conductors: 4.4 }
  ],
  todayAssignments: [
    { busNo: 'ABC-123', route: 'Downtown Express', driver: 'John Smith', conductor: 'Mary Wilson', shift: '06:00-14:00' },
    { busNo: 'DEF-456', route: 'University Loop', driver: 'Carlos Rodriguez', conductor: 'Lisa Brown', shift: '14:00-22:00' },
    { busNo: 'GHI-789', route: 'Airport Shuttle', driver: 'David Lee', conductor: 'Anna Davis', shift: '22:00-06:00' }
  ],
  topPerformers: {
    drivers: [
      { name: 'Michael Chen', rating: 4.9, trips: 245 },
      { name: 'Sarah Johnson', rating: 4.8, trips: 238 },
      { name: 'Ahmed Hassan', rating: 4.7, trips: 251 }
    ],
    conductors: [
      { name: 'Emily Rodriguez', rating: 4.8, trips: 234 },
      { name: 'James Wilson', rating: 4.7, trips: 245 },
      { name: 'Sofia Martinez', rating: 4.6, trips: 229 }
    ]
  }
};