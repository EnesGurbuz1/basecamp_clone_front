// pages/YourBoosts.tsx
import React from 'react';

const YourBoosts: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-md shadow-md w-4/5 md:w-1/2">
                {/* Header Section */}
                <div className="flex items-center mb-6">
                    <div className="bg-gray-500 p-5 rounded-full text-white font-bold text-3xl mr-4">
                        M
                    </div>
                    <div className="flex-grow">
                        <h1 className="font-bold text-2xl">Your Boosts</h1>
                    </div>
                    <div className="text-red-600 border border-red-600 px-3 py-1 rounded-md">
                        <p className="text-xs">✓ Notifying you of new boosts every 3 hours</p>
                    </div>
                </div>
                {/* Divider */}
                <div className="border-t border-b border-yellow-300 my-6"></div>
                {/* Content Section */}
                <div className="flex flex-col items-center">
                    <div className="mb-4">
                        <img src="/path-to-your-rocket-image.png" alt="Rocket" className="h-20 w-20"/>
                    </div>
                    <h2 className="text-xl font-bold mb-4">No boosts just yet</h2>
                    <p className="text-center">
                        When you post something to Basecamp, others can send boosts (little notes of encouragement) to show they enjoyed your post,.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default YourBoosts;
