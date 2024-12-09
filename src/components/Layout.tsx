import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      {children}
    </div>
  );
}