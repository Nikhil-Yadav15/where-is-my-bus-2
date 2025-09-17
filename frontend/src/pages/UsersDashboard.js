import React, { useEffect, useState } from 'react';
import { Users, UserPlus, Eye, Globe } from 'lucide-react';
import KPICard from '../components/KPICard';
import DataTable from '../components/DataTable';
import ChartCard from '../components/ChartCard';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { usersData } from '../data/mockData';

const UsersDashboard = () => {
  const [data, setData] = useState(usersData);

  // Placeholder function for future API integration
  const fetchData = async () => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/users/dashboard');
    // const data = await response.json();
    setData(usersData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const routeColumns = [
    { header: 'Route Name', accessor: 'route', type: 'text' },
    { header: 'Usage Count', accessor: 'usage', type: 'text' },
    { header: 'Avg Fare', accessor: 'avgFare', type: 'text' }
  ];

  const feedbackColumns = [
    { header: 'User', accessor: 'user', type: 'text' },
    { header: 'Comment', accessor: 'comment', type: 'text' },
    { header: 'Rating', accessor: 'rating', type: 'rating' },
    { header: 'Date', accessor: 'date', type: 'text' }
  ];

  const getAchievementIcon = (badge) => {
    const icons = {
      'Carbon Champion': '🌱',
      'Sustainability Star': '⭐',
      'Route Master': '🗺️',
      'Green Guardian': '🛡️',
      'Eco Warrior': '⚔️'
    };
    return icons[badge] || '🏆';
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Users Dashboard</h1>
        <div className="text-sm text-slate-500 dark:text-slate-400">Last updated: {new Date().toLocaleTimeString()}</div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Users"
          value={data.kpis.totalUsers}
          icon={Users}
          trend="up"
          trendValue="8.2%"
          color="text-slate-900"
        />
        <KPICard
          title="New Signups"
          value={data.kpis.newSignups}
          icon={UserPlus}
          trend="up"
          trendValue="12.5%"
          color="text-emerald-600"
        />
        <KPICard
          title="Active Users"
          value={data.kpis.activeUsers}
          icon={Eye}
          trend="up"
          trendValue="5.8%"
          color="text-blue-600"
        />
        <KPICard
          title="Visually Impaired"
          value={`${data.kpis.visuallyImpairedPercentage}%`}
          icon={Globe}
          trend="up"
          trendValue="0.3%"
          color="text-purple-600"
        />
      </div>

      {/* Language Preferences & Top Routes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Users by Language"
          data={data.languagePreferences.map(lang => ({ name: lang.language, value: lang.count }))}
          type="pie"
          colors={['#0f172a', '#475569', '#64748b', '#94a3b8']}
        />
        <DataTable
          title="Top 5 Routes"
          data={data.topRoutes}
          columns={routeColumns}
        />
      </div>

      {/* Gamification Leaderboard */}
      <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Carbon Points Leaderboard</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {data.leaderboard.map((user) => (
              <div key={user.rank} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                    user.rank === 1 ? 'bg-yellow-500' : user.rank === 2 ? 'bg-slate-400' : user.rank === 3 ? 'bg-amber-600' : 'bg-slate-600'
                  }`}>
                    {user.rank}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{user.username}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{user.badge}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{getAchievementIcon(user.badge)}</span>
                  <span className="font-bold text-emerald-600">{user.points} pts</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* User Ratings & Journey Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Average Ratings by Category"
          data={data.ratings.map(rating => ({ name: rating.category, value: rating.avgRating }))}
          type="bar"
          colors={['#0f172a']}
        />
        <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Achievements Gallery</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {['🌱', '⭐', '🗺️', '🛡️', '⚔️', '🏆', '🚌', '💚', '🌍', '⚡'].map((icon, index) => (
                <div key={index} className="aspect-square bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-2xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors cursor-pointer">
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Feedback */}
      <DataTable
        title="Recent User Feedback"
        data={data.recentFeedback}
        columns={feedbackColumns}
        actions={true}
      />

      {/* User Notifications */}
      <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">User Notifications</h3>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            {[
              { title: 'Welcome Package Sent', priority: 'High', status: 'Delivered' },
              { title: 'Route Update Notification', priority: 'Medium', status: 'Pending' },
              { title: 'Maintenance Alert', priority: 'Low', status: 'Scheduled' }
            ].map((notification, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{notification.title}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Priority: {notification.priority}</p>
                </div>
                <Badge variant={notification.status === 'Delivered' ? 'default' : notification.status === 'Pending' ? 'outline' : 'secondary'}>
                  {notification.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UsersDashboard;