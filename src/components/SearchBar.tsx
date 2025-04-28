import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (username: string) => void;
  isLoading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading = false }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="relative w-full max-w-lg transition-all duration-300"
    >
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search size={18} className="text-gray-500" />
        </div>
        
        <input
          type="search"
          className="block w-full py-3 pl-10 pr-10 text-sm text-gray-900 border border-gray-200 
                     rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                     transition-all duration-200"
          placeholder="Enter complete GitHub username..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          disabled={isLoading}
        />
        
        {searchTerm && (
          <button
            type="button"
            className="absolute inset-y-0 right-12 flex items-center pr-3"
            onClick={handleClear}
          >
            <X size={16} className="text-gray-500 hover:text-gray-700" />
          </button>
        )}
        
        <button
          type="submit"
          className={`absolute right-0 top-0 bottom-0 px-4 text-white rounded-r-lg
                    transition duration-200 ${
                      isLoading 
                        ? 'bg-blue-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500'
                    }`}
          disabled={isLoading || !searchTerm.trim()}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;