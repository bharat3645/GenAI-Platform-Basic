import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { ServiceCard } from './components/ServiceCard';
import { SearchFilters } from './components/SearchFilters';
import { ServiceModal } from './components/ServiceModal';
import { Dashboard } from './components/Dashboard';
import { ComparisonTool } from './components/ComparisonTool';
import { services } from './data/services';
import { Service } from './types';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeTab, setActiveTab] = useState('catalog');
  const [comparisonServices, setComparisonServices] = useState<Service[]>([]);

  const categories = useMemo(() => {
    const cats = new Set(services.map(service => service.category));
    return ['all', ...Array.from(cats)];
  }, []);

  const pricingOptions = ['all', 'free', 'freemium', 'paid', 'enterprise'];

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          service.capabilities.some(cap => cap.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
      
      return matchesSearch && matchesCategory && matchesPricing;
    });
  }, [searchTerm, selectedCategory, selectedPricing]);

  const handleAddToComparison = (service: Service) => {
    if (comparisonServices.length < 3 && !comparisonServices.find(s => s.id === service.id)) {
      setComparisonServices([...comparisonServices, service]);
    }
  };

  const handleRemoveFromComparison = (serviceId: string) => {
    setComparisonServices(comparisonServices.filter(s => s.id !== serviceId));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'comparison':
        return (
          <ComparisonTool 
            services={comparisonServices}
            onRemoveService={handleRemoveFromComparison}
          />
        );
      default:
        return (
          <div className="space-y-8">
            <SearchFilters
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedPricing={selectedPricing}
              onPricingChange={setSelectedPricing}
              categories={categories}
              pricingOptions={pricingOptions}
            />
            
            {/* Results Summary */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {filteredServices.length} AI Services Available
                </h3>
                <p className="text-gray-600">
                  {searchTerm && `Results for "${searchTerm}" • `}
                  {selectedCategory !== 'all' && `${selectedCategory} • `}
                  {selectedPricing !== 'all' && `${selectedPricing} pricing`}
                </p>
              </div>
              {comparisonServices.length > 0 && (
                <div className="bg-blue-50 px-4 py-2 rounded-xl border border-blue-200">
                  <span className="text-blue-700 font-semibold">
                    {comparisonServices.length} service{comparisonServices.length > 1 ? 's' : ''} ready to compare
                  </span>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map(service => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onViewDetails={() => setSelectedService(service)}
                  onAddToComparison={() => handleAddToComparison(service)}
                  isInComparison={comparisonServices.some(s => s.id === service.id)}
                />
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🔍</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No Services Found</h3>
                  <p className="text-gray-600 mb-8">
                    No services match your current search criteria. Try adjusting your filters or search terms.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSelectedPricing('all');
                    }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        comparisonCount={comparisonServices.length}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}

export default App;