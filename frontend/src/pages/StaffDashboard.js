import React, { useEffect, useState } from 'react';
import { Users, Car, Clock, Award } from 'lucide-react';
import KPICard from '../components/KPICard';
import DataTable from '../components/DataTable';
import ChartCard from '../components/ChartCard';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { staffData } from '../data/mockData';

const StaffDashboard = () => {
  const [data, setData] = useState(staffData);

  // Placeholder function for future API integration
  const fetchData = async () => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/staff/dashboard');
    // const data = await response.json();
    setData(staffData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const licenseColumns = [
    { header: 'Name', accessor: 'name', type: 'text' },
    { header: 'Role', accessor: 'role', type: 'badge' },
    { header: 'License No', accessor: 'license', type: 'text' },
    { header: 'Expiry Date', accessor: 'expiryDate', type: 'text' },
    { header: 'Days Left', accessor: 'daysLeft', type: 'text' }
  ];

  const assignmentColumns = [
    { header: 'Bus No', accessor: 'busNo', type: 'text' },
    { header: 'Route', accessor: 'route', type: 'text' },
    { header: 'Driver', accessor: 'driver', type: 'text' },
    { header: 'Conductor', accessor: 'conductor', type: 'text' },
    { header: 'Shift', accessor: 'shift', type: 'text' }
  ];

  const getBadgeIcon = (badge) => {
    const icons = {
      'Safety Expert': '🛡️',
      'Route Master': '🗺️',
      'Customer Favorite': '❤️',
      'Punctuality Pro': '⏰',
      'Service Star': '⭐'
    };
    return icons[badge] || '🏆';
  };

  const getShiftColor = (shift) => {
    if (shift.includes('06:00')) return 'text-orange-600';
    if (shift.includes('14:00')) return 'text-blue-600';
    if (shift.includes('22:00')) return 'text-purple-600';
    return 'text-slate-600';
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Drivers & Conductors Dashboard</h1>
        <div className="text-sm text-slate-500 dark:text-slate-400">Last updated: {new Date().toLocaleTimeString()}</div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Drivers"
          value={data.kpis.totalDrivers}
          icon={Car}
          trend="up"
          trendValue="2.8%"
          color="text-slate-900"
        />
        <KPICard
          title="Total Conductors"
          value={data.kpis.totalConductors}
          icon={Users}
          trend="up"
          trendValue="1.5%"
          color="text-blue-600"
        />
        <KPICard
          title="Active Staff"
          value={data.kpis.activeStaff}
          icon={Clock}
          trend="up"
          trendValue="4.2%"
          color="text-emerald-600"
        />
        <KPICard
          title="Avg Experience"
          value={`${data.kpis.avgExperience} years`}
          icon={Award}
          trend="up"
          trendValue="0.3"
          color="text-purple-600"
        />
      </div>

      {/* Performance Chart & License Expiry */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Performance Ratings Trend"
          data={data.performanceData}
          type="line"
          colors={['#0f172a', '#475569']}
        />
        <DataTable
          title="License Expiry Monitor"
          data={data.licenseExpiry}
          columns={licenseColumns}
          actions={true}
        />
      </div>

      {/* Today's Assignments */}
      <DataTable
        title="Today's Bus Assignments"
        data={data.todayAssignments.map(assignment => ({
          ...assignment,
          shift: assignment.shift
        }))}
        columns={assignmentColumns}
        actions={true}
      />

      {/* Top Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Top Drivers</h3>
          </div>
          <div className="p-6 space-y-4">
            {data.topPerformers.drivers.map((driver, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                    index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-slate-400' : 'bg-amber-600'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{driver.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{driver.trips} trips completed</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-emerald-600">{driver.rating}</span>
                  <span className="text-yellow-500">★</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Top Conductors</h3>
          </div>
          <div className="p-6 space-y-4">
            {data.topPerformers.conductors.map((conductor, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                    index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-slate-400' : 'bg-amber-600'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{conductor.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{conductor.trips} trips completed</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-emerald-600">{conductor.rating}</span>
                  <span className="text-yellow-500">★</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recognition & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Achievement Badges</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {['🛡️', '🗺️', '❤️', '⏰', '⭐', '🏆', '🚌', '💪', '🎯', '⚡'].map((icon, index) => (
                <div key={index} className="aspect-square bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-2xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer">
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Staff Alerts</h3>
          </div>
          <div className="p-6 space-y-3">
            {[
              { type: 'License Expiry', count: 3, severity: 'high' },
              { type: 'Low Rating Alert', count: 2, severity: 'medium' },
              { type: 'Training Due', count: 5, severity: 'low' }
            ].map((alert, index) => (
              <div key={index} className={`p-3 rounded-lg border-l-4 ${
                alert.severity === 'high' ? 'border-l-red-500 bg-red-50 dark:bg-red-900 dark:bg-opacity-20' :
                alert.severity === 'medium' ? 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-20' :
                'border-l-blue-500 bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-900 dark:text-white">{alert.type}</span>
                  <Badge variant={alert.severity === 'high' ? 'destructive' : alert.severity === 'medium' ? 'outline' : 'secondary'}>
                    {alert.count} staff
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StaffDashboard;