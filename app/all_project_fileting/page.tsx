// pages/page.tsx
"use client"
import React from 'react';
import Head from 'next/head';

const Page: React.FC = () => {
  // Handler for button click (to simulate active state change..)
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Remove active class from all buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('bg-green-500', 'text-white');
    });

    // Add active class to the clicked button.
    e.currentTarget.classList.add('bg-green-500', 'text-white');
  };

  return (
    <>
      <Head>
        <title>All Projects</title>
      </Head>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">All Projects</h1>

            {/* Search bar */}
            <div className="flex items-center mb-4">
              <input
                type="text"
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
                placeholder="Find a project..."
              />
              <button className="bg-blue-500 text-white px-4 rounded-r-full hover:bg-blue-600">
                X
              </button>
            </div>

            {/* Filter buttons */}
            <div className="flex justify-between mb-4">
              <button
                onClick={handleButtonClick}
                className="filter-btn px-4 py-2 rounded text-gray-700 bg-white hover:bg-green-200 focus:outline-none"
              >
                A-Z
              </button>
              <button
                onClick={handleButtonClick}
                className="filter-btn px-4 py-2 rounded text-gray-700 bg-white hover:bg-green-200 focus:outline-none"
              >
                Pinned
              </button>
              <button
                onClick={handleButtonClick}
                className="filter-btn px-4 py-2 rounded text-gray-700 bg-white hover:bg-green-200 focus:outline-none"
              >
                All-access
              </button>
              <button
                onClick={handleButtonClick}
                className="filter-btn px-4 py-2 rounded text-gray-700 bg-white hover:bg-green-200 focus:outline-none"
              >
                Archived & Trashed
              </button>
            </div>

            {/* Project list */}
            <div className="space-y-2">
              <button className="block w-full text-left px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-green-200 focus:outline-none">
                Projects
              </button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-green-200 focus:outline-none">
                Wordpress External Project Documents
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
