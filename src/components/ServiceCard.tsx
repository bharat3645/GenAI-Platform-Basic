import React from 'react';
import { ExternalLink, Plus, Check, AlertCircle, Clock, CheckCircle, Zap, TrendingUp, DollarSign, Users } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onViewDetails: () => void;
  onAddToComparison: () => void;
  isInComparison: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onViewDetails,
  onAddToComparison,
  isInComparison
}) => {
  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'free': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'freemium': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'paid': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'enterprise': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4 text-emerald-500" />;
      case 'maintenance': return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'deprecated': return <AlertCircle className="w-4 h-4 text-red-500" />;
      default: return null;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Natural Language Processing': return '🧠';
      case 'Computer Vision': return '👁️';
      case 'Speech & Audio': return '🎵';
      case 'Conversational AI': return '💬';
      case 'Document Processing': return '📄';
      case 'Machine Learning': return '🤖';
      default: return '⚡';
    }
  };

  const getProviderLogo = (name: string) => {
    if (name.includes('GPT-4') || name.includes('OpenAI')) return '🤖';
    if (name.includes('Claude')) return '🎭';
    if (name.includes('Gemini')) return '💎';
    if (name.includes('Azure')) return '☁️';
    if (name.includes('Amazon') || name.includes('AWS')) return '📦';
    if (name.includes('Hugging Face')) return '🤗';
    if (name.includes('Cohere')) return '🔗';
    if (name.includes('ElevenLabs')) return '🎙️';
    return '⚡';
  };

  const formatRequests = (requests: number) => {
    if (requests >= 1000000) {
      return `${(requests / 1000000).toFixed(1)}M`;
    } else if (requests >= 1000) {
      return `${(requests / 1000).toFixed(1)}K`;
    }
    return requests.toString();
  };

  const getCostEstimate = (name: string) => {
    if (name.includes('GPT-4')) return '$0.01/1K tokens';
    if (name.includes('Claude')) return '$0.015/1K tokens';
    if (name.includes('Gemini')) return '$0.0005/1K tokens';
    if (name.includes('Azure')) return '$0.002/image';
    if (name.includes('Polly')) return '$0.004/1K chars';
    if (name.includes('Hugging Face')) return '$0.0002/request';
    if (name.includes('Cohere')) return '$0.0001/1K tokens';
    if (name.includes('ElevenLabs')) return '$0.18/1K chars';
    return 'Contact for pricing';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-blue-200 group">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{getProviderLogo(service.name)}</div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                {getStatusIcon(service.status)}
              </div>
              <p className="text-xs text-gray-500 font-medium">{service.category}</p>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-1">
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getPricingColor(service.pricing)}`}>
              {service.pricing.charAt(0).toUpperCase() + service.pricing.slice(1)}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {service.description}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <TrendingUp className="w-3 h-3 text-blue-500" />
              <span className="text-xs text-blue-600 font-medium">Usage</span>
            </div>
            <div className="text-sm font-bold text-blue-800">{formatRequests(service.usage.requests)}</div>
            <div className="text-xs text-blue-600">requests/month</div>
          </div>
          
          <div className="bg-emerald-50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Zap className="w-3 h-3 text-emerald-500" />
              <span className="text-xs text-emerald-600 font-medium">Uptime</span>
            </div>
            <div className="text-sm font-bold text-emerald-800">{service.usage.uptime}%</div>
            <div className="text-xs text-emerald-600">availability</div>
          </div>
        </div>

        {/* Cost Information */}
        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-3 h-3 text-gray-500" />
              <span className="text-xs text-gray-600 font-medium">Pricing</span>
            </div>
            <span className="text-xs font-bold text-gray-800">{getCostEstimate(service.name)}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {service.tags.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
              >
                {tag}
              </span>
            ))}
            {service.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                +{service.tags.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Uptime Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Reliability Score</span>
            <span className="font-semibold">{service.usage.uptime}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-500 ${
                service.usage.uptime >= 99.5 ? 'bg-emerald-500' : 
                service.usage.uptime >= 99 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${service.usage.uptime}%` }}
            ></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={onViewDetails}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Details</span>
          </button>
          
          <button
            onClick={onAddToComparison}
            disabled={isInComparison}
            className={`px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-center font-semibold ${
              isInComparison
                ? 'bg-emerald-100 text-emerald-700 cursor-not-allowed border-2 border-emerald-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-gray-200 hover:border-gray-300'
            }`}
          >
            {isInComparison ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};