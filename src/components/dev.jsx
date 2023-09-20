import { useEffect, useState } from 'react';

const DevelopmentNotification = () => {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    // Automatically hide the notification after 4 seconds
    const timeout = setTimeout(() => {
      setShowNotification(false);
    }, 4000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

 

  return (
    showNotification && (
      <div className="fixed animate__fadeInRight animate__animated bottom-4 right-4 z-50">
        <div className="bg-green-600 p-4 rounded shadow-md">
          <p className="text-sm text-white font-semibold">
            This website is currently in active development.
          </p>
          <p className="text-gray-200 mt-1">
            Your feedback is encouraged!
          </p>
        </div>
      </div>
    )
  );
};

export default DevelopmentNotification;
