import React from 'react';
import { X, Check, X as CrossIcon, Zap, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Service } from '../types';

interface ComparisonToolProps {
  services: Service[];
  onRemoveService: (serviceId: string) => void;
}

export const ComparisonTool: React.FC<ComparisonToolProps> = ({ services, onRemoveService }) => {
  if (services.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
            <CrossIcon className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">No Services Selected</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Add services from the catalog to compare their features, pricing, capabilities, and performance metrics side by side.
          </p>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <p className="text-sm text-blue-700 font-medium">
              💡 You can compare up to 3 services simultaneously to make informed decisions.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const comparisonData = [
    { label: 'Pricing Model', key: 'pricing', icon: DollarSign },
    { label: 'Version', key: 'version', icon: Zap },
    { label: 'Status', key: 'status', icon: Clock },
    { label: 'Uptime', key: 'uptime', icon: TrendingUp },
    { label: 'Monthly Requests', key: 'requests', icon: TrendingUp },
    { label: 'API Endpoint', key: 'apiEndpoint', icon: Zap }
  ];

  const getFeatureComparison = () => {
    const allFeatures = new Set<string>();
    services.forEach(service => {
      service.features.forEach(feature => allFeatures.add(feature.name));
    });
    return Array.from(allFeatures);
  };

  const allFeatures = getFeatureComparison();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Service Comparison</h2>
          <p className="text-gray-600 text-lg mt-2">Compare features, capabilities, and performance across selected services</p>
        </div>
        <div className="bg-blue-50 px-4 py-2 rounded-xl border border-blue-200">
          <span className="text-blue-700 font-semibold">
            {services.length} of 3 services selected
          </span>
        </div>
      </div>

      {/* Service Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map(service => (
          <div key={service.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">
                  {service.category === 'Natural Language Processing' ? '🧠' : 
                   service.category === 'Computer Vision' ? '👁️' :
                   service.category === 'Speech & Audio' ? '🎵' :
                   service.category === 'Conversational AI' ? '💬' :
                   service.category === 'Document Processing' ? '📄' :
                   service.category === 'Machine Learning' ? '🤖' : '⚡'}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{service.name}</h3>
                  <p className="text-sm text-gray-500">{service.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemoveService(service.id)}
                className="text-gray-400 hover:text-red-500 transition-colors p-1 hover:bg-red-50 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">{service.description}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-blue-600">v{service.version}</span>
              <span className="text-gray-500">{service.usage.uptime}% uptime</span>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Comparison Table */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-4 border-b border-gray-200">
          <h3 className="font-bold text-gray-900 text-lg">Detailed Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left p-6 font-bold text-gray-900 w-48">Specification</th>
                {services.map(service => (
                  <th key={service.id} className="text-left p-6 font-bold text-gray-900 min-w-64">
                    <div className="flex items-center space-x-2">
                      <span>{service.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-6 font-semibold text-gray-700">Description</td>
                {services.map(service => (
                  <td key={service.id} className="p-6 text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </td>
                ))}
              </tr>
              
              {comparisonData.map(item => {
                const Icon = item.icon;
                return (
                  <tr key={item.key} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-6 font-semibold text-gray-700">
                      <div className="flex items-center space-x-2">
                        <Icon className="w-4 h-4 text-gray-500" />
                        <span>{item.label}</span>
                      </div>
                    </td>
                    {services.map(service => (
                      <td key={service.id} className="p-6 text-sm">
                        {item.key === 'pricing' && (
                          <span className="capitalize font-semibold text-blue-600">{service.pricing}</span>
                        )}
                        {item.key === 'version' && (
                          <span className="font-mono bg-gray-100 px-2 py-1 rounded">v{service.version}</span>
                        )}
                        {item.key === 'status' && (
                          <span className={`capitalize font-semibold ${
                            service.status === 'active' ? 'text-emerald-600' :
                            service.status === 'maintenance' ? 'text-yellow-600' :
                            'text-red-600'
                          }`}>
                            {service.status}
                          </span>
                        )}
                        {item.key === 'uptime' && (
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-emerald-600">{service.usage.uptime}%</span>
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-emerald-500 h-2 rounded-full"
                                style={{ width: `${service.usage.uptime}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                        {item.key === 'requests' && (
                          <span className="font-bold text-blue-600">{service.usage.requests.toLocaleString()}</span>
                        )}
                        {item.key === 'apiEndpoint' && (
                          <code className="text-xs bg-gray-100 px-2 py-1 rounded font-mono">
                            {service.apiEndpoint ? service.apiEndpoint.replace('https://api.genai-platform.com', '...') : 'N/A'}
                          </code>
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Feature Comparison */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 px-6 py-4 border-b border-gray-200">
          <h3 className="font-bold text-gray-900 text-lg">Feature Comparison Matrix</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left p-6 font-bold text-gray-900 w-48">Feature</th>
                {services.map(service => (
                  <th key={service.id} className="text-center p-6 font-bold text-gray-900 min-w-32">
                    {service.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map(featureName => (
                <tr key={featureName} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-6 font-semibold text-gray-700">{featureName}</td>
                  {services.map(service => {
                    const feature = service.features.find(f => f.name === featureName);
                    return (
                      <td key={service.id} className="p-6 text-center">
                        {feature ? (
                          feature.available ? (
                            <div className="flex items-center justify-center">
                              <Check className="w-6 h-6 text-emerald-500" />
                            </div>
                          ) : (
                            <div className="flex flex-col items-center">
                              <Clock className="w-5 h-5 text-yellow-500 mb-1" />
                              <span className="text-xs text-yellow-600 font-medium">Coming Soon</span>
                            </div>
                          )
                        ) : (
                          <CrossIcon className="w-6 h-6 text-gray-300 mx-auto" />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Capabilities Comparison */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <h3 className="font-bold text-gray-900 text-lg mb-6">Core Capabilities Comparison</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="space-y-4">
              <h4 className="font-bold text-gray-900 text-lg border-b border-gray-200 pb-2">
                {service.name}
              </h4>
              <ul className="space-y-3">
                {service.capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start space-x-3 text-sm">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};