import { useState, useMemo } from 'react';
import { opportunities } from '../data/opportunities';
import { SponsorshipOpportunity } from '../types';

export function useOpportunities() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((opportunity) => {
      const matchesSearch = (
        opportunity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opportunity.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      const matchesType = selectedType === 'all' || opportunity.type === selectedType;
      
      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedType]);

  return {
    opportunities: filteredOpportunities,
    searchTerm,
    setSearchTerm,
    selectedType,
    setSelectedType,
  };
}