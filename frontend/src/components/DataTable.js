import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const DataTable = ({ title, data, columns, actions = false }) => {
  const renderCellValue = (value, type) => {
    if (type === 'badge') {
      const getBadgeVariant = (value) => {
        const lowerValue = value.toLowerCase();
        if (lowerValue.includes('excellent') || lowerValue.includes('active')) return 'default';
        if (lowerValue.includes('good') || lowerValue.includes('on-time')) return 'secondary';
        if (lowerValue.includes('fair') || lowerValue.includes('delayed')) return 'outline';
        if (lowerValue.includes('poor') || lowerValue.includes('maintenance')) return 'destructive';
        return 'default';
      };
      
      return <Badge variant={getBadgeVariant(value)}>{value}</Badge>;
    }
    
    if (type === 'boolean') {
      return value ? (
        <span className="text-emerald-600 font-medium">✓</span>
      ) : (
        <span className="text-slate-400">✗</span>
      );
    }
    
    if (type === 'rating') {
      return (
        <div className="flex items-center space-x-1">
          <span className="font-medium">{value}</span>
          <span className="text-yellow-500">★</span>
        </div>
      );
    }
    
    return value;
  };

  return (
    <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 dark:bg-slate-700">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                >
                  {column.header}
                </th>
              ))}
              {actions && (
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-150">
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-slate-100">
                    {renderCellValue(row[column.accessor], column.type)}
                  </td>
                ))}
                {actions && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-medium">
                      View Details
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default DataTable;