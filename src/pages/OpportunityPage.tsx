import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Church, Users, MapPin, Calendar, ArrowLeft } from 'lucide-react';
import { opportunities } from '../data/opportunities';
import { SponsorshipTier, OneTimeTier } from '../types';
import DonationModal from '../components/DonationModal';

export default function OpportunityPage() {
  const { id } = useParams();
  const opportunity = opportunities.find(o => o.id === id);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('monthly');

  if (!opportunity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Opportunity Not Found</h2>
          <Link to="/" className="text-blue-600 hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const progress = (opportunity.raised / opportunity.goal) * 100;

  return (
    <>
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-blue-600">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Opportunities
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <img
              src={opportunity.imageUrl}
              alt={opportunity.name}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex items-center space-x-2 mb-4">
                {opportunity.type === 'church' ? (
                  <Church className="h-6 w-6 text-blue-600" />
                ) : (
                  <Users className="h-6 w-6 text-blue-600" />
                )}
                <span className="text-lg font-medium text-blue-600 capitalize">
                  {opportunity.type}
                </span>
              </div>
              
              <h1 className="text-3xl font-serif font-bold mb-4">{opportunity.name}</h1>
              
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{opportunity.location}</span>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-600 whitespace-pre-line">
                  {opportunity.detailedDescription}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-serif font-semibold mb-6">Recent Updates</h2>
              <div className="space-y-6">
                {opportunity.updates.map((update) => (
                  <div key={update.date} className="border-b pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-center text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <time>{new Date(update.date).toLocaleDateString()}</time>
                    </div>
                    <h3 className="text-xl font-medium mb-2">{update.title}</h3>
                    <p className="text-gray-600">{update.content}</p>
                    {update.imageUrl && (
                      <img
                        src={update.imageUrl}
                        alt={update.title}
                        className="mt-4 rounded-lg w-full h-48 object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-serif font-semibold mb-6">Photo Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {opportunity.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">
                    ${opportunity.raised.toLocaleString()} / ${opportunity.goal.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 rounded-full h-2 transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <button
                  onClick={() => {
                    setDonationType('monthly');
                    setShowDonationModal(true);
                  }}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Become a Monthly Sponsor
                </button>
                <button
                  onClick={() => {
                    setDonationType('one-time');
                    setShowDonationModal(true);
                  }}
                  className="w-full bg-white text-blue-600 border-2 border-blue-600 py-3 px-4 rounded-md hover:bg-blue-50 transition-colors"
                >
                  Make a One-Time Donation
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Monthly Sponsorship Tiers</h3>
                  {opportunity.sponsorshipTiers.map((tier) => (
                    <div key={tier.name} className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{tier.name}</h4>
                        <span className="text-blue-600 font-medium">
                          ${tier.amount}/month
                        </span>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {tier.benefits.map((benefit, index) => (
                          <li key={index}>• {benefit}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">One-Time Donation Options</h3>
                  {opportunity.oneTimeTiers.map((tier) => (
                    <div key={tier.amount} className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">${tier.amount}</span>
                      </div>
                      <p className="text-sm text-gray-600">{tier.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDonationModal && (
        <DonationModal
          opportunity={opportunity}
          onClose={() => setShowDonationModal(false)}
        />
      )}
    </>
  );
}