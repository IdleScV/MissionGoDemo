import React from "react";
import Hero from "../components/Hero";
import OpportunityCard from "../components/OpportunityCard";
import SearchFilters from "../components/SearchFilters";
import { useOpportunities } from "../hooks/useOpportunities";

export default function HomePage() {
  const {
    opportunities,
    searchTerm,
    setSearchTerm,
    selectedType,
    setSelectedType,
  } = useOpportunities();

  return (
    <>
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />

        {opportunities.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No opportunities found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        )}
      </main>

      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} MissionGo Sponsorships. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
