import React from 'react';
import { Brain, BarChart3, GitCompare, Search, Zap } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  comparisonCount: number;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange, comparisonCount }) => {
  const tabs = [
    { id: 'catalog', label: 'Service Catalog', icon: Search },
    { id: 'dashboard', label: 'Analytics Dashboard', icon: BarChart3 },
    { id: 'comparison', label: 'Compare Services', icon: GitCompare, badge: comparisonCount }
  ];

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">GenAI Platform</h1>
              <p className="text-sm text-gray-600 font-medium">Developer Product Catalogue</p>
            </div>
            <div className="hidden md:flex items-center space-x-2 ml-4">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-xs font-semibold text-gray-700 bg-yellow-100 px-2 py-1 rounded-full">
                8 Active Services
              </span>
            </div>
          </div>
          
          <nav className="flex space-x-2">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`
                    relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105
                    ${activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }
                  `}
                >
                  <div className="flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                    {tab.badge !== undefined && tab.badge > 0 && (
                      <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full animate-pulse">
                        {tab.badge}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};