import { Link } from 'react-router-dom';
import { SponsorshipOpportunity } from '../types';
import { Church, Users, MapPin } from 'lucide-react';

interface Props {
  opportunity: SponsorshipOpportunity;
}

export default function OpportunityCard({ opportunity }: Props) {
  const progress = (opportunity.raised / opportunity.goal) * 100;

  return (
    <Link 
      to={`/opportunity/${opportunity.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-102 hover:shadow-lg"
    >
      <img
        src={opportunity.imageUrl}
        alt={opportunity.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-2">
          {opportunity.type === 'church' ? (
            <Church className="h-5 w-5 text-blue-600" />
          ) : (
            <Users className="h-5 w-5 text-blue-600" />
          )}
          <span className="text-sm font-medium text-blue-600 capitalize">
            {opportunity.type}
          </span>
        </div>
        <h3 className="text-xl font-serif font-semibold mb-2">{opportunity.name}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{opportunity.location}</span>
        </div>
        <p className="text-gray-600 mb-4">{opportunity.description}</p>
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
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
        <div className="text-blue-600 font-medium text-sm">
          Learn More →
        </div>
      </div>
    </Link>
  );
}