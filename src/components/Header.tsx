import { Cross } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Cross className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-serif font-semibold text-gray-900">
              Faithful Sponsorships
            </h1>
          </Link>
          <nav className="flex space-x-8">
            <Link to="/how-it-works" className={`${isActive('/how-it-works')} transition-colors`}>
              How It Works
            </Link>
            <Link to="/contact" className={`${isActive('/contact')} transition-colors`}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}