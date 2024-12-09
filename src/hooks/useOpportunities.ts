import { useState, useMemo } from "react";
import { opportunities } from "../data/opportunities";
import { SponsorshipOpportunity, OpportunityTypeFilter } from "../types";

export function useOpportunities() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedType, setSelectedType] =
    useState<OpportunityTypeFilter>("all");

  const filteredOpportunities = useMemo(() => {
    // Add debugging logs
    console.log("Running filteredOpportunities memo...");
    console.log("Current searchTerm:", searchTerm);
    console.log("Current selectedType:", selectedType);

    // Ensure we’re looking at the right data
    console.log("All opportunities:", opportunities);

    const searchValue = searchTerm.toLowerCase();
    const result = opportunities.filter(
      (opportunity: SponsorshipOpportunity) => {
        const matchesSearch =
          opportunity.name.toLowerCase().includes(searchValue) ||
          opportunity.location.toLowerCase().includes(searchValue);

        const matchesType =
          selectedType === "all" || opportunity.type === selectedType;

        return matchesSearch && matchesType;
      }
    );

    console.log("Filtered opportunities based on current filters:", result);
    return result;
  }, [searchTerm, selectedType]);

  return {
    opportunities: filteredOpportunities,
    searchTerm,
    setSearchTerm,
    selectedType,
    setSelectedType,
  };
}
