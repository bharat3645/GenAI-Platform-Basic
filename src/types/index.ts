export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  pricing: 'free' | 'freemium' | 'paid' | 'enterprise';
  tags: string[];
  capabilities: string[];
  documentation: string;
  apiEndpoint?: string;
  status: 'active' | 'maintenance' | 'deprecated';
  version: string;
  lastUpdated: string;
  usage: {
    requests: number;
    uptime: number;
  };
  codeExample?: string;
  features: {
    name: string;
    description: string;
    available: boolean;
  }[];
}

export interface FilterOptions {
  searchTerm: string;
  category: string;
  pricing: string;
}

export interface DashboardMetrics {
  totalApiCalls: string;
  activeServices: number;
  avgResponseTime: string;
  developers: string;
}

export interface ServiceUsage {
  name: string;
  requests: number;
  uptime: number;
}