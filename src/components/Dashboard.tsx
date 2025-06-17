import React from 'react';
import { BarChart3, TrendingUp, Users, Zap, Activity, Clock, Server, Globe, Shield, Cpu, AlertTriangle, CheckCircle } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const stats = [
    {
      label: 'Total API Calls',
      value: '523.8M',
      change: '+23.7%',
      trend: 'up',
      icon: Activity,
      color: 'blue',
      period: 'Last 30 days'
    },
    {
      label: 'Active Services',
      value: '8',
      change: '+1',
      trend: 'up',
      icon: Zap,
      color: 'emerald',
      period: 'Currently online'
    },
    {
      label: 'Avg Response Time',
      value: '247ms',
      change: '-12.3%',
      trend: 'down',
      icon: Clock,
      color: 'purple',
      period: 'Global average'
    },
    {
      label: 'Active Developers',
      value: '12.7K',
      change: '+34.2%',
      trend: 'up',
      icon: Users,
      color: 'orange',
      period: 'Monthly active'
    }
  ];

  const topServices = [
    { name: 'Hugging Face Inference API', requests: 156000000, uptime: 99.85, category: 'ML', cost: '$0.0002/req', growth: '+45%' },
    { name: 'Amazon Polly', requests: 89200000, uptime: 99.99, category: 'Speech', cost: '$0.004/req', growth: '+28%' },
    { name: 'Cohere Embed', requests: 78900000, uptime: 99.94, category: 'NLP', cost: '$0.0001/req', growth: '+67%' },
    { name: 'Gemini Pro', requests: 67800000, uptime: 99.89, category: 'NLP', cost: '$0.0005/req', growth: '+89%' },
    { name: 'GPT-4 Turbo', requests: 45200000, uptime: 99.95, category: 'NLP', cost: '$0.01/req', growth: '+156%' }
  ];

  const systemMetrics = [
    { label: 'Global Uptime', value: '99.94%', icon: Server, color: 'emerald', status: 'excellent' },
    { label: 'Data Centers', value: '15', icon: Globe, color: 'blue', status: 'operational' },
    { label: 'Security Score', value: 'A+', icon: Shield, color: 'purple', status: 'secure' },
    { label: 'Load Average', value: '67%', icon: Cpu, color: 'orange', status: 'normal' }
  ];

  const recentIncidents = [
    {
      service: 'Azure Computer Vision',
      issue: 'Elevated latency in West Europe',
      status: 'resolved',
      time: '2 hours ago',
      impact: 'Minor'
    },
    {
      service: 'ElevenLabs Speech',
      issue: 'Rate limiting adjustments',
      status: 'monitoring',
      time: '6 hours ago',
      impact: 'None'
    },
    {
      service: 'Claude 3 Opus',
      issue: 'Scheduled maintenance completed',
      status: 'resolved',
      time: '1 day ago',
      impact: 'Planned'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-100 text-blue-600';
      case 'emerald': return 'bg-emerald-100 text-emerald-600';
      case 'purple': return 'bg-purple-100 text-purple-600';
      case 'orange': return 'bg-orange-100 text-orange-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'text-emerald-600 bg-emerald-50';
      case 'monitoring': return 'text-yellow-600 bg-yellow-50';
      case 'investigating': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Platform Analytics</h2>
          <p className="text-gray-600 text-lg">Real-time insights and performance metrics across all AI services</p>
        </div>
        <div className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200">
          <CheckCircle className="w-4 h-4 text-emerald-500" />
          <span className="text-emerald-700 font-semibold">All Systems Operational</span>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${getColorClasses(stat.color)}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="flex items-center">
                    <TrendingUp className={`w-4 h-4 ${stat.trend === 'up' ? 'text-emerald-500' : 'text-red-500'} ${stat.trend === 'down' && stat.label.includes('Response') ? 'text-emerald-500 rotate-180' : ''}`} />
                    <span className={`text-sm ml-1 font-semibold ${stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'} ${stat.trend === 'down' && stat.label.includes('Response') ? 'text-emerald-600' : ''}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.period}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* System Health */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {systemMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${getColorClasses(metric.color)}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-medium">{metric.label}</p>
                  <p className="text-lg font-bold text-gray-900">{metric.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Services by Usage */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-gray-900">Top Services by Usage</h3>
            <BarChart3 className="w-6 h-6 text-gray-400" />
          </div>
          
          <div className="space-y-6">
            {topServices.map((service, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">{service.name}</span>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>{service.category}</span>
                        <span>•</span>
                        <span>{service.cost}</span>
                        <span className="text-emerald-600 font-medium">{service.growth}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-blue-600">{(service.requests / 1000000).toFixed(1)}M</div>
                    <div className="text-xs text-gray-500">{service.uptime}% uptime</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${(service.requests / 156000000) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Incidents */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-gray-900">Recent Incidents</h3>
            <AlertTriangle className="w-6 h-6 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {recentIncidents.map((incident, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{incident.service}</div>
                    <div className="text-sm text-gray-600 mt-1">{incident.issue}</div>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(incident.status)}`}>
                      {incident.status}
                    </span>
                    <span className="text-xs text-gray-500">{incident.time}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Impact: {incident.impact}</span>
                  {incident.status === 'resolved' && (
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">
                No active incidents. All services operating normally.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Analysis */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-8">Cost Analysis & Optimization</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-800">$47.2K</div>
                <div className="text-sm text-green-600">Monthly spend</div>
              </div>
            </div>
            <div className="text-xs text-green-700">
              <span className="font-medium">+12.3%</span> vs last month
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-800">$0.09</div>
                <div className="text-sm text-blue-600">Avg cost per 1K requests</div>
              </div>
            </div>
            <div className="text-xs text-blue-700">
              <span className="font-medium">-8.7%</span> optimization savings
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <BarChart3 className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-800">94.2%</div>
                <div className="text-sm text-purple-600">Cost efficiency score</div>
              </div>
            </div>
            <div className="text-xs text-purple-700">
              <span className="font-medium">Excellent</span> optimization level
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};