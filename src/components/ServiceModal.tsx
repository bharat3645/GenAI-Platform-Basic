import React, { useState } from 'react';
import { X, Copy, ExternalLink, CheckCircle, Clock, AlertCircle, Code, BookOpen, Zap, Settings, Star, Globe, Shield, Users } from 'lucide-react';
import { Service } from '../types';

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    if (service.codeExample) {
      navigator.clipboard.writeText(service.codeExample);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-5 h-5 text-emerald-500" />;
      case 'maintenance': return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'deprecated': return <AlertCircle className="w-5 h-5 text-red-500" />;
      default: return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active & Operational';
      case 'maintenance': return 'Under Maintenance';
      case 'deprecated': return 'Deprecated';
      default: return 'Unknown Status';
    }
  };

  const getProviderInfo = (name: string) => {
    if (name.includes('GPT-4') || name.includes('OpenAI')) {
      return { provider: 'OpenAI', logo: '🤖', website: 'https://openai.com', founded: '2015' };
    }
    if (name.includes('Claude')) {
      return { provider: 'Anthropic', logo: '🎭', website: 'https://anthropic.com', founded: '2021' };
    }
    if (name.includes('Gemini')) {
      return { provider: 'Google', logo: '💎', website: 'https://ai.google', founded: '1998' };
    }
    if (name.includes('Azure')) {
      return { provider: 'Microsoft', logo: '☁️', website: 'https://azure.microsoft.com', founded: '1975' };
    }
    if (name.includes('Amazon') || name.includes('AWS')) {
      return { provider: 'Amazon Web Services', logo: '📦', website: 'https://aws.amazon.com', founded: '2006' };
    }
    if (name.includes('Hugging Face')) {
      return { provider: 'Hugging Face', logo: '🤗', website: 'https://huggingface.co', founded: '2016' };
    }
    if (name.includes('Cohere')) {
      return { provider: 'Cohere', logo: '🔗', website: 'https://cohere.ai', founded: '2019' };
    }
    if (name.includes('ElevenLabs')) {
      return { provider: 'ElevenLabs', logo: '🎙️', website: 'https://elevenlabs.io', founded: '2022' };
    }
    return { provider: 'Unknown', logo: '⚡', website: '#', founded: 'N/A' };
  };

  const getRealWorldUseCases = (name: string) => {
    if (name.includes('GPT-4')) {
      return [
        'Customer support chatbots',
        'Content generation and editing',
        'Code review and debugging',
        'Legal document analysis',
        'Educational tutoring systems'
      ];
    }
    if (name.includes('Claude')) {
      return [
        'Research paper analysis',
        'Constitutional AI applications',
        'Long-form content creation',
        'Code explanation and documentation',
        'Ethical AI decision making'
      ];
    }
    if (name.includes('Gemini')) {
      return [
        'Multimodal content analysis',
        'Real-time video understanding',
        'Google Workspace integration',
        'Educational content creation',
        'Scientific research assistance'
      ];
    }
    if (name.includes('Azure')) {
      return [
        'Medical image analysis',
        'Manufacturing quality control',
        'Retail inventory management',
        'Document digitization',
        'Accessibility applications'
      ];
    }
    if (name.includes('Polly')) {
      return [
        'Audiobook production',
        'Voice assistants',
        'E-learning platforms',
        'Accessibility tools',
        'Interactive voice response'
      ];
    }
    return [
      'Data analysis and insights',
      'Automation workflows',
      'Content personalization',
      'Predictive analytics',
      'User experience enhancement'
    ];
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'documentation', label: 'API Documentation', icon: Code },
    { id: 'examples', label: 'Code Examples', icon: Zap },
    { id: 'features', label: 'Features & Roadmap', icon: Settings }
  ];

  const providerInfo = getProviderInfo(service.name);
  const useCases = getRealWorldUseCases(service.name);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-8 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center space-x-4">
            <div className="text-3xl">{providerInfo.logo}</div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{service.name}</h2>
              <div className="flex items-center space-x-4 mt-2">
                {getStatusIcon(service.status)}
                <span className="text-sm font-medium text-gray-600">{getStatusText(service.status)}</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">Version {service.version}</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">by {providerInfo.provider}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[60vh]">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Service Description */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">About {service.name}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
              </div>

              {/* Provider Information */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span>Provider Information</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <span className="text-gray-600 font-medium">Company:</span>
                    <div className="font-semibold text-gray-900">{providerInfo.provider}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 font-medium">Founded:</span>
                    <div className="font-semibold text-gray-900">{providerInfo.founded}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 font-medium">Website:</span>
                    <a href={providerInfo.website} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800 flex items-center space-x-1">
                      <span>Visit Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                  <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center space-x-2">
                    <Star className="w-5 h-5 text-emerald-600" />
                    <span>Performance</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-medium">Monthly Requests:</span>
                      <span className="font-bold text-emerald-600">{(service.usage.requests / 1000000).toFixed(1)}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-medium">Uptime:</span>
                      <span className="font-bold text-emerald-600">{service.usage.uptime}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-medium">Avg Response:</span>
                      <span className="font-bold text-emerald-600">~250ms</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span>Security & Compliance</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-medium">SOC 2 Type II:</span>
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-medium">GDPR Compliant:</span>
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-medium">Data Encryption:</span>
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center space-x-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    <span>Support & SLA</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-medium">Support Level:</span>
                      <span className="font-semibold text-purple-600">24/7 Enterprise</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-medium">SLA Uptime:</span>
                      <span className="font-semibold text-purple-600">99.9%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-medium">Response Time:</span>
                      <span className="font-semibold text-purple-600">&lt; 1 hour</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real-world Use Cases */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Real-world Use Cases</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Capabilities */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Core Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.capabilities.map((capability, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-emerald-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Tags */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold border border-blue-200 hover:bg-blue-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'documentation' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">API Documentation</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.documentation}</p>
              </div>
              
              {service.apiEndpoint && (
                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-white">Base API Endpoint</h4>
                    <button
                      onClick={() => navigator.clipboard.writeText(service.apiEndpoint!)}
                      className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                    >
                      <Copy className="w-4 h-4" />
                      <span className="text-sm">Copy</span>
                    </button>
                  </div>
                  <code className="text-emerald-400 font-mono text-sm break-all">{service.apiEndpoint}</code>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span>Authentication</span>
                  </h4>
                  <p className="text-gray-600 mb-3">All API requests require authentication using API keys:</p>
                  <code className="bg-white p-3 rounded-lg block text-sm text-gray-800 border">
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </div>

                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-emerald-600" />
                    <span>Rate Limits</span>
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Free Tier:</span>
                      <span className="font-semibold">1,000 req/day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pro Tier:</span>
                      <span className="font-semibold">100,000 req/day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Enterprise:</span>
                      <span className="font-semibold">Custom limits</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'examples' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">Code Examples</h3>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors font-medium"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>
              
              {service.codeExample ? (
                <div className="bg-gray-900 rounded-xl overflow-hidden">
                  <div className="bg-gray-800 px-6 py-3 border-b border-gray-700 flex items-center justify-between">
                    <span className="text-gray-300 font-medium">JavaScript/TypeScript Example</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <pre className="p-6 text-gray-100 overflow-x-auto text-sm leading-relaxed">
                    <code>{service.codeExample}</code>
                  </pre>
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-xl">
                  <Code className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">No code examples available for this service.</p>
                </div>
              )}

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6">
                <h4 className="font-bold text-yellow-800 mb-2 flex items-center space-x-2">
                  <Star className="w-5 h-5" />
                  <span>Best Practices</span>
                </h4>
                <ul className="text-yellow-700 space-y-2 text-sm">
                  <li>• Always handle API errors gracefully with proper error handling</li>
                  <li>• Implement exponential backoff for rate limit handling</li>
                  <li>• Cache responses when appropriate to reduce API calls</li>
                  <li>• Use environment variables for API keys and sensitive data</li>
                  <li>• Monitor your usage to avoid unexpected costs</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Feature Availability & Roadmap</h3>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors">
                    <div className="mt-1">
                      {feature.available ? (
                        <CheckCircle className="w-6 h-6 text-emerald-500" />
                      ) : (
                        <Clock className="w-6 h-6 text-yellow-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-bold text-gray-900">{feature.name}</h4>
                        {!feature.available && (
                          <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-gray-50 flex justify-between items-center border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Last updated: {service.lastUpdated} • Version {service.version}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={onClose}
              className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors font-medium"
            >
              Close
            </button>
            <a
              href={providerInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2 font-semibold shadow-lg"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Try API</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};