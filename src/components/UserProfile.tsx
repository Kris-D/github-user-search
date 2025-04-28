import React from 'react';
import { GitHubUser } from '../types/github';
import { Users, Book, ExternalLink, MapPin, Building, Mail, Link as LinkIcon } from 'lucide-react';

interface UserProfileProps {
  user: GitHubUser;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg w-full max-w-3xl animate-fadeIn">
      <div className="sm:flex">
        {/* Profile Image */}
        <div className="sm:w-1/3 p-4 sm:p-6 flex flex-col items-center">
          <img 
            src={user.avatar_url} 
            alt={`${user.login}'s avatar`}
            className="w-32 h-32 sm:w-full sm:h-auto rounded-full sm:rounded-lg object-cover shadow-sm hover:shadow-md transition-shadow duration-300"
          />
          
          <div className="mt-4 w-full text-center sm:text-left">
            <a 
              href={user.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md text-sm font-medium transition-colors duration-200 w-full mt-2"
            >
              <ExternalLink size={16} />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
        
        {/* Profile Info */}
        <div className="sm:w-2/3 p-4 sm:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              {user.name || user.login}
            </h1>
            <p className="text-blue-600 text-sm font-medium mt-1">@{user.login}</p>
            
            {user.bio && (
              <div className="mt-4 flex items-start gap-2">
                <Book size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{user.bio}</p>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-3 rounded-lg flex items-center">
              <div className="mr-3 bg-blue-100 p-2 rounded-md">
                <Book size={16} className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Public Repos</p>
                <p className="font-semibold text-gray-900">{user.public_repos}</p>
              </div>
            </div>
            
            <div className="bg-purple-50 p-3 rounded-lg flex items-center">
              <div className="mr-3 bg-purple-100 p-2 rounded-md">
                <Users size={16} className="text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Followers</p>
                <p className="font-semibold text-gray-900">{user.followers}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            {user.location && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={16} className="text-gray-400" />
                <span>{user.location}</span>
              </div>
            )}
            
            {user.company && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Building size={16} className="text-gray-400" />
                <span>{user.company}</span>
              </div>
            )}
            
            {user.email && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail size={16} className="text-gray-400" />
                <a href={`mailto:${user.email}`} className="text-blue-600 hover:underline">
                  {user.email}
                </a>
              </div>
            )}
            
            {user.blog && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <LinkIcon size={16} className="text-gray-400" />
                <a 
                  href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline truncate max-w-[230px]"
                >
                  {user.blog}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;