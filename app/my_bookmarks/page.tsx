// pages/bookmarks.tsx

"use client"
import React from 'react';

interface BookmarksProps {
  // Burada gerekirse başka prop'lar da ekleyebilirsiniz
}

const Bookmarks: React.FC<BookmarksProps> = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
            <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-4xl mx-5">
                <h1 className="mb-4 text-2xl font-semibold">Your Bookmarks</h1>
                <div className="flex items-center p-4 border-2 border-dashed border-gray-300 rounded-md">
                    <svg className="w-6 h-6 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M2 12a10 10 0 1020 0 10 10 0 00-20 0z"></path>
                    </svg>
                    <div className="flex-1">
                        <p className="font-medium">You haven’t bookmarked anything yet</p>
                        <p className="text-sm text-gray-500 mt-1">Hit the Bookmark option from the menu on any message, doc, to-do list, etc. to save it here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bookmarks;
