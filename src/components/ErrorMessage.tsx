import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4 flex items-start">
      <AlertCircle className="text-red-500 mr-3 flex-shrink-0 mt-0.5" size={20} />
      <div>
        <h3 className="text-red-800 font-medium text-sm">Error</h3>
        <p className="text-red-700 text-sm mt-1">{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;