import React, { useState } from 'react';
import { Github } from 'lucide-react';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import EmptyState from './components/EmptyState';
import { fetchGitHubUser } from './services/github';
import { GitHubUser } from './types/github';

function App() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (username: string) => {
    if (!username.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const userData = await fetchGitHubUser(username);
      setUser(userData);
      setHasSearched(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Header */}
        <header className="flex flex-col items-center mb-8 sm:mb-12">
          <div className="flex items-center mb-6">
            <Github size={32} className="text-blue-600 mr-3" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">GitHub User Search</h1>
          </div>
          
          <SearchBar onSearch={handleSearch} isLoading={loading} />
        </header>
        
        {/* Main Content */}
        <main className="flex justify-center mb-8">
          <div className="w-full animate-fadeIn">
            {loading ? (
              <div className="flex justify-center py-12">
                <Loading size={40} />
              </div>
            ) : error ? (
              <ErrorMessage message={error} />
            ) : user ? (
              <UserProfile user={user} />
            ) : (
              <EmptyState hasSearched={hasSearched} />
            )}
          </div>
        </main>
        
        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm mt-auto">
          <p>
            Built with React and the{' '}
            <a 
              href="https://docs.github.com/en/rest"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub API
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;