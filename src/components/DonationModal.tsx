import React from 'react';
import { X } from 'lucide-react';
import { SponsorshipOpportunity } from '../types';

interface DonationModalProps {
  opportunity: SponsorshipOpportunity;
  onClose: () => void;
}

export default function DonationModal({ opportunity, onClose }: DonationModalProps) {
  const donationAmounts = [25, 50, 100, 250, 500];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
        >
          <X className="h-6 w-6" />
        </button>
        
        <h3 className="text-2xl font-serif font-semibold mb-4">{opportunity.name}</h3>
        <p className="text-gray-600 mb-6">{opportunity.mission}</p>
        
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900">Select Donation Amount</h4>
          <div className="grid grid-cols-3 gap-3">
            {donationAmounts.map((amount) => (
              <button
                key={amount}
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md py-2 px-4 transition-colors"
              >
                ${amount}
              </button>
            ))}
            <div className="col-span-3">
              <input
                type="number"
                placeholder="Custom amount"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:ring-blue-500 focus:border-blue-500"
                min="1"
              />
            </div>
          </div>
          
          <div className="space-y-4 mt-6">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Donate Now
            </button>
            <button
              onClick={onClose}
              className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}