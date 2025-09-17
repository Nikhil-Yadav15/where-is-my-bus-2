import React, { useEffect, useState } from 'react';
import { Bus, Users, AlertTriangle, Clock } from 'lucide-react';
import KPICard from '../components/KPICard';
import DataTable from '../components/DataTable';
import ChartCard from '../components/ChartCard';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { adminData } from '../data/mockData';

const AdminDashboard = () => {
  const [data, setData] = useState(adminData);

  // Placeholder function for future API integration
  const fetchData = async () => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/admin/dashboard');
    // const data = await response.json();
    setData(adminData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fleetColumns = [
    { header: 'Plate No', accessor: 'plateNo', type: 'text' },
    { header: 'Condition', accessor: 'condition', type: 'badge' },
    { header: 'Last Maintenance', accessor: 'lastMaintenance', type: 'text' },
    { header: 'WiFi', accessor: 'wifi', type: 'boolean' },
    { header: 'AC', accessor: 'ac', type: 'boolean' },
    { header: 'Rating', accessor: 'rating', type: 'rating' }
  ];

  const routeColumns = [
    { header: 'Route Name', accessor: 'name', type: 'text' },
    { header: 'Distance', accessor: 'distance', type: 'text' },
    { header: 'Fare', accessor: 'fare', type: 'text' },
    { header: 'Status', accessor: 'status', type: 'badge' }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-blue-500 bg-blue-50';
      default: return 'border-l-slate-500 bg-slate-50';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h1>
        <div className="text-sm text-slate-500 dark:text-slate-400">Last updated: {new Date().toLocaleTimeString()}</div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Active Buses"
          value={data.kpis.totalActiveBuses}
          icon={Bus}
          trend="up"
          trendValue="5.2%"
          color="text-slate-900"
        />
        <KPICard
          title="On-Time Performance"
          value={`${data.kpis.onTimePercentage}%`}
          icon={Clock}
          trend="up"
          trendValue="2.1%"
          color="text-emerald-600"
        />
        <KPICard
          title="Delayed Trips"
          value={data.kpis.delayedTrips}
          icon={AlertTriangle}
          trend="down"
          trendValue="1.8%"
          color="text-red-500"
        />
        <KPICard
          title="Active Drivers"
          value={data.kpis.activeDrivers}
          icon={Users}
          trend="up"
          trendValue="3.4%"
          color="text-slate-900"
        />
      </div>

      {/* Live Operations Map Placeholder */}
      <Card className="bg-white border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">Live Bus Locations</h3>
        </div>
        <div className="p-6">
          <div className="h-64 bg-slate-100 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300"></div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-slate-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Bus className="w-8 h-8 text-white" />
              </div>
              <p className="text-slate-600 font-medium">Interactive Map Component</p>
              <p className="text-sm text-slate-500 mt-1">
                Showing {data.busLocations.length} active buses
              </p>
            </div>
            {/* Mock bus location indicators */}
            <div className="absolute top-4 left-8 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <div className="absolute top-12 right-16 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 left-1/3 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-16 right-8 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </Card>

      {/* Fleet & Routes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DataTable
          title="Fleet Management"
          data={data.fleet}
          columns={fleetColumns}
          actions={true}
        />
        <DataTable
          title="Active Routes"
          data={data.routes}
          columns={routeColumns}
          actions={true}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Complaints by Type"
          data={data.complaints}
          type="pie"
          colors={['#0f172a', '#475569', '#64748b']}
        />
        <ChartCard
          title="Performance Metrics"
          data={[
            { name: 'On-Time %', value: data.kpis.onTimePercentage },
            { name: 'Fleet Utilization', value: 78.5 },
            { name: 'Customer Satisfaction', value: 85.2 }
          ]}
          type="bar"
          colors={['#0f172a']}
        />
      </div>

      {/* Alerts & Notifications */}
      <Card className="bg-white border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">Active Alerts</h3>
        </div>
        <div className="p-6 space-y-4">
          {data.alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-lg border-l-4 ${getSeverityColor(alert.severity)}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-medium text-slate-900">{alert.message}</p>
                  <p className="text-sm text-slate-500 mt-1">{alert.timestamp}</p>
                </div>
                <Badge variant={alert.severity === 'high' ? 'destructive' : alert.severity === 'medium' ? 'outline' : 'secondary'}>
                  {alert.severity.toUpperCase()}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AdminDashboard;