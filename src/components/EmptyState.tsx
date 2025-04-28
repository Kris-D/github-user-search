import React from 'react';
import { Github, Search } from 'lucide-react';

interface EmptyStateProps {
  hasSearched: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({ hasSearched }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-lg border border-gray-100 shadow-sm w-full max-w-md mx-auto">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 mb-4">
        {hasSearched ? (
          <Search size={28} className="text-blue-500" />
        ) : (
          <Github size={28} className="text-blue-500" />
        )}
      </div>
      
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {hasSearched ? "User Not Found" : "GitHub User Search"}
      </h2>
      
      <p className="text-gray-600 max-w-xs">
        {hasSearched 
          ? "We couldn't find any GitHub user with that username. Please try another search."
          : "Enter a GitHub username to see their profile information, repositories, and more."
        }
      </p>
    </div>
  );
};

export default EmptyState;