import React from 'react';

const MuratsActivity: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Murat’s activity</h1>
        <div className="border-dashed border-2 p-6 rounded-lg">
          <div className="flex flex-col items-center">
            <div className="bg-gray-300 p-4 rounded-full mb-4">
              <i className="fas fa-bell"></i> {/* This icon should be replaced with the appropriate bell icon.... */}
            </div>
            <p className="mb-4">No activity just yet</p>
            <p className="text-center">
              When Murat posts in Basecamp, it’ll show up here so you can keep track of their latest updates..
            </p>
          </div>
        </div>
        <button className="mt-4 bg-blue-600 text-white p-2 rounded-full w-full">
          Run this report for someone else
        </button>
      </div>
    </div>
  );
};

export default MuratsActivity;
