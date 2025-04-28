import { GitHubUser, GitHubError } from '../types/github';

/**
 * Fetches a GitHub user by username
 * @param username The GitHub username to fetch
 * @returns A promise that resolves to a GitHubUser object or null if not found
 * @throws Error if the API request fails for reasons other than a 404
 */
export async function fetchGitHubUser(username: string): Promise<GitHubUser | null> {
  if (!username.trim()) return null;
  
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      
      const errorData = await response.json() as GitHubError;
      throw new Error(errorData.message || 'Failed to fetch GitHub user');
    }
    
    return await response.json() as GitHubUser;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred');
  }
}