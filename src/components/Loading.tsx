import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingProps {
  size?: number;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({ size = 24, className = '' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Loader2 
        size={size} 
        className="animate-spin text-blue-600" 
        aria-label="Loading" 
      />
    </div>
  );
};

export default Loading;