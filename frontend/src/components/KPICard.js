import React from 'react';
import { Card } from './ui/card';

const KPICard = ({ title, value, icon: Icon, trend, trendValue, color = 'text-slate-900' }) => {
  const getTrendColor = (trend) => {
    if (trend === 'up') return 'text-emerald-600';
    if (trend === 'down') return 'text-red-500';
    return 'text-slate-500';
  };

  const formatValue = (value) => {
    if (typeof value === 'number') {
      if (value >= 1000000) {
        return `${(value / 1000000).toFixed(1)}M`;
      } else if (value >= 1000) {
        return `${(value / 1000).toFixed(1)}K`;
      }
      return value.toLocaleString();
    }
    return value;
  };

  return (
    <Card className="p-6 bg-white border border-slate-200 hover:shadow-lg transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
          <p className={`text-2xl font-bold ${color} mb-2`}>
            {formatValue(value)}
          </p>
          {trend && trendValue && (
            <div className="flex items-center space-x-1">
              <span className={`text-sm font-medium ${getTrendColor(trend)}`}>
                {trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→'} {trendValue}
              </span>
              <span className="text-xs text-slate-400">vs last month</span>
            </div>
          )}
        </div>
        {Icon && (
          <div className="p-3 bg-slate-50 rounded-lg">
            <Icon className="w-6 h-6 text-slate-600" />
          </div>
        )}
      </div>
    </Card>
  );
};

export default KPICard;